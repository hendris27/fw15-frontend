import { Link } from 'react-router-dom';

import logo_header from '../assets/img/header_logo.png';
import icon_profile from '../assets/img/profile.png';

import { MdDensitySmall } from 'react-icons/md';
import { FaWhatsappSquare } from 'react-icons/fa';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';

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
			<main className="flex justify-center bg-[#DAE5D0]"></main>
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
export default App;
