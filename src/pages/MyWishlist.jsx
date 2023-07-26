import UserSideBar from '../components/UserSideBar';
import HeaderHome from '../components/HeaderHome';
import FooterSection from '../components/FooterSection';
import { BiCalendar } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import http from '../helpers/http';
import moment from 'moment';
import { useEffect, useState } from 'react';

const MyWishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    async function getWishlists() {
      try {
        const { data } = await http(token).get('/wishlist');
        setWishlist(data.results);
      } catch (err) {
        console.warn(err);
      }
    }

    getWishlists();
  }, [token]);

  async function deleteAction(id) {
    const confirmed = window.confirm('Are you sure you want to delete this Event?');
    if (confirmed) {
      try {
        const { data } = await http(token).delete(`/wishlist/managedeleted/${id}`);
        console.log(data.results, 'event data');
        if (data.results) {
          navigate('/MyWishlist');
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
      <nav>
        <HeaderHome />
      </nav>
      <main className="flex flex-row md:bg-[#DAE5D0] justify-between gap-12 pb-[50px] w-full pt-[150px] pr-10">
        <aside>
          <UserSideBar />
        </aside>
        <div className="w-full rounded-[30px] flex pb-[50px] justify-center md:justify-normal mr-5 bg-white overflow-hidden">
          <div className="main-content-create z-0 w-full">
            <div className="w-full md:px-[50px] flex flex-col md:flex-row  justify-between z-10">
              <div className="mt-8  text-xl font-bold">My Wihlist</div>
              <div className="flex gap-4 h-[50px] w-[125px] border border[rgba(234, 241, 255, 1) rounded-2xl justify-center items-center content-center mt-8 bg-[#9ED5C5] hover:bg-white cursor-auto items-center justify-center">
                <div className="flex gap-2">
                  <div>
                    <BiCalendar color="#0E8388" size={25} />
                  </div>
                  <div className="text-[#3366FF] hover:text-black cursor-auto text-xs flex items-center justify-center">
                    March
                  </div>
                </div>
              </div>
            </div>
            {wishlist.length < 1 && (
              <div className="flex flex-col w-full h-full justify-center items-center md:h-full p-5 md:p-0">
                <div className="text-2xl font-bold text-red-400">Your Wishlist is Empty !!!</div>
                <div className="text-2xl font-bold text-red-400">Please Your add Wishlsit !!!</div>
              </div>
            )}
            {wishlist.map((items) => {
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
                        <div className="text-[12px] mt-4]">{`${items.location}, Indonesia`}</div>
                        <div className="text-[12px]"> {moment(items?.date).format('LLLL')}</div>
                      </div>
                    </div>
                    <div
                      onClick={() => deleteAction(items.id)}
                      className="inline-block text-[12px] cursor-pointer text-red-600 mt-2.5"
                    >
                      Delete
                    </div>
                  </div>
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
};

export default MyWishlist;
