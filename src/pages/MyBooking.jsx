import logo_header from '../assets/img/header_logo.png';

import { FaWhatsappSquare } from 'react-icons/fa';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';

import { BiCalendar } from 'react-icons/bi';
import UserSideBar from '../components/UserSideBar';
import HeaderHome from '../components/HeaderHome';
import { useSelector } from 'react-redux';
import React from 'react';
import http from '../helpers/http';
import moment from 'moment';

function MyBooking() {
  const [myReservation, setMyReservation] = React.useState([]);
  const token = useSelector((state) => state.auth.token);

  React.useEffect(() => {
    async function getEventByMe() {
      const { data } = await http(token).get('/history');
      setMyReservation(data.results);
    }
    if (token) {
      getEventByMe();
    }
  }, [token, setMyReservation]);
  return (
    <div className="h-screen">
      <nav>
        <HeaderHome />
      </nav>
      <main className="flex flex-row md:bg-[#DAE5D0] justify-between gap-12 pb-[50px] w-full pt-[150px] pr-10">
        <aside>
          <UserSideBar />
        </aside>
        <div className="w-full rounded-[30px] flex pb-[50px] justify-center md:justify-normal mr-5 bg-white overflow-hidden">
          <div className="main-content-create z-0">
            <div className="w-full md:pl-[90px] flex flex-col md:flex-row md:gap-[550px]  z-10">
              <div className="mt-8  text-xl font-bold">My Booking</div>
              <div className="flex gap-4 h-[50px] w-[125px] border border[rgba(234, 241, 255, 1) rounded-2xl justify-center items-center content-center mt-8 bg-[#9ED5C5] hover:bg-white cursor-auto items-center justify-center">
                <div className="flex gap-2">
                  <div>
                    <BiCalendar color="#0E8388" size={25} />
                  </div>
                  <div className="text-[#3366FF] hover:text-black cursor-auto text-xs flex items-center justify-center">
                    {' '}
                    March{' '}
                  </div>
                </div>
              </div>
            </div>
            {myReservation.map((items) => {
              return (
                <div className="flex flex-col md:mt-[0px] mt-8" key={items.id}>
                  <div className=" flex gap-4 md:gap-36 justify-between  ml-[0px] md:ml-[60px] md:p-6">
                    <div className="flex gap-12">
                      <div className="flex flex-col">
                        <div className="flex flex-col items-center h-[75px] w-[50px] justify-center border border-2 rounded-2xl ">
                          <div className="text-[#FF8900]">{moment(items.date).format('DD')}</div>
                          {moment(items?.date).format('LLLL').slice(0, 3)}
                          <div className="text-[#C1C5D0]"></div>
                        </div>
                      </div>
                      <div className="flex flex-col ">
                        <div className="font-bold text-[24px]">{items.tittle}</div>
                        <div className="text-[12px] mt-4]">{`${items.name}, Indonesia`}</div>
                        <div className="text-[12px]"> {moment(items?.date).format('LLLL')}</div>
                        <div className="text-xs traacking-[0.5px] text-[#3366FF]">
                          <a href="#">Detail</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div>
              {myReservation.length < 1 && (
                <div className=" h-full flex flex-col items-center justify-center gap-7 ">
                  <div className="font-semibold text-2xl text-secondary">No Reservation Found</div>
                  <div className="font-medium text base max-w-[300px] text-center">
                    It seems that you haven&apos;t added any Reservations yet. Maybe try looking for this?
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <footer className="flex flex-col md:bg-[#DAE5D0] items-center">
        <div className="w-[75%] py-[50px]">
          <div className="section-top flex flex-col md:flex-row gap-[10px] justify-between">
            <div className="flex flex-col gap-4 md:gap-[0px]">
              <div>
                <img src={logo_header} />
              </div>
              <div className="font-semibold">Find events you love with our</div>
              <div className="flex md:gap-[10px] gap-4">
                <div>
                  <AiFillFacebook color="#C1C5D0" size={25} />
                </div>
                <div>
                  <FaInstagramSquare color="#C1C5D0" size={25} />
                </div>
                <div>
                  <AiFillTwitterSquare color="#C1C5D0" size={25} />
                </div>
                <div>
                  <FaWhatsappSquare color="#C1C5D0" size={25} />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-[0px]  gap-2 md:mt-[0px ] mt-[20px]">
              <div className="text-[#373A42] font-semibold text-base cursor-pointer hover:text-[#00AFC1]">Weatik</div>

              <div className="text-[#C1C5D0] hover:text-[#00AFC1] cursor-default">About Us</div>
              <div className="text-[#C1C5D0] hover:text-[#00AFC1] cursor-default">Features</div>
              <div className="text-[#C1C5D0] hover:text-[#00AFC1] cursor-default">Blog</div>
              <div className="text-[#C1C5D0] hover:text-[#00AFC1] cursor-default">Payments</div>
              <div className="text-[#C1C5D0] hover:text-[#00AFC1] cursor-default">Mobile App</div>
            </div>
            <div className="flex flex-col md:gap-[0px]  gap-2 md:mt-[0px ] mt-[20px]">
              <div className="text-[#373A42] font-semibold text-base cursor-pointer hover:text-[#00AFC1]">Features</div>
              <div className="text-[#C1C5D0] hover:text-[#00AFC1] cursor-default">Booking</div>
              <div className="text-[#C1C5D0] hover:text-[#00AFC1] cursor-default">Create Event</div>
              <div className="text-[#C1C5D0] hover:text-[#00AFC1] cursor-default">Discover</div>
              <div className="text-[#C1C5D0] hover:text-[#00AFC1] cursor-default">Register</div>
              <div></div>
            </div>
            <div className="flex flex-col md:gap-[0px]  gap-2 md:mt-[0px ] mt-[20px]">
              <div className="text-[#373A42] font-semibold text-base cursor-pointer hover:text-[#00AFC1]">Company</div>
              <div className="text-[#C1C5D0] hover:text-[#00AFC1] cursor-default">Partnership</div>
              <div className="text-[#C1C5D0] hover:text-[#00AFC1] cursor-default">Help</div>
              <div className="text-[#C1C5D0] hover:text-[#00AFC1] cursor-default">Terms of Service</div>
              <div className="text-[#C1C5D0] hover:text-[#00AFC1] cursor-default">Privacy Policy</div>
              <div className="text-[#C1C5D0] hover:text-[#00AFC1] cursor-default">Sitemap</div>
            </div>
          </div>
          <div className="w-full flex justify-start mt-10">
            <div className="font-bold">© 2020 Wetick All Rights Reserved</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default MyBooking;
