import HeaderHome from "../components/HeaderHome";
import FooterSection from "../components/FooterSection";

function Payment() {
  return (
    <div className="h-screen">
      <nav>
        <HeaderHome />
      </nav>
      <main className="flex justify-center bg-[#DAE5D0]">
        <div className="bg-white w-[80%] mt-[120px] rounded-2xl flex p-[50x]">
          <div className="w-full flex flex-col lg:flex-row md:w-full px-[20px] py-[50px]">
            <div className="md:w-[50%] w-[90%] items-center md:ml-[80px] flex flex-col gap-8">
              <div className="mb-14 text-[20px] font-bold self-start ml-[25px]">
                Payment Method
              </div>

              <div className="flex justify-between w-[100%] flex-1 pr-[30px]">
                <div className="flex gap-[20px]">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <div className="icon-card">
                    <img src="./asset/svg/card-icon.svg" alt="logo-bank" />
                  </div>
                  <div className="icon-text">Card</div>
                </div>
                <div>
                  <img src="./asset/svg/arrow-up.svg" alt="arrrow-up" />
                </div>
              </div>
              <div className="cb">
                <div className="member-card">
                  <img src="./asset/svg/card-member.svg" alt="" />
                </div>
                <div className="icon-plus">
                  <img src="./asset/svg/tambah.svg" alt="icon-plus" />
                </div>
              </div>
              <div className="flex justify-between w-[90%] flex-1 pr-[30px]">
                <div className="cb">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <div className="icon-card">
                    <img src="./asset/svg/bank-transfer.svg" alt="logo-bank" />
                  </div>
                  <div className="icon-text">Bank Transfer</div>
                </div>
                <div>
                  <img src="./asset/svg/arrrow-down.svg" alt="arrrow-down" />
                </div>
              </div>

              <div className="flex justify-between w-[90%] flex-1 pr-[30px]">
                <div className="cb">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <div className="icon-card">
                    <img src="./asset/svg/retail.svg" alt="logo-retail" />
                  </div>
                  <div className="icon-text">Retail</div>
                </div>
                <div>
                  <img src="./asset/svg/arrrow-down.svg" alt="arrrow-down" />
                </div>
              </div>

              <div className="flex justify-between w-[90%] flex-1 pr-[30px]">
                <div className="cb">
                  <div>
                    <input type="checkbox" className="ckb" />
                  </div>
                  <div className="icon-card">
                    <img src="./asset/svg/e-money.svg" alt="logo-emoney" />
                  </div>
                  <div className="icon-text">E-money</div>
                </div>
                <div>
                  <img src="./asset/svg/arrrow-down.svg" alt="arrrow-down" />
                </div>
              </div>
            </div>
            <div className="flex flex-1 w-full justify-start md:mt-[0px] mt-[40px]">
              <div className="flex flex-col gap-12 md:gap-20 px-[50px] w-full">
                <div className="font-bold text-[20px]">Ticket Detail</div>

                <div className="flex flex-col gap-4">
                  <div className="flex justify-between pr-12">
                    <div>Event</div>
                    <div className="pd-sub-title">
                      Sights & Sounds Exhibition
                    </div>
                  </div>
                  <div className="flex justify-between pr-12">
                    <div>Ticket Section</div>
                    <div className="pd-sub-title">VIP</div>
                  </div>
                  <div className="flex justify-between pr-12">
                    <div>Quantity</div>
                    <div className="pd-sub-title">2</div>
                  </div>
                  <div className="flex justify-between pr-12">
                    <div>Total Payment</div>
                    <div className="pd-sub-title">$70</div>
                  </div>
                  <div>
                    <button className="w-full p-[5px] font-semibold text-xl border-[1px] outline-none bg-yellow-400 rounded-xl mt-[20px] h-[55px]">
                      Payment
                    </button>
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
export default Payment;
