import { Link } from 'react-router-dom';

import logo_header from '../assets/img/header_logo.png';
import logo from '../assets/img/main_logo.png';

import { MdDensitySmall } from 'react-icons/md';
import { FaWhatsappSquare } from 'react-icons/fa';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { ImLocation } from 'react-icons/im';
import { BsArrowRightSquareFill } from 'react-icons/bs';

function Home() {
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
				<div className="flex items-center gap-8 font-bold hidden md:block md:flex">
					<div>
						<Link to="/Login" className="hover:text-[#00AFC1] font-bold">
							Log In
						</Link>
					</div>
					<div>
						<button className="btn btn-primary text-white w-full h-[20px]">
							<Link to="/SignUp" className="hover:text-[#00AFC1] font-bold">
								Sign Up
							</Link>
						</button>
					</div>
				</div>
				<div className="md:hidden">
					<button>
						<MdDensitySmall size={25} />
					</button>
				</div>
			</header>
			<main className="flex flex-col md:justify-center bg-[#0E8388] pt-[100px] px-[50px] md:flex md:flex-row  bg-[url('./assets/img/layer.png')] bg-no-repeat bg-cover">
				<div className="flex flex-col flex-1 justify-center gap-4">
					<div className="w-[85%] font-bold text-center md:text-6xl text-[36px] text-white tracking-[2px] md:leading-[96px] leading-[54px] md:self-start self-center">Find events you love with our</div>
					<div className="hidden md:block md:flex  bg-white w-[85%] h-[50px] items-center px-[10px] rounded-xl  md:self-start self-center ">
						<div className="flex gap-2 ">
							<div>
								<IoSearch color="#C1C5D0" size={25} />
							</div>
							<div>
								<input type="text" placeholder="Search event..." className="text-[##C1C5D0] w-full outline-none" />
							</div>
						</div>
						<div className="border-l-[1px] border-[#C1C5D0] h-[40px] flex items-center  px-[10px]"> </div>
						<div className="flex gap-2">
							<div>
								<ImLocation color="#C1C5D0" size={22} />
							</div>
							<div>
								<input type="text" placeholder="Where?" className=" w-full outline-none" />
							</div>
						</div>
						<div>
							<BsArrowRightSquareFill color="red" size={28} />
						</div>
					</div>
				</div>
				<div className="md:mb-[0px] mb-[-40px]">
					<img src={logo} />
				</div>
				<div className="md:hidden md:mb-[0px] mb-12 flex bg-white w-[85%] h-[50px] items-center px-[10px] rounded-xl  md:self-start self-center ">
					<div className="flex gap-2 ">
						<div>
							<IoSearch color="#C1C5D0" size={25} />
						</div>
						<div>
							<input type="text" placeholder="Search event..." className="text-[##C1C5D0] w-full outline-none" />
						</div>
					</div>
					<div className="border-l-[1px] border-[#C1C5D0] h-[40px] flex items-center  px-[10px]"> </div>
					<div className="flex gap-2">
						<div>
							<ImLocation color="#C1C5D0" size={22} />
						</div>
						<div>
							<input type="text" placeholder="Where?" className=" w-full outline-none" />
						</div>
					</div>
					<div>
						<BsArrowRightSquareFill color="red" size={28} />
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
export default Home;
