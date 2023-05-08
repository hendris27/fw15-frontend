import { Link } from 'react-router-dom'

import logo_header from '../assets/img/header_logo.png'
import icon_profile from '../assets/img/profile.png'

import { MdDensitySmall } from 'react-icons/md'
import { FaWhatsappSquare } from 'react-icons/fa'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'

function App() {
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
				<div className="bg-white w-[80%] mt-[120px] rounded-2xl flex p-[50x]">
					<div className="w-full flex flex-col lg:flex-row md:w-full px-[20px] py-[50px]">
						<div className="md:w-[50%] w-[90%] items-center md:ml-[80px] flex flex-col gap-8">
							<div className="mb-14 text-[20px] font-bold self-start ml-[25px]">Payment Method</div>

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
										<div className="pd-sub-title">Sights & Sounds Exhibition</div>
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
										<button className="w-full p-[5px] font-semibold text-xl border-[1px] outline-none bg-yellow-400 rounded-xl mt-[20px] h-[55px]">Payment</button>
									</div>
								</div>
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
	)
}
export default App
