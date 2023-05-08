import { Link } from 'react-router-dom'

import logo_header from '../assets/img/header_logo.png'
import icon_profile from '../assets/img/profile.png'

import { MdDensitySmall } from 'react-icons/md'
import { FaWhatsappSquare } from 'react-icons/fa'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'

import { FaUserCircle } from 'react-icons/fa'
import { BsFillCreditCardFill } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { BiLockOpen } from 'react-icons/bi'
import { VscTasklist } from 'react-icons/vsc'
import { IoIosAddCircle } from 'react-icons/io'
import { MdFavorite } from 'react-icons/md'
import { AiFillSetting } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'

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
					<div>
						<Link to="/Profil" className="hover:text-[#00AFC1] font-bold">
							Roronoa Zoro
						</Link>
					</div>
				</div>
				<div className="md:hidden">
					<button>
						<MdDensitySmall size={25} />
					</button>
				</div>
			</header>
			<main className="flex flex-row md:bg-[#DAE5D0] justify-between gap-12 pb-[50px] w-full pt-[150px] pr-10">
				<aside className="hidden md:block md:w-[35%] md:pr-5">
					<div className="flex pl-16 gap-4 mb-14">
						<div>
							<img src={icon_profile} alt="foto-profil" />
						</div>
						<div className="w-full">
							Roronoa Zoro
							<br /> <label>Programmer, Karawang</label>
						</div>
					</div>

					<div className="flex pl-16 gap-4 mt-10 font-bold">
						<div>
							<FaUserCircle color="#00AFC1" size={25} />
						</div>
						<div>
							<Link to="/Profil" className="font-bold hover:text-[#0E8388] ">
								Profile
							</Link>
						</div>
					</div>
					<div className="flex pl-[100px] gap-4 mt-10 ">
						<div>
							<BsFillCreditCardFill color="#00AFC1" size={25} />
						</div>
						<div>Card</div>
					</div>

					<div className="flex pl-[100px] gap-4 mt-10">
						<div>
							<AiFillEdit color="#00AFC1" size={25} />
						</div>
						<div>
							<Link to="/Profil" className="hover:text-[#0E8388] hover:text-[17px]">
								Edit Profile
							</Link>
						</div>
					</div>

					<div className="flex pl-[100px] gap-4 mt-10">
						<div>
							<BiLockOpen color="#00AFC1" size={25} />
						</div>
						<div>
							<Link to="/ChangePassword" className="hover:text-[#0E8388] hover:text-[17px]">
								Change Password
							</Link>
						</div>
					</div>
					<div className="flex pl-16 gap-4 mt-10">
						<div>
							<IoIosAddCircle color="#00AFC1" size={25} />
						</div>
						<div className="hover:text-[blue] ">Create Event</div>
					</div>
					<div className="flex pl-16 gap-4 mt-10">
						<div>
							<VscTasklist color="#00AFC1" size={25} />
						</div>
						<div>My Booking</div>
					</div>
					<div className="flex pl-16 gap-4 mt-10">
						<div>
							<MdFavorite color="#00AFC1" size={25} />
						</div>
						<div>My Listwish</div>
					</div>
					<div className="flex pl-16 gap-4 mt-10">
						<div>
							<AiFillSetting color="#00AFC1" size={25} />
						</div>
						<div>setting</div>
					</div>
					<div className="flex pl-16 gap-4 mt-10">
						<div>
							<FiLogOut color="red" size={25} />
						</div>
						<div>Logout</div>
					</div>
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
											<input className="w-[100%] h-[55px] rounded-xl px-[50px] border-box border-[1px] outline-none" type="text" placeholder="Old password" />
										</div>
									</div>
									<div className="flex flex-col md:flex-row md:justify-between md:px-[50px] gap- md:items-center md:w-[100%]">
										<div className="">New Password</div>
										<div>
											<input className="w-[100%] h-[55px] rounded-xl px-[50px] border-box border-[1px] outline-none" type="email" placeholder="New password" />
										</div>
									</div>
									<div className="flex flex-col md:flex-row md:justify-between md:px-[50px] gap- md:items-center md:w-[100%]">
										<div className="">Confirm Password</div>
										<div>
											<input className="w-[100%] h-[55px] rounded-xl px-[50px] border-box border-[1px] outline-none" type="email" placeholder="Confirm password" />
										</div>
									</div>
									<div className="px-[50px] mt-[50px] ">
										<button className="btn btn-primary w-full rounded-2xl"> Update</button>
									</div>
								</form>
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
