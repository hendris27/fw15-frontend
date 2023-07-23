import HeaderHome from '../components/HeaderHome';
import FooterSection from '../components/FooterSection';
import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import http from '../helpers/http';
import { BsBank2, BsCardHeading, BsPhone } from 'react-icons/bs';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import creditMemberCard from '../assets/img/card-display.png';
import UserSideBar from '../components/UserSideBar';

function Payment() {
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [selectedPayment, setSelectedPayment] = React.useState(null);
  const { reservationId } = state;

  const actionPayment = async (e) => {
    e.preventDefault();

    const form = new URLSearchParams({
      reservationId,
      paymentMethodId: selectedPayment,
    }).toString();
    const { data } = await http(token).post('/payment', form);
    if (data) {
      navigate('/MyBooking', { replace: true });
    }
  };
  return (
    <div className="h-screen">
      <nav>
        <HeaderHome />
      </nav>
      <main className="flex flex-row md:bg-[#DAE5D0] justify-between gap-12 pb-[50px] w-full pt-[120px] pr-10">
        <aside>
          <UserSideBar />
        </aside>
        <form
          onSubmit={actionPayment}
          className="container flex flex-col md:flex-row justify-between items-center gap-11 md:items-start bg-white px-7 lg:px-24 py-24 lg:rounded-3xl"
        >
          <div className="md:w-[50%] w-[90%] items-center md:ml-[80px] flex flex-col gap-8">
            <div className="mb-14 text-[20px] font-bold self-start ml-[25px]">Payment Method</div>

            <div className="flex justify-between w-full items-center gap-2">
              <div>
                <input
                  type="radio"
                  value="1"
                  onChange={(e) => setSelectedPayment(e.target.value)}
                  name="change-payment"
                />
              </div>
              <div className="w-[16%] ">
                <div className="flex  items-center justify-center w-12 h-10 rounded-[10px] bg-[#2da1ad33]">
                  <i className="text-[#FF8900]">
                    <BsCardHeading size={25} />
                  </i>
                </div>
              </div>
              <div className="w-full text-sm text-Black font-semibold tracking-[1px] capitalize">Member Card</div>
              <div>
                <i>
                  <FiChevronUp size={20} />
                </i>
              </div>
            </div>

            <div className="w-full scrollbar-hide flex justify-end items-center overflow-scroll">
              <div className="member-card flex items-center justify-start gap-4 w-[90%] ">
                <img src={creditMemberCard} alt="" />
              </div>
              <div className=" border-dashed border-2 border-[#056036] flex items-center justify-center rounded-2xl text-[#19afc6f1] text-[36px] min-w-[60px] w-[60px] h-[60px]">
                <a href="#">+</a>
              </div>
            </div>

            <div className="flex justify-between w-full items-center gap-2">
              <div>
                <input
                  type="radio"
                  value="2"
                  onChange={(e) => setSelectedPayment(e.target.value)}
                  name="change-payment"
                />
              </div>
              <div className="w-[16%] ">
                <div className="flex  items-center justify-center w-12 h-10 rounded-[10px] bg-[#68852933]">
                  <i className="text-[#559bf1]">
                    <BsPhone size={25} />
                  </i>
                </div>
              </div>
              <div className="w-full text-sm text-Black font-semibold tracking-[1px] capitalize">Mobile Banking</div>
              <div>
                <i>
                  <FiChevronDown size={20} />
                </i>
              </div>
            </div>
            <div className="flex justify-between w-full items-center gap-2">
              <div>
                <input
                  type="radio"
                  value="3"
                  onChange={(e) => setSelectedPayment(e.target.value)}
                  name="change-payment"
                />
              </div>
              <div className="w-[16%] ">
                <div className="flex  items-center justify-center w-12 h-10 rounded-[10px] bg-[#2da1ad33]">
                  <i className="text-[#FF8900]">
                    <BsBank2 size={25} />
                  </i>
                </div>
              </div>
              <div className="w-full text-sm text-Black font-semibold tracking-[1px] capitalize">Bank Transfer</div>
              <div>
                <i>
                  <FiChevronDown size={20} />
                </i>
              </div>
            </div>
          </div>

          <div className="flex flex-1 w-full justify-start md:mt-[0px] mt-[40px]">
            <div className="flex flex-col gap-12 md:gap-20 px-[50px] w-full">
              <div className="font-bold text-[20px]">Ticket Detail</div>

              <div className="flex flex-col gap-4">
                {/* <div className="flex justify-between pr-12">
                  <div>Event</div>
                  <div className="pd-sub-title">Sights & Sounds Exhibition</div>
                </div> */}
                <div className="flex justify-between pr-12">
                  <div>Ticket Section</div>
                  <div className="pd-sub-title">{state?.sections}</div>
                </div>
                <div className="flex justify-between pr-12">
                  <div>Quantity</div>
                  <div className="pd-sub-title">{state?.quantity}</div>
                </div>
                <div className="flex justify-between pr-12">
                  <div>Total Payment</div>
                  <div className="pd-sub-title">{state?.totalPayment}</div>
                </div>
                <div>
                  <button className="w-full p-[5px] font-semibold text-xl border-[1px] outline-none bg-yellow-400 rounded-xl mt-[20px] h-[55px]">
                    Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
      <div className="footers">
        <FooterSection />
      </div>
    </div>
  );
}
export default Payment;
