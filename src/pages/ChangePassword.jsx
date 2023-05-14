import FooterSection from "../components/FooterSection";
import HeaderHome from "../components/HeaderHome";
import UserSideBar from "../components/UserSideBar";

function ChangePassword() {
  return (
    <div className="h-screen">
      <nav className="headers">
        <HeaderHome />
      </nav>
      <main className="flex flex-row md:bg-[#DAE5D0] justify-between gap-12 pb-[50px] w-full pt-[150px] pr-10">
        <aside>
          <UserSideBar />
        </aside>
        <div className="w-full rounded-[30px] flex pb-[50px] gap-[100px] justify-center mr-5 bg-white mt-[0px] overflow-hidden">
          <div className="bg-[#fffF] w-full rounded-2xl flex flex-col gap-8 item-center ml-30px p-[30px] ml-12">
            <div className="w-full h-full ">
              <div>
                <div className="md:pl-[50px] text-2xl font-bold">
                  <label>Change Password</label>
                  <br />
                  <br />
                </div>
                <form className="flex flex-col gap-12">
                  <div className="flex flex-col md:flex-row md:justify-between md:px-[50px] gap- md:items-center md:w-[100%]">
                    <div className="">Old Password</div>
                    <div>
                      <input
                        className="w-[100%] h-[55px] rounded-xl px-[50px] border-box border-[1px] outline-none"
                        type="text"
                        placeholder="Old password"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between md:px-[50px] gap- md:items-center md:w-[100%]">
                    <div className="">New Password</div>
                    <div>
                      <input
                        className="w-[100%] h-[55px] rounded-xl px-[50px] border-box border-[1px] outline-none"
                        type="email"
                        placeholder="New password"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between md:px-[50px] gap- md:items-center md:w-[100%]">
                    <div className="">Confirm Password</div>
                    <div>
                      <input
                        className="w-[100%] h-[55px] rounded-xl px-[50px] border-box border-[1px] outline-none"
                        type="email"
                        placeholder="Confirm password"
                      />
                    </div>
                  </div>
                  <div className="px-[50px] mt-[50px] ">
                    <button className="btn btn-primary w-full rounded-2xl">
                      {" "}
                      Update
                    </button>
                  </div>
                </form>
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
export default ChangePassword;
