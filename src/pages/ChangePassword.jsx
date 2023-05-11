import { Link } from 'react-router-dom'

import icon_profile from '../assets/img/profile.png'

import { FaUserCircle } from 'react-icons/fa'
import { BsFillCreditCardFill } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { BiLockOpen } from 'react-icons/bi'
import { VscTasklist } from 'react-icons/vsc'
import { IoIosAddCircle } from 'react-icons/io'
import { MdFavorite } from 'react-icons/md'
import { AiFillSetting } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'

import FooterSection from '../components/FooterSection'
import HeaderHome from '../components/HeaderHome'

function ChangePassword() {
	return (
		<div className="h-screen">
			<nav className="headers">
				<HeaderHome />
			</nav>
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
			<div className="footers">
				<FooterSection />
			</div>
		</div>
	)
}
export default ChangePassword
