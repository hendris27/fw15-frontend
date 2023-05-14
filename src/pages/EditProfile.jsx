import FooterSection from "../components/FooterSection";
import HeaderHome from "../components/HeaderHome";
import UserSideBar from "../components/UserSideBar";

function EditProfile() {
  return (
    <div className="h-screen">
      <nav className="headers">
        <HeaderHome />
      </nav>
      <main className="flex flex-row md:bg-[#DAE5D0] justify-between gap-12 pb-[50px] w-full pt-[150px] pr-10">
        <aside>
          <UserSideBar />
        </aside>
        <div className="w-full h-full rounded-[30px] flex pb-[50px] gap-[100px] justify-center mr-5 bg-white mt-[0px] overflow-hidden">
          <div className="ml-[50px] mt-[0px] md:mt-[75px]  flex flex-col flex-1 w-[100%] md:w-full">
            <div className="md:hidden flex justify-center content-center self-center">
              <img src="./asset/png/c-zoro.png" alt="" />
            </div>
            <div className="md:mt-[0px] mt-[30px] text-xl font-semibold">
              Profile
            </div>
            <div className="flex mt-[50px]">
              <div className="flex flex-col gap-[50px] w-full">
                <div className="flex flex-col gap-6">
                  <div>Name</div>
                  <div className="md:hidden">
                    <input
                      className="border-[1px] hover:border-[#0E8388] border-[#C1C5D0] outline-0 border-1 h-[55px] w-full rounded-xl p-2 mt-[-40px]"
                      type="text"
                      placeholder="Roronoa"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div>User name</div>
                  <div className="md:hidden">
                    <div className="flex gap-4">
                      <div className="text-[#777777] text-sm leading-[21px] tracking-[1px]">
                        @jhont0
                      </div>
                      <div className="hover:border-[#0E8388] hover:text-[#0E8388] text-[#3366FF] text-sm leading-[21px] tracking-[1px] border-b-2 border-[#3366FF]">
                        <a href="#"> Edit</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div>Email</div>
                  <div className="md:hidden">
                    <div className="flex gap-4">
                      <div className="text-[#777777] text-sm leading-[21px] tracking-[1px]">
                        jhont0@mail.com
                      </div>
                      <div className="hover:border-[#0E8388] hover:text-[#0E8388] text-[#3366FF] text-sm leading-[21px] tracking-[1px] border-b-2 border-[#3366FF]">
                        <a href="#"> Edit</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div>Phone Number</div>
                  <div className="md:hidden">
                    <div className="flex gap-4">
                      <div className="text-[#777777] text-sm leading-[21px] tracking-[1px]">
                        081234567890
                      </div>
                      <div className="hover:border-[#0E8388] hover:text-[#0E8388] text-[#3366FF] text-sm leading-[21px] tracking-[1px] border-b-2 border-[#3366FF]">
                        <a href="#"> Edit</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div>Gender</div>
                  <div className="md:hidden">
                    <div className="flex gap-4">
                      <div>
                        <input type="radio" />
                        &nbsp; Male
                      </div>
                      <div>
                        <input type="radio" />
                        &nbsp; Female
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="py-2">Profession</div>
                  <div className="md:hidden">
                    <div className="">
                      <select
                        className="border-[1px] hover:border-[#0E8388] border-[#C1C5D0] w-full h-[55px] outline-0 rounded-xl px-4"
                        name="Prefession"
                        id="Prefession"
                      >
                        <option value="Entreprenur">Entreprenur</option>
                        <option value="Student">Student</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="py-6">Nationality</div>
                  <div className="md:hidden">
                    <div className="w-full">
                      <select
                        className="border-[1px] hover:border-[#0E8388] border-[#C1C5D0]  w-full h-[55px] outline-0 rounded-xl px-4"
                        name="Nationality"
                        id="Nationality"
                      >
                        <option value="Indonesia">Indonesia</option>
                        <option value="Singapura">Singapura</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="md:hidden">
                  <div className="flex flex-col gap-6">
                    <div className="py-6">Birthday Date</div>
                    <div className="flex gap-4">
                      <div>
                        <input
                          className="appearance-none outline-0"
                          type="date"
                        />
                      </div>
                      <div className="text-[#3366FF] hover:border-[#0E8388] hover:text-[#0E8388] text-sm leading-[21px] tracking-[1px] border-b-2 border-[#3366FF]">
                        <a href="#"> Edit</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:hidden">
                  <button className="w-full h-[55px] bg-[#0E8388] hover:text-black text-white rounded-xl">
                    Save
                  </button>
                </div>
              </div>
              <div className="hidden md:block md:flex md:flex-col md:gap-[50px] md:w-full">
                <div className="hidden md:block">
                  <input
                    className="border-[1px] hover:border-[#0E8388] border-[#C1C5D0] outline-0 border-1 h-[55px] w-full rounded-xl p-2 mt-[-40px]"
                    type="text"
                    placeholder="Roronoa"
                  />
                </div>
                <div className=" flex gap-4">
                  <div className="text-[#777777] text-sm leading-[21px] tracking-[1px]">
                    @jhont0
                  </div>
                  <div className="hover:border-[#0E8388] hover:text-[#0E8388] text-[#3366FF] text-sm leading-[21px] tracking-[1px] border-b-2 border-[#3366FF]">
                    <a href="#"> Edit</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#777777] text-sm leading-[21px] tracking-[1px]">
                    jhont0@mail.com
                  </div>
                  <div className="hover:border-[#0E8388] hover:text-[#0E8388] text-[#3366FF] text-sm leading-[21px] tracking-[1px] border-b-2 border-[#3366FF]">
                    <a href="#"> Edit</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#777777] text-sm leading-[21px] tracking-[1px]">
                    081234567890
                  </div>
                  <div className="hover:border-[#0E8388] hover:text-[#0E8388] text-[#3366FF] text-sm leading-[21px] tracking-[1px] border-b-2 border-[#3366FF]">
                    <a href="#"> Edit</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div>
                    <input type="radio" />
                    &nbsp; Male
                  </div>
                  <div>
                    <input type="radio" />
                    &nbsp; Female
                  </div>
                </div>
                <div className="w-full">
                  <select
                    className="border-[1px] hover:border-[#0E8388] border-[#C1C5D0] w-full h-[55px] outline-0 rounded-xl px-4"
                    name="Prefession"
                    id="Prefession"
                  >
                    <option value="Entreprenur">Entreprenur</option>
                    <option value="Student">Student</option>
                  </select>
                </div>
                <div className="w-full">
                  <select
                    className="border-[1px] hover:border-[#0E8388] border-[#C1C5D0]  w-full h-[55px] outline-0 rounded-xl px-4"
                    name="Nationality"
                    id="Nationality"
                  >
                    <option value="Indonesia">Indonesia</option>
                    <option value="Singapura">Singapura</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex flex-col w-full mt-[50px]">
                <div className="flex gap-[200px] ">
                  <div>Birthday Date</div>
                  <div className="flex gap-4">
                    <div>
                      <input
                        className="appearance-none outline-0"
                        type="date"
                      />
                    </div>
                    <div className="text-[#3366FF] hover:border-[#0E8388] hover:text-[#0E8388] text-sm leading-[21px] tracking-[1px] border-b-2 border-[#3366FF]">
                      <a href="#"> Edit</a>
                    </div>
                  </div>
                </div>
                <div className="mt-[50px]">
                  <button className="w-full h-[55px] bg-[#0E8388] hover:text-black text-white rounded-xl">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block mt-[75px]  flex flex-1 justify-center border-l-2 h-[315px] border-[#C1C5D025%]">
            <div className="flex flex-col  items-center gap-8">
              <div>
                <img src="./asset/png/c-zoro.png" alt="" />
              </div>
              <div>
                <div className="flex items-center justify-center hover:text-[#0E8388] text-[black] h-[40px] w-[255px] rounded-[10px] border-[1px] hover:border-[#0E8388] border-[black]">
                  Choose Photo
                </div>
              </div>
              <div>
                <label
                  className="text-xs text-[#373A42 75%] font-normal"
                  htmlFor="information"
                >
                  Image size: max, 2 MB
                </label>
                <br />
                <label
                  className="text-xs text-[#373A42 75%] font-normal"
                  htmlFor="information"
                >
                  Image formats: .JPG, .JPEG, .PNG
                </label>
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
export default EditProfile;
