import UserSideBar from "../components/UserSideBar";
import HeaderHome from "../components/HeaderHome";
import FooterSection from "../components/FooterSection";
import { BiHeart } from "react-icons/bi";
import { BiCalendar } from "react-icons/bi";

function MyWishlist() {
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
              <div className="mt-8  text-xl font-bold">My Wihlist</div>
              <div
                className="flex gap-4 h-[50px] w-[125px] border border[rgba(234, 241, 255, 1) rounded-2xl 
           justify-center items-center content-center mt-8 bg-[#9ED5C5] hover:bg-white cursor-auto items-center justify-center"
              >
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
            <div className="flex flex-col md:mt-[0px] mt-8">
              <div className=" flex gap-4 md:gap-36 justify-between  ml-[0px] md:ml-[60px] md:p-6">
                <div className="flex gap-12">
                  <div className="flex flex-col">
                    <div className="flex flex-col items-center h-[75px] w-[50px] justify-center border border-2 rounded-2xl ">
                      <div className="text-[#FF8900]">15</div>
                      <div className="text-[#C1C5D0]">Wed</div>
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <div className="font-bold text-[24px]">
                      Sights &amp; Sounds Exhibition
                    </div>
                    <div className="text-[12px] mt-4]"> Jakarta, Indonesia</div>
                    <div className="text-[12px]">Wed, 15 Nov, 4:00 PM</div>
                  </div>
                </div>
                <button className="flex itmes-start">
                  <BiHeart size={25} />
                </button>
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
}
export default MyWishlist;
