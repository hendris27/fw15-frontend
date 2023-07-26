import { useNavigate, useParams } from 'react-router-dom';

import seat_mobile from '../assets/img/seat-booking-mobile.png';
import seat_web from '../assets/img/seat-booking-web.png';
import { BiSort } from 'react-icons/bi';
import FooterSection from '../components/FooterSection';
import HeaderHome from '../components/HeaderHome';
import React from 'react';
import http from '../helpers/http';
import { useSelector } from 'react-redux';
import { IoTicket } from 'react-icons/io5';
import { HiPlus, HiMinus } from 'react-icons/hi';
import UserSideBar from '../components/UserSideBar';

const Booking = () => {
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const { id: eventId } = useParams();
  const [sections, setSections] = React.useState([]);
  const [filledSection, setFilledSection] = React.useState({
    id: 0,
    quantity: 0,
  });

  const increment = (id) => {
    if (filledSection.quantity >= 2) {
      setFilledSection({ id, quantity: 4 });
    } else {
      setFilledSection({ id, quantity: filledSection.quantity + 1 });
    }
  };
  const decrement = (id) => {
    if (filledSection.quantity <= 0) {
      setFilledSection({ id, quantity: 0 });
    } else {
      setFilledSection({ id, quantity: filledSection.quantity - 1 });
    }
  };

  React.useEffect(() => {
    const getSections = async () => {
      const { data } = await http(token).get('/section');
      setSections(data.results);
    };
    getSections();
  }, [token]);

  const actionReservation = async () => {
    const form = new URLSearchParams({
      eventId,
      sectionId: filledSection.id,
      quantity: filledSection.quantity,
    }).toString();
    const { data } = await http(token).post('/reservation', form);
    console.log(data.results);

    navigate('/Payment', {
      state: {
        eventId,
        reservationId: data.results.reservationId,
        sections: data.results.sections,
        quantity: data.results.quantity,
        totalPayment: data.results.totalPayment,
      },
      replace: true,
    });
    console.log(data.results.reservationId, 'id reservation');
  };

  //   console.log(data.results.id);
  const selectedSection = filledSection && sections.filter((item) => item.id === filledSection.id)[0];
  return (
    <div className="h-screen">
      <nav className="headers">
        <HeaderHome />
      </nav>
      <main className="flex flex-row md:bg-[#DAE5D0] justify-between gap-12 pb-[50px] w-full pt-[120px] pr-10">
        <aside>
          <UserSideBar />
        </aside>
        <div className="bg-white md:w-[85%] w-full h-[100%]  rounded-xl overflow-hidden ">
          <div className="flex flex-col  w-full md:flex-row">
            <div className="flex flex-col flex-1 w-full items-center mt-[100px]">
              <div className="hidden md:block md:mt-[150px] mt-[0px] m">
                <img className="w-[500px] h-[410px] object-cover" src={seat_web} />
              </div>
              <div className="md:hidden">
                <img className="w-[500px] h-[410px] object-cover" src={seat_mobile} />
              </div>
            </div>

            <div className="flex flex-col flex-1 mt-[70px] p-16 w-full md:ml-[0px] ">
              <div className="w-full flex justify-between mr-[0px] mt-[30px]">
                <div className="flex">
                  <div className="font-medium text-xl mt-2">Tickets</div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-3.5 text-xs leading-[18px] tracking-[1px] text-[#FC1055]">BY PRICE</div>
                  <div className="h-[45px] w-[45px] border border-inherit p-2 rounded-xl mb-0 mr-[100px]">
                    <BiSort color="#00AFC1" size={25} />
                  </div>
                </div>
              </div>

              <div className="flex gap-[100px]"></div>

              {sections.map((item) => (
                <div className="flex mt-8 item-star justify-between gap-5" key={`section-select-${item.id}`}>
                  <div className="w-16">
                    <div className="flex justify-center items-center w-[45px] h-[45px] rounded-[5px] bg-[#F1EAFF] shadow-sm">
                      <i className="text-accent">
                        <IoTicket size={27} />
                      </i>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <div className="text-sm text-[#373a42] font-semibold tracking-[0.5px] uppercase">
                      Section {item.name}, Row 1
                    </div>
                    <div className="text-xs text-[#bdc0c4] font-medium capitalize">12 Seats available</div>
                    <div className="text-xs text-[#373a42] font-semibold tracking-[1px] capitalize mt-2">Quantity</div>
                  </div>
                  <div className="w-[40%] flex flex-col items-end gap-1">
                    <div className="self-center text-base text-[#373a42] font-semibold tracking-[1px]">
                      IDR{item.price}
                    </div>
                    <div className="self-center text-xs text-[#bdc0c4] font-medium tracking-[0.5px]">per person</div>
                    <div className="w-full flex items-center justify-between gap-2">
                      <button
                        onClick={() => decrement(item.id)}
                        className="border-2 rounded-md w-[33px] h-[30px] flex items-center justify-center hover:bg-red-600"
                      >
                        <i className="text-[#C1C5D0]">
                          <HiMinus size={17} />
                        </i>
                      </button>
                      <div className="text-xs text-[#373a42] font-semibold tracking-[1px] capitalize mt-2">
                        {item.id === filledSection.id ? filledSection.quantity : 0}
                      </div>
                      <button
                        onClick={() => increment(item.id)}
                        className="border-2 rounded-md w-[33px] h-[30px] flex items-center justify-center  hover:bg-green-600"
                      >
                        <i className="text-[#C1C5D0]">
                          <HiPlus size={17} />
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex justify-between ml-[50px] mr-[100px] mt-[22px]"></div>
              <div className="mt-6 boder border-b-2 w-[450px] border-inherit"></div>
              <div className="flex justify-between mr-[100px] mt-6">
                <div className="text-sm">Ticket Section</div>
                <div className="text-sm text-accent font-bold">{selectedSection?.name || '-'}</div>
              </div>
              <div className="flex justify-between mr-[100px] mt-6">
                <div className="text-sm">Quantity</div>
                <div className="text-sm text-accent font-bold">{filledSection?.quantity}</div>
              </div>
              <div className="flex justify-between mr-[100px] mt-6">
                <div className="text-sm">Total Payment</div>
                <div className="text-sm text-accent font-bold">
                  IDR {selectedSection?.price * filledSection?.quantity || '0'}
                </div>
              </div>
              <div className="flex w-full item-center md:ml-[0px] ml-[70px] mt-[50px] self-center shadow: 0px 8px 10px rgba(35, 149, 255, 0.3)">
                <div className="shadow-for-all-button flex items-center justify-center bg-accent md:w-[315px] h-[55px] rounded-2xl text-white text-base font-semibold tracking-[1px]">
                  <button onClick={actionReservation} className="h-full w-full flex items-center justify-center">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="footers">
        <FooterSection />
      </div>
    </div>
  );
};
export default Booking;
