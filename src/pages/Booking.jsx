import { Link } from 'react-router-dom';

import logo_header from '../assets/img/header_logo.png';
import icon_profile from '../assets/img/profile.png';
import seat_mobile from '../assets/img/seat-booking-mobile.png';
import seat_web from '../assets/img/seat-booking-web.png';
import ticket_reg from '../assets/svg/ticket_reg.svg';
import ticket_vip from '../assets/svg/ticket_vip.svg';
import ticket_vvip from '../assets/svg/ticket_vvip.svg';

import { MdDensitySmall } from 'react-icons/md';
import { FaWhatsappSquare } from 'react-icons/fa';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import { BiSort } from 'react-icons/bi';

function Booking() {
	return (
		<div className="h-screen">
			<header className="flex justify-between items-center bg-white px-[50px] w-full fixed">
				<div>
					<img src={logo_header} />
				</div>
				<div className="flex font-bold gap-4 hidden md:flex md:block">
					<Link to="/" className="hover:text-[#00AFC1] font-bold">
						Home
					</Link>
					<Link to="/ManageEvent" className="hover:text-[#00AFC1] font-bold">
						Create Event
					</Link>
					<Link to="/" className="hover:text-[#00AFC1] font-bold">
						Location
					</Link>
				</div>
				<div className="flex items-center gap-4 font-bold hidden md:block md:flex">
					<div>
						<img src={icon_profile} />
					</div>
					<div>Jhon Thomson</div>
				</div>
				<div className="md:hidden">
					<button>
						<MdDensitySmall size={25} />
					</button>
				</div>
			</header>
			<main className="flex justify-center bg-[#DAE5D0]">
				<div className="bg-white md:w-[85%] w-full h-[100%] mt-[50px] md:mt-[130px] rounded-xl overflow-hidden ">
					<div className="flex flex-col content-center w-full md:flex-row">
						<div className="flex flex-col flex-1 w-full items-center mt-[100px]">
							<div className="hidden md:block md:mt-[150px] mt-[0px] m">
								<img className="w-[500px] h-[410px] object-cover" src={seat_web} />
							</div>
							<div className="md:hidden">
								<img className="w-[500px] h-[410px] object-cover" src={seat_mobile} />
							</div>
						</div>

						<div className="flex flex-col flex-1 mt-[70px] p-16 md:justify-center md:ml-[0px] ml-[80px]">
							<div className="flex justify-between justify-between gap-[20px]mr-[100px] mt-[30px]">
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
							<div className="flex justify-between mr-[100px] mt-[55px]">
								<div className="flex gap-4">
									<div className="flex items-center text-center justify-center h-[45px] w-[45px] bg-[#F1EAFF] rounded-[10px]">
										<img src={ticket_reg} alt="icon-ticket-reg" />
									</div>
									<div className="flex flex-col gap-[3px]">
										<div className="text-sm font-semibold">Section reg, Row 1</div>
										<div className="text-xs font-medium">12 Seats available</div>
									</div>
								</div>
								<div className="flex flex-col gap-[2px] mr-[10px]">
									<div className="text-center text-base font-semibold">$15</div>
									<div className="text-xs font-medium">per person</div>
								</div>
							</div>
							<div className="flex justify-between ml-[50px] mr-[100px] mt-[28px]">
								<div className="flex gap-4">
									<div></div>
									<div>
										<div className="font-semibold text-xs">Quantity</div>
									</div>
								</div>
								<div className="flex gap-[6px]">
									<div className="flex justify-center items-center rounded-lg w-[33px] h-[0px] border border-[#C1C5D0]">
										<button className="btn btn-sm w-full bg-white text-black hover:bg-red-500">-</button>
									</div>
									<div className="flex justify-center items-center rounded-lg w-[33px] h-[0px]">0</div>
									<div className="flex justify-center items-center rounded-lg w-[33px] h-[0px] border border-[#C1C5D0]">
										<button className="btn btn-sm w-full bg-white text-black hover:bg-green-500">+</button>
									</div>
								</div>
							</div>

							<div className="flex gap-[100px]"></div>
							<div className="flex justify-between mr-[100px] mt-[55px]">
								<div className="flex gap-4">
									<div className="flex items-center text-center justify-center h-[45px] w-[45px] bg-[#F1EAFF] rounded-[10px]">
										<img src={ticket_vip} alt="icon-ticket-vip" />
									</div>
									<div className="flex flex-col gap-[3px]">
										<div className="text-sm font-semibold">Section vip, Row 2</div>
										<div className="text-xs font-medium">9 Seats available</div>
									</div>
								</div>
								<div className="flex flex-col gap-[2px] mr-[10px]">
									<div className="text-center text-base font-semibold">$35</div>
									<div className="text-xs font-medium">per person</div>
								</div>
							</div>
							<div className="flex justify-between ml-[50px] mr-[100px] mt-[22px]">
								<div className="flex gap-4">
									<div></div>
									<div>
										<div className="font-semibold text-xs">Quantity</div>
									</div>
								</div>
								<div className="flex gap-[6px]">
									<div className="flex justify-center items-center rounded-lg w-[33px] h-[0px] border border-[#C1C5D0]">
										<button className="btn btn-sm w-full bg-white text-black hover:bg-red-500">-</button>
									</div>
									<div className="flex justify-center items-center rounded-lg w-[33px] h-[0px]">0</div>
									<div className="flex justify-center items-center rounded-lg w-[33px] h-[0px] border border-[#C1C5D0]">
										<button className="btn btn-sm w-full bg-white text-black hover:bg-green-500">+</button>
									</div>
								</div>
							</div>

							<div className="flex justify-between mr-[100px] mt-[55px]">
								<div className="flex gap-4">
									<div className="flex items-center text-center justify-center h-[45px] w-[45px] bg-[#F1EAFF] rounded-[10px]">
										<img src={ticket_vvip} alt="icon-ticket-vvip" />
									</div>
									<div className="flex flex-col gap-[3px]">
										<div className="text-sm font-semibold">Section vvip, Row 3</div>
										<div className="text-xs font-medium">4 Seats available</div>
									</div>
								</div>
								<div className="flex flex-col gap-[2px] mr-[10px]">
									<div className="text-center text-base font-semibold">$50</div>
									<div className="text-xs font-medium">per person</div>
								</div>
							</div>
							<div className="flex justify-between ml-[50px] mr-[100px] mt-[22px]">
								<div className="flex gap-4">
									<div></div>
									<div>
										<div className="font-semibold text-xs">Quantity</div>
									</div>
								</div>
								<div className="flex gap-[6px]">
									<div className="flex justify-center items-center rounded-lg w-[33px] h-[0px] border border-[#C1C5D0]">
										<button className="btn btn-sm w-full bg-white text-black hover:bg-red-500">-</button>
									</div>
									<div className="flex justify-center items-center rounded-lg w-[33px] h-[0px]">0</div>
									<div className="flex justify-center items-center rounded-lg w-[33px] h-[0px] border border-[#C1C5D0]">
										<button className="btn btn-sm w-full bg-white text-black hover:bg-green-500">+</button>
									</div>
								</div>
							</div>
							<div className="mt-6 boder border-b-2 w-[450px] border-inherit"></div>
							<div className="flex justify-between mr-[100px] mt-6">
								<div className="text-sm">Ticket Section</div>
								<div className="text-sm text-[#9ED5C5]">VIP</div>
							</div>
							<div className="flex justify-between mr-[100px] mt-6">
								<div className="text-sm">Quantity</div>
								<div className="text-sm text-[#9ED5C5]">2</div>
							</div>
							<div className="flex justify-between mr-[100px] mt-6">
								<div className="text-sm">Total Payment</div>
								<div className="text-sm text-[#9ED5C5]">$70</div>
							</div>
							<div className="flex w-full item-center md:ml-[0px] ml-[70px] mt-[50px] self-center shadow: 0px 8px 10px rgba(35, 149, 255, 0.3)">
								<Link to="/Payment" className="hover:text-[#00AFC1] font-bold w-[70%]">
									<button className="shadow: 0px 8px 10px rgba(35, 149, 255, 0.3) bg-[#00AFC1] w-[100%] h-[55px] hover:text-black text-white rounded-2xl">Check Out</button>
								</Link>
							</div>
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
export default Booking;
