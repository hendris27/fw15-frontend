import moment from 'moment';
import FooterSection from '../components/FooterSection';
import HeaderHome from '../components/HeaderHome';
import UserSideBar from '../components/UserSideBar';
import http from '../helpers/http';
import React from 'react';
import { useSelector } from 'react-redux';
function ManageEvent() {
  const [listMyEvent, setlistMyEvent] = React.useState([]);

  const token = useSelector((state) => state.auth.token);

  React.useEffect(() => {
    async function getMyEvent() {
      const { data } = await http(token).get('/event/manage');
      setlistMyEvent(data.results);
    }
    if (token) {
      getMyEvent();
    }
  }, [token, setlistMyEvent]);

  async function deleteAction(id) {
    const confirmed = window.confirm('Are you sure to Deleted this Articles');
    if (confirmed) {
      try {
        const { data } = await http(token).delete(`/event/${id}`);
        const getEvents = await http().get('/event/manage?limit=1000');
        if (data.results) {
          setlistMyEvent(getEvents.data.results);
        }
      } catch (error) {
        const message = error?.response?.data?.message;
        if (message) {
          console.log(message);
        }
      }
    }
  }

  return (
    <div className="h-screen">
      <nav className="headers">
        <HeaderHome />
      </nav>
      <main className="flex flex-row md:bg-[#DAE5D0] justify-between gap-12 pb-[50px] w-full pt-[120px] pr-10">
        <aside>
          <UserSideBar />
        </aside>
        <div className="w-full rounded-[30px] flex pb-[50px]   mr-5 bg-white overflow-hidden">
          <div className="z-0 w-full">
            <div className="update-event hidden " id="form-create-data">
              <div className="mt-8 ml-14 text-[#373A42] font-bold text-xl">Create Event </div>
              <form>
                <div className="flex flex-col w-[100%] px-[54px] mt-10 ">
                  <div className="flex mt-4 gap-16 justify-between w-[100%] ">
                    <div className="flex flex-col w-[50%] gap-12">
                      <label htmlFor="Name">
                        <span>Name</span>
                        <br />
                        <input
                          type="text"
                          className="mt-2 h-[55px] w-full border-[2px] border-[#C1C5D0] rounded-2xl outline-none px-8 "
                          placeholder="Input Name Event ..."
                        />
                      </label>
                      <label htmlFor="Name">
                        <span>Location</span>
                        <br />
                        <input
                          type="text"
                          className="mt-2 h-[55px] w-full border-[2px] border-[#C1C5D0] rounded-2xl outline-none px-8 "
                          placeholder="Select Location"
                        />
                      </label>
                      <label htmlFor="Price">
                        <span>Price</span>
                        <br />
                        <input
                          type="text"
                          className="mt-2 h-[55px] w-full border-[2px] border-[#C1C5D0] rounded-2xl outline-none px-8 "
                          placeholder="Input Price ..."
                        />
                      </label>
                    </div>
                    <div className="flex flex-col w-[50%] gap-12">
                      <label htmlFor="Category">
                        <span>Category</span>
                        <br />
                        <input
                          type="text"
                          className="mt-2 h-[55px] w-full border-[2px] border-[#C1C5D0] rounded-2xl outline-none px-8 "
                          placeholder="Select Category"
                        />
                      </label>
                      <label htmlFor="Date-Time-Show">
                        <span>Date Time Show</span>
                        <br />
                        <input
                          type="text"
                          className="mt-2 h-[55px] w-full border-[2px] border-[#C1C5D0] rounded-2xl outline-none px-8 "
                          placeholder="01/01/2022"
                        />
                      </label>
                      <label htmlFor="Image">
                        <span>Image</span>
                        <br />
                        <input
                          type="text"
                          className="mt-2 h-[55px] w-full border-[2px] border-[#C1C5D0] rounded-2xl outline-none px-8 "
                          placeholder="Chose File ..."
                        />
                      </label>
                    </div>
                  </div>
                  <div className="mt-12">
                    <label htmlFor="Detail">
                      <span>Detail</span>
                      <br />
                      <input
                        type="text"
                        className="mt-2 h-[95px] w-full border-[2px] border-[#C1C5D0] rounded-2xl outline-none px-8 "
                        placeholder="Input Detail ..."
                      />
                    </label>
                  </div>
                  <div className="flex self-end mt-12">
                    <button className="h-[61px] w-[315px] bg-[#0E8388] text-[#ffff] rounded-xl">Save</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="hidden update-event" id="form-update-data">
              <div className="mt-8 ml-14 text-[#373A42] font-bold text-xl">Update Event</div>
              <form>
                <div className="flex flex-col w-[100%] px-[54px] mt-10 ">
                  <div className="flex mt-4 gap-16 justify-between w-[100%] ">
                    <div className="flex flex-col w-[50%] gap-12">
                      <label htmlFor="Name">
                        <span>Name</span>
                        <br />
                        <input
                          type="text"
                          className="mt-2 h-[55px] w-full border-[2px] border-[#C1C5D0] rounded-2xl outline-none px-8 "
                          placeholder="Input Name Event ..."
                        />
                      </label>
                      <label htmlFor="Name">
                        <span>Location</span>
                        <br />
                        <input
                          type="text"
                          className="mt-2 h-[55px] w-full border-[2px] border-[#C1C5D0] rounded-2xl outline-none px-8 "
                          placeholder="Select Location"
                        />
                      </label>
                      <label htmlFor="Price">
                        <span>Price</span>
                        <br />
                        <input
                          type="text"
                          className="mt-2 h-[55px] w-full border-[2px] border-[#C1C5D0] rounded-2xl outline-none px-8 "
                          placeholder="Input Price ..."
                        />
                      </label>
                    </div>
                    <div className="flex flex-col w-[50%] gap-12">
                      <label htmlFor="Category">
                        <span>Category</span>
                        <br />
                        <input
                          type="text"
                          className="mt-2 h-[55px] w-full border-[2px] border-[#C1C5D0] rounded-2xl outline-none px-8 "
                          placeholder="Select Category"
                        />
                      </label>
                      <label htmlFor="Date-Time-Show">
                        <span>Date Time Show</span>
                        <br />
                        <input
                          type="text"
                          className="mt-2 h-[55px] w-full border-[2px] border-[#C1C5D0] rounded-2xl outline-none px-8 "
                          placeholder="01/01/2022"
                        />
                      </label>
                      <label htmlFor="Image">
                        <span>Image</span>
                        <br />
                        <input
                          type="text"
                          className="mt-2 h-[55px] w-full border-[2px] border-[#C1C5D0] rounded-2xl outline-none px-8 "
                          placeholder="Chose File ..."
                        />
                      </label>
                    </div>
                  </div>
                  <div className="mt-12">
                    <label htmlFor="Detail">
                      <span>Detail</span>
                      <br />
                      <input
                        type="text"
                        className="mt-2 h-[95px] w-full border-[2px] border-[#C1C5D0] rounded-2xl outline-none px-8 "
                        placeholder="Input Detail ..."
                      />
                    </label>
                  </div>
                  <div className="flex self-end mt-12">
                    <button className="h-[61px] w-[315px] bg-[#0E8388] text-[#ffff] rounded-xl">Save</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="hidden update-event" id="form-detail-data">
              <div className="mt-8 ml-14 text-[#373A42] font-bold text-xl">Detail Event</div>
              <form>
                <div className="flex flex-col w-[100%] px-[54px] mt-10 ">
                  <div className="flex mt-4 gap-16 justify-between w-[100%] ">
                    <div className="flex flex-col w-[50%] gap-12">
                      <label htmlFor="Name">
                        <span>Name</span>
                        <br />
                        <input
                          type="text"
                          className="mt-2 h-[55px] w-full border-[2px] border-[#C1C5D0] rounded-2xl outline-none px-8 "
                          placeholder="Input Name Event ..."
                        />
                      </label>
                      <label htmlFor="Name">
                        <span>Location</span>
                        <br />
                        <input
                          type="text"
                          className="mt-2 h-[55px] w-full border-[2px] border-[#C1C5D0] rounded-2xl outline-none px-8 "
                          placeholder="Select Location"
                        />
                      </label>
                      <label htmlFor="Price">
                        <span>Price</span>
                        <br />
                        <input
                          type="text"
                          className="mt-2 h-[55px] w-full border-[2px] border-[#C1C5D0] rounded-2xl outline-none px-8 "
                          placeholder="Input Price ..."
                        />
                      </label>
                    </div>
                    <div className="flex flex-col w-[50%] gap-12">
                      <label htmlFor="Category">
                        <span>Category</span>
                        <br />
                        <input
                          type="text"
                          className="mt-2 h-[55px] w-full border-[2px] border-[#C1C5D0] rounded-2xl outline-none px-8 "
                          placeholder="Select Category"
                        />
                      </label>
                      <label htmlFor="Date-Time-Show">
                        <span>Date Time Show</span>
                        <br />
                        <input
                          type="text"
                          className="mt-2 h-[55px] w-full border-[2px] border-[#C1C5D0] rounded-2xl outline-none px-8 "
                          placeholder="01/01/2022"
                        />
                      </label>
                      <label htmlFor="Image">
                        <span>Image</span>
                        <br />
                        <input
                          type="text"
                          className="mt-2 h-[55px] w-full border-[2px] border-[#C1C5D0] rounded-2xl outline-none px-8 "
                          placeholder="Chose File ..."
                        />
                      </label>
                    </div>
                  </div>
                  <div className="mt-12">
                    <label htmlFor="Detail">
                      <span>Detail</span>
                      <br />
                      <input
                        type="text"
                        className="mt-2 h-[95px] w-full border-[2px] border-[#C1C5D0] rounded-2xl outline-none px-8 "
                        placeholder="Input Detail ..."
                      />
                    </label>
                  </div>
                </div>
              </form>
            </div>
            {/* update-event */}
            <div className="px-16 w-full flex flex-col md:flex-row md:justify-between z-10">
              <div className="mt-8  text-xl font-bold">Manage Event</div>
              <div
                className="flex gap-4 h-[50px] w-[125px] border border[rgba(234, 241, 255, 1) rounded-2xl 
           justify-center items-center content-center mt-8 bg-[#9ED5C5] hover:bg-[#0E8388] cursor-auto"
              >
                <div className="text-[#3366FF] hover:text-[white] cursor-auto text-xs">Create</div>
              </div>
            </div>
            {listMyEvent.map((myEvent) => {
              return (
                <div className="flex flex-col md:mt-[0px] pt-4" key={`myEvent-${myEvent.id}`}>
                  <div className="flex gap-4 md:gap-36 self-start  ml-[0px] md:ml-[60px] md:p-6 bg-red-100 w-full">
                    <div className="flex flex-col">
                      <div className="flex flex-col items-center h-[75px] w-[50px] justify-center  border-2 rounded-2xl ">
                        <div className="text-[#FF8900]">{moment(myEvent?.date).format('DD')}</div>
                        <div className="text-[#C1C5D0]">{moment(myEvent?.date).format('LLLL').slice(0, 3)}</div>
                      </div>
                    </div>
                    <div className="flex flex-col ">
                      <div className="font-bold text-[24px]"> {myEvent?.tittle}</div>
                      <div className="text-[12px] mt-4]">{`${myEvent?.cityId}, Indonesia`}</div>
                      <div className="text-[12px]">{moment(myEvent?.date).format('LLLL')}</div>
                      <div>
                        <div className="cursor-pointer inline-block text-[12px] text-[#3366FF] mt-2.5 hover::after:top-[100%] ">
                          Detail
                        </div>
                        <button
                          className="cursor-pointer inline-block  p-4 text-[12px] text-[#3366FF] mt-2.5"
                          type="button"
                          id="update-data"
                        >
                          Update
                        </button>
                        <div
                          onClick={deleteAction}
                          className="inline-block text-[12px] cursor-pointer text-red-600 mt-2.5"
                        >
                          Delete
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:px-16 md:ml-16 md:border-t-2 w-[90%]"> </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <div className="footers">
        <FooterSection />
      </div>
    </div>
  );
}
export default ManageEvent;
