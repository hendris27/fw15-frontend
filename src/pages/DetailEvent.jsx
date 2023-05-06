import { Link } from 'react-router-dom';

import logo_header from '../assets/img/header_logo.png';
import icon_profile from '../assets/img/profile.png';
import event from '../assets/img/event.png';
import foto_profile from '../assets/img/foto_profile.jpg';
import map from '../assets/img/map.png';

import { BiHeart } from 'react-icons/bi';
import { ImLocation } from 'react-icons/im';
import { MdDensitySmall } from 'react-icons/md';
import { FcCalendar } from 'react-icons/fc';

function App() {
	return (
		<div className="h-screen">
			<header className="flex justify-between items-center bg-[#0E8388] px-[50px] w-full fixed">
				<div>
					<img src={logo_header} />
				</div>
				<div className="flex font-bold gap-4 hidden md:flex md:block">
					<Link to="/" className="hover:text-white font-bold">
						Home
					</Link>
					<Link to="/" className="hover:text-white font-bold">
						Create Event
					</Link>
					<Link to="/" className="hover:text-white font-bold">
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
			<main className="flex justify-center">
				<div className=" bg-red-400 md:mt-[130px] h- full w-full md:h-[85%] rounded-2xl overflow-hidden flex p-[50px] md:w-[75%] ">
					<div className="flex flex-col lg:flex-row content-center md:w-full gap-9 px-[50px] py-[50px]">
						<div className=" flex flex-col flex-1 w-full items-center">
							<div className="flex flex-col items-center gap-4">
								<div className=" bg-gray-300s w-full lg:w-[311px] lg:h-[342px]  rounded-[40px] overflow-hidden bg-gray-300">
									<img src={event} />
								</div>
								<div className="font-bold flex gap-4">
									<div>
										<button>
											<BiHeart size={25} />
										</button>
									</div>
									<div>Add to Wishlist</div>
								</div>
							</div>
						</div>
						<div className=" flex flex-col flex-1 w-full h-full bg-green-400">
							<div>
								<div className="w-[100%] text-black font-bold tracking-[2px] leading-[36px] text-[24px]">Sights & Sounds Exhibition</div>
								<div className="flex justify-between mt-[30px] ">
									<div className="flex gap-2">
										<ImLocation color="red" size={22} />
										<div className="font-medium">Jakarta, Indonesia</div>
									</div>
									<div className="flex gap-3.5">
										<FcCalendar color="red" size={22} />
										<div className="font-medium">Wed, 15 Nov, 4:00 PM</div>
									</div>
								</div>

								<div className="flex flex-col gap-3 mt-8">
									<div>Attendees</div>
									<div className="flex ml-[10px]">
										<div className="flex ml-[-10px] w-[28px] h-[29px] rounded-full border-2 solid overflow-hidden">
											<div className="flex items-center justify-center ">
												<img className="w-full object-cover" src={foto_profile} />
											</div>
										</div>
										<div className="flex ml-[-10px] w-[28px] h-[29px] rounded-full border-2 solid overflow-hidden">
											<div className="flex items-center justify-center ">
												<img className="w-full object-cover" src={foto_profile} />
											</div>
										</div>
										<div className="flex ml-[-10px] w-[28px] h-[29px] rounded-full border-2 solid overflow-hidden">
											<div className="flex items-center justify-center ">
												<img className="w-full object-cover" src={foto_profile} />
											</div>
										</div>
										<div className="flex ml-[-10px] w-[28px] h-[29px] rounded-full border-2 solid overflow-hidden">
											<div className="flex items-center justify-center ">
												<img className="w-full object-cover" src={foto_profile} />
											</div>
										</div>
									</div>
									<div className="mt-5 border border-b-1 w-full border-[rgba(193, 197, 208, 0.25)]"></div>
								</div>
								<div className="flex flex-col mt-6">
									<div className="text-xl font-bold">Event Detail</div>
									<div
										className="mt-4 leading-[20px] tracking-[1] w-full font-normal text-xs text-[#373A42
				  75%]"
									>
										After his controversial art exhibition &ldquo;Tear and Consume&quot; back in November 2018, in which guests were invited to tear up…
									</div>
									<div className="mt-2.5 text-[#3366FF] leading-[20px] tracking-[0.5] text-xs ">Read More</div>
									<div className="mt-6 font-semibold text-xl leading-[30px] tracking-[1]">Location</div>
								</div>
								<div className="flex w-[80%]  flex-col gap-12 mt-4">
									<div className="h-[100%] rounded-[20px] overflow-hidden">
										<img src={map} className="object-cover h-full w-full" />
									</div>
									<div>
										<button className="btn btn-primary text-black w-full">Buy Tickets</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
export default App;
