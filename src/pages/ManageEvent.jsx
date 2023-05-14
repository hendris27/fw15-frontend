import FooterSection from "../components/FooterSection";
import HeaderHome from "../components/HeaderHome";
import UserSideBar from "../components/UserSideBar";
function ManageEvent() {
  return (
    <div className="h-screen">
      <nav className="headers">
        <HeaderHome />
      </nav>
      <main className="flex flex-row md:bg-[#DAE5D0] justify-between gap-12 pb-[50px] w-full pt-[150px] pr-10">
        <aside>
          <UserSideBar />
        </aside>
        <div className="w-full rounded-[30px] flex pb-[50px] justify-center md:justify-normal mr-5 bg-white overflow-hidden">
          <div className="main-content-create z-0">
            <div className="update-event hidden " id="form-create-data">
              <div className="mt-8 ml-14 text-[#373A42] font-bold text-xl">
                Create Event
              </div>
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
                    <button className="h-[61px] w-[315px] bg-[#0E8388] text-[#ffff] rounded-xl">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="hidden update-event" id="form-update-data">
              <div className="mt-8 ml-14 text-[#373A42] font-bold text-xl">
                Update Event
              </div>
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
                    <button className="h-[61px] w-[315px] bg-[#0E8388] text-[#ffff] rounded-xl">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="hidden update-event" id="form-detail-data">
              <div className="mt-8 ml-14 text-[#373A42] font-bold text-xl">
                Detail Event
              </div>
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
            <div className="w-full md:pl-[90px] flex flex-col md:flex-row md:gap-[550px]  z-10">
              <div className="mt-8  text-xl font-bold">Manage Event</div>
              <div
                className="flex gap-4 h-[50px] w-[125px] border border[rgba(234, 241, 255, 1) rounded-2xl 
           justify-center items-center content-center mt-8 bg-[#9ED5C5] hover:bg-[#0E8388] cursor-auto"
              >
                <div className="text-[#3366FF] hover:text-[white] cursor-auto text-xs">
                  Create
                </div>
              </div>
            </div>
            <div className="flex flex-col md:mt-[0px] mt-8">
              <div className="flex gap-4 md:gap-36 self-start  ml-[0px] md:ml-[60px] md:p-6">
                <div className="flex flex-col">
                  <div className="flex flex-col items-center h-[75px] w-[50px] justify-center border border-2 rounded-2xl ">
                    <div className="text-[#FF8900]">15</div>
                    <div className="text-[#C1C5D0]">Wed</div>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <div className="font-bold text-[24px]">
                    {" "}
                    Sights &amp; Sounds Exhibition
                  </div>
                  <div className="text-[12px] mt-4]"> Jakarta, Indonesia</div>
                  <div className="text-[12px]">Wed, 15 Nov, 4:00 PM</div>
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
                    <a href="#">
                      <div className="inline-block text-[12px] text-[#3366FF] mt-2.5">
                        Delete
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:ml-[90px] md:border-t-2 w-[90%]"> </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-4 md:gap-36 self-start  ml-[0px] md:ml-[60px] md:p-6">
                <div className="flex flex-col">
                  <div className="flex flex-col items-center h-[75px] w-[50px] justify-center border border-2 rounded-2xl ">
                    <div className="text-[#FF8900]">15</div>
                    <div className="text-[#C1C5D0]">Wed</div>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <div className="font-bold text-[24px]">
                    {" "}
                    Sights &amp; Sounds Exhibition
                  </div>
                  <div className="text-[12px] mt-4]"> Jakarta, Indonesia</div>
                  <div className="text-[12px]">Wed, 15 Nov, 4:00 PM</div>
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
                    <a href="#">
                      <div className="inline-block text-[12px] text-[#3366FF] mt-2.5">
                        Delete
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:ml-[90px] md:border-t-2 w-[90%]"> </div>
            </div>
            <div className="hidden md:block flex flex-col">
              <div className="flex gap-4 md:gap-36 self-start  ml-[0px] md:ml-[60px] md:p-6">
                <div className="flex flex-col">
                  <div className="flex flex-col items-center h-[75px] w-[50px] justify-center border border-2 rounded-2xl ">
                    <div className="text-[#FF8900]">15</div>
                    <div className="text-[#C1C5D0]">Wed</div>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <div className="font-bold text-[24px]">
                    {" "}
                    Sights &amp; Sounds Exhibition
                  </div>
                  <div className="text-[12px] mt-4]"> Jakarta, Indonesia</div>
                  <div className="text-[12px]">Wed, 15 Nov, 4:00 PM</div>
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
                    <a href="#">
                      <div className="inline-block text-[12px] text-[#3366FF] mt-2.5">
                        Delete
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:ml-[90px] md:border-t-2 w-[90%]"> </div>
            </div>
            <div className="hidden md:block flex flex-col">
              <div className="flex gap-4 md:gap-36 self-start  ml-[0px] md:ml-[60px] md:p-6">
                <div className="flex flex-col">
                  <div className="flex flex-col items-center h-[75px] w-[50px] justify-center border border-2 rounded-2xl ">
                    <div className="text-[#FF8900]">15</div>
                    <div className="text-[#C1C5D0]">Wed</div>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <div className="font-bold text-[24px]">
                    {" "}
                    Sights &amp; Sounds Exhibition
                  </div>
                  <div className="text-[12px] mt-4]"> Jakarta, Indonesia</div>
                  <div className="text-[12px]">Wed, 15 Nov, 4:00 PM</div>
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
                    <a href="#">
                      <div className="inline-block text-[12px] text-[#3366FF] mt-2.5">
                        Delete
                      </div>
                    </a>
                  </div>
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
}
export default ManageEvent;
