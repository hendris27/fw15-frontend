import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import FooterSection from '../components/FooterSection';
import HeaderHome from '../components/HeaderHome';
import UserSideBar from '../components/UserSideBar';
import http from '../helpers/http';
import { Formik } from 'formik';
import { FiPlusCircle } from 'react-icons/fi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import defaultIMGEvent from '../assets/img/defaultIMGEvent.png';

function ManageEvent() {
  const [listMyEvent, setlistMyEvent] = React.useState([]);
  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);
  const [locations, setLocations] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [selectedPicture, setSelectedPicture] = React.useState(false);
  const [openModal, setOpenModoal] = React.useState(false);
  const [pictureURI, setPictureURI] = React.useState('');
  React.useCallback(() => {
    async function getEvents() {
      const { data } = await http(token).get('/event/manage?limit=10');
      setlistMyEvent(data.results);
    }
    getEvents();
  }, [token]),
    React.useEffect(() => {
      async function getMyEvent() {
        const { data } = await http(token).get('/event/manage');
        setlistMyEvent(data.results);
      }
      if (token) {
        getMyEvent();
      }
    }, [token]);

  async function deleteAction(id) {
    const confirmed = window.confirm('Are you sure you want to delete this Event?');
    if (confirmed) {
      try {
        const { data } = await http(token).delete(`/event/${id}`);
        console.log(data.results, 'event data');
        if (data.results) {
          navigate('/ManageEvent');
        }
      } catch (error) {
        const message = error?.response?.data?.message;
        if (message) {
          console.log(message);
        }
      }
    }
  }
  React.useEffect(() => {
    async function getLocations() {
      const { data } = await http(token).get('/city');
      setLocations(data.results);
    }
    if (token) {
      getLocations();
    }
  }, [token, setLocations]);

  React.useEffect(() => {
    async function getCategories() {
      const { data } = await http(token).get('/category');
      setCategories(data.results);
    }
    if (token) {
      getCategories();
    }
  }, [token, setCategories]);

  const fileToDataUrl = (file) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setPictureURI(reader.result);
    });
    reader.readAsDataURL(file);
  };

  const changePicture = (e) => {
    const file = e.target.files[0];
    setSelectedPicture(file);
    fileToDataUrl(file);
  };

  const editProfile = async (values) => {
    setOpenModoal(true);
    const form = new FormData();
    Object.keys(values).forEach((key) => {
      if (values[key]) {
        if (key === 'birthDate') {
          form.append(key, moment(values[key]).format('YYYY-MM-DD'));
        } else {
          form.append(key, values[key]);
        }
      }
    });
    if (selectedPicture) {
      form.append('picture', selectedPicture);
    }

    const { data } = await http(token).post('/event/managecreate', form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    setOpenModoal(false);
    console.log(data);
  };
  return (
    <div className="h-screen">
      <nav className="headers">
        <HeaderHome />
      </nav>
      <main className="flex flex-row md:bg-[#DAE5D0] justify-between gap-12 pb-[50px] w-full pt-[120px] pr-10">
        <aside>
          <UserSideBar />
        </aside>
        <div className="w-full rounded-[30px] flex pb-[50px] mr-5 bg-white overflow-hidden">
          <div className="z-0 w-full">
            <div className="flex flex-col px-[50px] pt-12 gap-6 md:gap-0 md:flex-row md:items-center md:justify-between mb-7">
              <div className="text-xl text-[#373a42] font-semibold tracking-[1px]">Manage Event</div>
              <div className="w-32 h-14 rounded-2xl bg-[#EAF1FF] flex justify-center items-center">
                <label
                  htmlFor="my-modal-4"
                  className="w-full h-full flex justify-center items-center gap-4 text-xs font-medium tracking-1px text-accent"
                >
                  <i className="text-accent">
                    <FiPlusCircle size={25} />
                  </i>
                  Create
                </label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                <label htmlFor="my-modal-4" className="modal cursor-pointer">
                  <label
                    className="modal-box relative container-event-modal container w-full md:w-[90%] lg:max-w-[900px] bg-white"
                    htmlFor=""
                  >
                    <div>
                      <div className="text-[20px] text-[#373a42] font-semibold tracking-[1px] mb-11">Create Event</div>
                      <Formik
                        initialValues={{
                          tittle: '',
                          cityId: '',
                          categoryId: '',
                          date: '',
                          descriptions: '',
                        }}
                        onSubmit={editProfile}
                        enableReinitialize={true}
                      >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                          <form onSubmit={handleSubmit}>
                            <div className="flex flex-col md:flex-row justify-center items-center gap-9">
                              <div className="flex items-start w-full flex-1">
                                <div className="flex flex-col gap-3.5 w-full">
                                  <div className="flex flex-col align-start justify-start gap-3.5 w-full">
                                    <div className="text-sm text-[#373a42] tracking-[1px]">Name</div>
                                    <div className="w-full">
                                      <input
                                        name="tittle"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.tittle}
                                        type="text"
                                        className="input input-bordered w-full px-3 h-[55px] border-[#3a7d83] text-[#3a7d83] capitalize"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-col align-start justify-start gap-3.5 w-full">
                                    <div className="text-sm text-[#3a7d83] tracking-[1px]">Location</div>
                                    <div className="w-full">
                                      <select
                                        name="cityId"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="select select-bordered w-full px-3 h-[55px] border-[#3a7d83] text-[#3a7d83] capitalize"
                                      >
                                        <option className="hidden">Select Location</option>
                                        {locations.map((item) => {
                                          return (
                                            <React.Fragment key={`location-${item.id}`}>
                                              <option className="text-[#3a7d83] capitalize" value={item.id}>
                                                {item.name}
                                              </option>
                                            </React.Fragment>
                                          );
                                        })}
                                      </select>
                                    </div>
                                  </div>

                                  <div className="flex flex-col align-start justify-start gap-3.5 w-full">
                                    <div className="text-sm text-[#373a42] tracking-[1px]">Category</div>
                                    <div className="w-full">
                                      <select
                                        name="categoryId"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="select select-bordered w-full px-3 h-[55px] border-[#3a7d83] text-[#3a7d83] capitalize"
                                      >
                                        <option className="hidden">Select Category</option>
                                        {categories.map((item) => {
                                          return (
                                            <React.Fragment key={`location-${item.id}`}>
                                              <option className="text-[#3a7d83] capitalize" value={item.id}>
                                                {item.name}
                                              </option>
                                            </React.Fragment>
                                          );
                                        })}
                                      </select>
                                    </div>
                                  </div>
                                  <div className="flex flex-col align-start justify-start gap-3.5 w-full">
                                    <div className="text-sm  tracking-[1px] text-[#3a7d83] capitalize">
                                      Date Time Show
                                    </div>
                                    <div className="w-full">
                                      <input
                                        name="date"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.date}
                                        type="date"
                                        className="input input-bordered w-full px-3 h-[55px] border-[#3a7d83]"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-red-100 h-full w-full flex-1">
                                <div className="bg-green-100 w-full h-full flex flex-col gap-3.5 ">
                                  {selectedPicture && (
                                    <div className="w-full h-full bg-green-200 relative">
                                      <img
                                        className="p-4 w-full h-full object-cover border-4 border-[#3a7d83]"
                                        src={pictureURI}
                                        alt="picture event"
                                      />
                                    </div>
                                  )}
                                  {!selectedPicture && (
                                    <div className="w-full h-full items-center">
                                      <img
                                        className="w-full h-full object-cover border-4 border-[#3a7d83]"
                                        src={defaultIMGEvent}
                                        alt="picture event"
                                      />
                                    </div>
                                  )}
                                  <div>
                                    <label className="btn bg-[#fff] w-full h-10 rounded-xl border-2 border-[#3a7d83] text-[#3a7d83] text-sm font-semibold tracking-[1px] mb-4">
                                      <span>Choose photo</span>
                                      <input name="picture" onChange={changePicture} className="hidden" type="file" />
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-[20px] text-[#373a42] font-semibold tracking-[1px] mt-11">
                              <div className="text-sm text-[#373a42] tracking-[1px] mb-3">Detail</div>
                              <div className="w-full">
                                <textarea
                                  name="descriptions"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.descriptions}
                                  className="border-2 w-full rounded-xl text-sm tracking-[1px] px-3.5 py-3.5"
                                  cols="30"
                                  rows="3"
                                  placeholder="Input Detail"
                                ></textarea>
                              </div>
                            </div>
                            <div className="w-full flex items-center justify-end mt-11">
                              <button
                                className="shadow-for-all-button w-[315px] h-[55px] rounded-xl bg-[#76c4b7] text-white text-sm font-semibold tracking-[1px]"
                                type="submit"
                              >
                                Save
                              </button>
                            </div>
                          </form>
                        )}
                      </Formik>
                    </div>
                  </label>
                </label>
              </div>
            </div>
            {/* Konten lainnya */}
            {/* <div className="px-16 w-full flex flex-col md:flex-row md:justify-between z-10">
              <div className="mt-8  text-xl font-bold">Manage Event</div>
              <div
                className="flex gap-4 h-[50px] w-[125px] border border[rgba(234, 241, 255, 1) rounded-2xl 
           justify-center items-center content-center mt-8 bg-[#9ED5C5] hover:bg-[#0E8388] cursor-auto"
              >
                <div className="text-[#3366FF] hover:text-[white] cursor-auto text-xs">Create</div>
              </div>
            </div> */}
            {listMyEvent.length < 1 && (
              <div className="flex flex-col w-full h-full justify-center items-center">
                <div className="text-2xl font-bold text-red-400">Your Event is Empty !!!</div>
                <div className="text-2xl font-bold text-red-400">Please Create Your Event !!!</div>
              </div>
            )}
            {listMyEvent.map((myEvent) => (
              <div className="flex flex-col md:mt-[0px] pt-4" key={`myEvent-${myEvent.id}`}>
                <div className="flex gap-4 md:gap-36 self-start ml-[0px] md:ml-[60px] md:p-6 bg-red-100 w-full">
                  <div className="flex flex-col">
                    <div className="flex flex-col items-center h-[75px] w-[50px] justify-center border-2 rounded-2xl">
                      <div className="text-[#FF8900]">{moment(myEvent?.date).format('DD')}</div>
                      <div className="text-[#C1C5D0]">{moment(myEvent?.date).format('LLLL').slice(0, 3)}</div>
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <div className="font-bold text-[24px]"> {myEvent?.tittle}</div>
                    <div className="text-[12px] mt-4]">{`${myEvent?.cityId}, Indonesia`}</div>
                    <div className="text-[12px]">{moment(myEvent?.date).format('LLLL')}</div>
                    <div>
                      <div className="cursor-pointer inline-block text-[12px] text-[#3366FF] mt-2.5 hover::after:top-[100%]">
                        Detail
                      </div>
                      <button
                        className="cursor-pointer inline-block p-4 text-[12px] text-[#3366FF] mt-2.5"
                        type="button"
                        id="update-data"
                      >
                        Update
                      </button>
                      <div
                        onClick={() => deleteAction(myEvent.id)}
                        className="inline-block text-[12px] cursor-pointer text-red-600 mt-2.5"
                      >
                        Delete
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:px-16 md:ml-16 md:border-t-2 w-[90%]"> </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <div className="footers">
        <FooterSection />
      </div>
      <div>
        <input type="checkbox" id="loading" className="modal-toggle" checked={openModal} />
        <div className="modal">
          <div className="modal-box bg-transparent h-40 shadow-none overflow-hidden">
            <div className="flex flex-col justify-center items-center">
              <AiOutlineLoading3Quarters className="animate-spin" size={70} color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageEvent;
