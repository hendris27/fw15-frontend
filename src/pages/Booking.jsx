import { Link } from 'react-router-dom'

import seat_mobile from '../assets/img/seat-booking-mobile.png'
import seat_web from '../assets/img/seat-booking-web.png'
import ticket_reg from '../assets/svg/ticket_reg.svg'
import ticket_vip from '../assets/svg/ticket_vip.svg'
import ticket_vvip from '../assets/svg/ticket_vvip.svg'

import { BiSort } from 'react-icons/bi'

import FooterSection from '../components/FooterSection'
import HeaderHome from '../components/HeaderHome'

const Booking = () => {
    return (
        <div className='h-screen'>
            <nav className='headers'>
                <HeaderHome />
            </nav>
            <main className='flex justify-center bg-[#DAE5D0]'>
                <div className='bg-white md:w-[85%] w-full h-[100%] mt-[50px] md:mt-[130px] rounded-xl overflow-hidden '>
                    <div className='flex flex-col content-center w-full md:flex-row'>
                        <div className='flex flex-col flex-1 w-full items-center mt-[100px]'>
                            <div className='hidden md:block md:mt-[150px] mt-[0px] m'>
                                <img
                                    className='w-[500px] h-[410px] object-cover'
                                    src={seat_web}
                                />
                            </div>
                            <div className='md:hidden'>
                                <img
                                    className='w-[500px] h-[410px] object-cover'
                                    src={seat_mobile}
                                />
                            </div>
                        </div>

                        <div className='flex flex-col flex-1 mt-[70px] p-16 md:justify-center md:ml-[0px] ml-[80px]'>
                            <div className='flex justify-between justify-between gap-[20px]mr-[100px] mt-[30px]'>
                                <div className='flex'>
                                    <div className='font-medium text-xl mt-2'>
                                        Tickets
                                    </div>
                                </div>
                                <div className='flex gap-4'>
                                    <div className='mt-3.5 text-xs leading-[18px] tracking-[1px] text-[#FC1055]'>
                                        BY PRICE
                                    </div>
                                    <div className='h-[45px] w-[45px] border border-inherit p-2 rounded-xl mb-0 mr-[100px]'>
                                        <BiSort color='#00AFC1' size={25} />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between mr-[100px] mt-[55px]'>
                                <div className='flex gap-4'>
                                    <div className='flex items-center text-center justify-center h-[45px] w-[45px] bg-[#F1EAFF] rounded-[10px]'>
                                        <img
                                            src={ticket_reg}
                                            alt='icon-ticket-reg'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-[3px]'>
                                        <div className='text-sm font-semibold'>
                                            Section reg, Row 1
                                        </div>
                                        <div className='text-xs font-medium'>
                                            12 Seats available
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[2px] mr-[10px]'>
                                    <div className='text-center text-base font-semibold'>
                                        $15
                                    </div>
                                    <div className='text-xs font-medium'>
                       per person
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between ml-[50px] mr-[100px] mt-[28px]'>
                                <div className='flex gap-4'>
                                    <div></div>
                                    <div>
                                        <div className='font-semibold text-xs'>
                                            Quantity
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-[6px]'>
                                    <div className='flex justify-center items-center rounded-lg w-[33px] h-[0px] border border-[#C1C5D0]'>
                                        <button className='btn btn-sm w-full bg-white text-black hover:bg-red-500'>
                                            -
                                        </button>
                                    </div>
                                    <div className='flex justify-center items-center rounded-lg w-[33px] h-[0px]'>
                                        0
                                    </div>
                                    <div className='flex justify-center items-center rounded-lg w-[33px] h-[0px] border border-[#C1C5D0]'>
                                        <button className='btn btn-sm w-full bg-white text-black hover:bg-green-500'>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[100px]'></div>
                            <div className='flex justify-between mr-[100px] mt-[55px]'>
                                <div className='flex gap-4'>
                                    <div className='flex items-center text-center justify-center h-[45px] w-[45px] bg-[#F1EAFF] rounded-[10px]'>
                                        <img
                                            src={ticket_vip}
                                            alt='icon-ticket-vip'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-[3px]'>
                                        <div className='text-sm font-semibold'>
                                            Section vip, Row 2
                                        </div>
                                        <div className='text-xs font-medium'>
                                            9 Seats available
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[2px] mr-[10px]'>
                                    <div className='text-center text-base font-semibold'>
                                        $35
                                    </div>
                                    <div className='text-xs font-medium'>
                                        per person
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between ml-[50px] mr-[100px] mt-[22px]'>
                                <div className='flex gap-4'>
                                    <div></div>
                                    <div>
                                        <div className='font-semibold text-xs'>
                                            Quantity
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-[6px]'>
                                    <div className='flex justify-center items-center rounded-lg w-[33px] h-[0px] border border-[#C1C5D0]'>
                                        <button className='btn btn-sm w-full bg-white text-black hover:bg-red-500'>
                                            -
                                        </button>
                                    </div>
                                    <div className='flex justify-center items-center rounded-lg w-[33px] h-[0px]'>
                                        0
                                    </div>
                                    <div className='flex justify-center items-center rounded-lg w-[33px] h-[0px] border border-[#C1C5D0]'>
                                        <button className='btn btn-sm w-full bg-white text-black hover:bg-green-500'>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-between mr-[100px] mt-[55px]'>
                                <div className='flex gap-4'>
                                    <div className='flex items-center text-center justify-center h-[45px] w-[45px] bg-[#F1EAFF] rounded-[10px]'>
                                        <img
                                            src={ticket_vvip}
                                            alt='icon-ticket-vvip'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-[3px]'>
                                        <div className='text-sm font-semibold'>
                                            Section vvip, Row 3
                                        </div>
                                        <div className='text-xs font-medium'>
                                            4 Seats available
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[2px] mr-[10px]'>
                                    <div className='text-center text-base font-semibold'>
                                        $50
                                    </div>
                                    <div className='text-xs font-medium'>
                                        per person
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between ml-[50px] mr-[100px] mt-[22px]'>
                                <div className='flex gap-4'>
                                    <div></div>
                                    <div>
                                        <div className='font-semibold text-xs'>
                                            Quantity
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-[6px]'>
                                    <div className='flex justify-center items-center rounded-lg w-[33px] h-[0px] border border-[#C1C5D0]'>
                                        <button className='btn btn-sm w-full bg-white text-black hover:bg-red-500'>
                                            -
                                        </button>
                                    </div>
                                    <div className='flex justify-center items-center rounded-lg w-[33px] h-[0px]'>
                                        0
                                    </div>
                                    <div className='flex justify-center items-center rounded-lg w-[33px] h-[0px] border border-[#C1C5D0]'>
                                        <button className='btn btn-sm w-full bg-white text-black hover:bg-green-500'>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-6 boder border-b-2 w-[450px] border-inherit'></div>
                            <div className='flex justify-between mr-[100px] mt-6'>
                                <div className='text-sm'>Ticket Section</div>
                                <div className='text-sm text-[#9ED5C5]'>
                                    VIP
                                </div>
                            </div>
                            <div className='flex justify-between mr-[100px] mt-6'>
                                <div className='text-sm'>Quantity</div>
                                <div className='text-sm text-[#9ED5C5]'>2</div>
                            </div>
                            <div className='flex justify-between mr-[100px] mt-6'>
                                <div className='text-sm'>Total Payment</div>
                                <div className='text-sm text-[#9ED5C5]'>
                                    $70
                                </div>
                            </div>
                            <div className='flex w-full item-center md:ml-[0px] ml-[70px] mt-[50px] self-center shadow: 0px 8px 10px rgba(35, 149, 255, 0.3)'>
                                <Link
                                    to='/Payment'
                                    className='hover:text-[#00AFC1] font-bold w-[70%]'
                                >
                                    <button className='shadow: 0px 8px 10px rgba(35, 149, 255, 0.3) bg-[#00AFC1] w-[100%] h-[55px] hover:text-black text-white rounded-2xl'>
                                        Check Out
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div className='footers'>
                <FooterSection />
            </div>
        </div>
    )
}
export default Booking
