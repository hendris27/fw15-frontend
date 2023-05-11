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

import React from 'react'
import { useNavigate } from 'react-router-dom'

function Profil() {
	const navigate = useNavigate()
	const [token, setToken] = React.useState('')
	const [initToken, SetInitToken] = React.useState(false)
	React.useEffect(() => {
		if (window.localStorage.getItem('token')) {
			setToken(window.localStorage.getItem('token'))
		}
		SetInitToken()
	}, [])
	React.useEffect(() => {
		if (initToken) {
			if (!token) {
				navigate('/Login', { state: { warningMessage: 'Ypu have to login first' } })
			}
		}
	}, [token, initToken, navigate])

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
						<Link to="/ManageEvent" className="hover:text-[#0E8388] hover:text-[17px]">
							Create Event
						</Link>
					</div>
					<div className="flex pl-16 gap-4 mt-10">
						<div>
							<VscTasklist color="#00AFC1" size={25} />
						</div>
						<Link to="/MyBooking" className="hover:text-[#0E8388] hover:text-[17px]">
							My Booking
						</Link>
					</div>
					<div className="flex pl-16 gap-4 mt-10">
						<div>
							<MdFavorite color="#00AFC1" size={25} />
						</div>
						<Link to="/MyWishlist" className="hover:text-[#0E8388] hover:text-[17px]">
							My Wishlist
						</Link>
					</div>
					<div className="flex pl-16 gap-4 mt-10">
						<div>
							<AiFillSetting color="#00AFC1" size={25} />
						</div>
						<div>Settings</div>
					</div>
					<div className="flex pl-16 gap-4 mt-10">
						<div>
							<FiLogOut color="red" size={25} />
						</div>
						<div className="text-[#ff0000] font-bold">Logout</div>
					</div>
				</aside>
				<div className="w-full h-full rounded-[30px] flex pb-[50px] gap-[100px] justify-center mr-5 bg-white mt-[0px] overflow-hidden">
					<div className="ml-[50px] mt-[0px] md:mt-[75px]  flex flex-col flex-1 w-[100%] md:w-full">
						<div className="md:hidden flex justify-center content-center self-center">
							<img src="./asset/png/c-zoro.png" alt="" />
						</div>
						<div className="md:mt-[0px] mt-[30px] text-xl font-semibold">Profile</div>
						<div className="flex mt-[50px]">
							<div className="flex flex-col gap-[50px] w-full">
								<div className="flex flex-col gap-6">
									<div>Name</div>
									<div className="md:hidden">
										<input className="border-[1px] hover:border-[#0E8388] border-[#C1C5D0] outline-0 border-1 h-[55px] w-full rounded-xl p-2 mt-[-40px]" type="text" placeholder="Roronoa" />
									</div>
								</div>
								<div className="flex flex-col gap-6">
									<div>User name</div>
									<div className="md:hidden">
										<div className="flex gap-4">
											<div className="text-[#777777] text-sm leading-[21px] tracking-[1px]">@jhont0</div>
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
											<div className="text-[#777777] text-sm leading-[21px] tracking-[1px]">jhont0@mail.com</div>
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
											<div className="text-[#777777] text-sm leading-[21px] tracking-[1px]">081234567890</div>
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
											<select className="border-[1px] hover:border-[#0E8388] border-[#C1C5D0] w-full h-[55px] outline-0 rounded-xl px-4" name="Prefession" id="Prefession">
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
											<select className="border-[1px] hover:border-[#0E8388] border-[#C1C5D0]  w-full h-[55px] outline-0 rounded-xl px-4" name="Nationality" id="Nationality">
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
												<input className="appearance-none outline-0" type="date" />
											</div>
											<div className="text-[#3366FF] hover:border-[#0E8388] hover:text-[#0E8388] text-sm leading-[21px] tracking-[1px] border-b-2 border-[#3366FF]">
												<a href="#"> Edit</a>
											</div>
										</div>
									</div>
								</div>
								<div className="md:hidden">
									<button className="w-full h-[55px] bg-[#0E8388] hover:text-black text-white rounded-xl">Save</button>
								</div>
							</div>
							<div className="hidden md:block md:flex md:flex-col md:gap-[50px] md:w-full">
								<div className="hidden md:block">
									<input className="border-[1px] hover:border-[#0E8388] border-[#C1C5D0] outline-0 border-1 h-[55px] w-full rounded-xl p-2 mt-[-40px]" type="text" placeholder="Roronoa" />
								</div>
								<div className=" flex gap-4">
									<div className="text-[#777777] text-sm leading-[21px] tracking-[1px]">@jhont0</div>
									<div className="hover:border-[#0E8388] hover:text-[#0E8388] text-[#3366FF] text-sm leading-[21px] tracking-[1px] border-b-2 border-[#3366FF]">
										<a href="#"> Edit</a>
									</div>
								</div>
								<div className="flex gap-4">
									<div className="text-[#777777] text-sm leading-[21px] tracking-[1px]">jhont0@mail.com</div>
									<div className="hover:border-[#0E8388] hover:text-[#0E8388] text-[#3366FF] text-sm leading-[21px] tracking-[1px] border-b-2 border-[#3366FF]">
										<a href="#"> Edit</a>
									</div>
								</div>
								<div className="flex gap-4">
									<div className="text-[#777777] text-sm leading-[21px] tracking-[1px]">081234567890</div>
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
									<select className="border-[1px] hover:border-[#0E8388] border-[#C1C5D0] w-full h-[55px] outline-0 rounded-xl px-4" name="Prefession" id="Prefession">
										<option value="Entreprenur">Entreprenur</option>
										<option value="Student">Student</option>
									</select>
								</div>
								<div className="w-full">
									<select className="border-[1px] hover:border-[#0E8388] border-[#C1C5D0]  w-full h-[55px] outline-0 rounded-xl px-4" name="Nationality" id="Nationality">
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
											<input className="appearance-none outline-0" type="date" />
										</div>
										<div className="text-[#3366FF] hover:border-[#0E8388] hover:text-[#0E8388] text-sm leading-[21px] tracking-[1px] border-b-2 border-[#3366FF]">
											<a href="#"> Edit</a>
										</div>
									</div>
								</div>
								<div className="mt-[50px]">
									<button className="w-full h-[55px] bg-[#0E8388] hover:text-black text-white rounded-xl">Save</button>
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
								<div className="flex items-center justify-center hover:text-[#0E8388] text-[black] h-[40px] w-[255px] rounded-[10px] border-[1px] hover:border-[#0E8388] border-[black]">Choose Photo</div>
							</div>
							<div>
								<label className="text-xs text-[#373A42 75%] font-normal" htmlFor="information">
									Image size: max, 2 MB
								</label>
								<br />
								<label className="text-xs text-[#373A42 75%] font-normal" htmlFor="information">
									Image formats: .JPG, .JPEG, .PNG
								</label>
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
export default Profil
