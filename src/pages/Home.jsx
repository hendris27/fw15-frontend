import HeaderHome from '../components/HeaderHome'
import { Link } from 'react-router-dom'

import logo_header from '../assets/img/header_logo.png'
import logo from '../assets/img/main_logo.png'

import { FaWhatsappSquare, FaInstagramSquare } from 'react-icons/fa'
import { AiFillFacebook, AiFillTwitterSquare, AiOutlineMinus, AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { IoSearch } from 'react-icons/io5'
import { ImLocation } from 'react-icons/im'
import { BsArrowRightSquareFill } from 'react-icons/bs'

import React from 'react'
import axios from 'axios'
import moment from 'moment'

function Home() {
	const [events, setEvents] = React.useState([])
	React.useEffect(() => {
		async function getData() {
			const { data } = await axios.get('http://localhost:8888/event')
			setEvents(data.results)
		}
		getData()
	}, [])
	return (
		<>
			<div className="h-screen">
				<div className="headers z-10">
					<HeaderHome />
				</div>
				<main>
					<div className="flex flex-col md:justify-center bg-[#0E8388] pt-[100px] px-[50px] md:flex md:flex-row  bg-[url('./assets/img/layer.png')] bg-no-repeat bg-cover">
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
									<button>
										<Link to="/Event" className="hover:text-[#00AFC1] font-bold">
											<BsArrowRightSquareFill color="red" size={28} />
										</Link>
									</button>
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
					</div>
					<div className="bg-[#FAF4FF]">
						<div className="flex flex-col items-center justify-center py-[50px]">
							<div>
								<div>
									<button className="bg-yellow-400 rounded-xl px-[20px] ">
										<div className="flex gap-4 pl-3 tracking-[3px]">
											<AiOutlineMinus color="black" size={25} />
											<div className="text-sm font-semibold">EVENT</div>
										</div>
									</button>
								</div>
							</div>
							<div className="font-semibold text-4xl mt-5 tracking-[1px]">Events For You</div>
							<div className="flex gap-10 mt-6">
								<div className="flex items-center">
									<button className="btn btn-primary  rounded-1xl bg-yellow-400 hover:bg-[#0E8388]">
										<AiOutlineArrowLeft size={18} className="text-black" />
									</button>
								</div>
								<div className="flex flex-col justify-between items-center gap-[5px] hover:border-[1px] hover:border-yellow-400 rounded-xl p-[5px]">
									<div>13</div>
									<div>Mon</div>
								</div>
								<div className="flex flex-col justify-between items-center gap-[5px] hover:border-[1px] hover:border-yellow-400 rounded-xl p-[5px]">
									<div>14</div>
									<div>Tue</div>
								</div>
								<div className="flex flex-col justify-between items-center gap-[5px] hover:border-[1px] hover:border-yellow-400 rounded-xl p-[5px]">
									<div>15</div>
									<div>Wed</div>
								</div>
								<div className="flex flex-col justify-between items-center gap-[5px] hover:border-[1px] hover:border-yellow-400 rounded-xl p-[5px]">
									<div>16</div>
									<div>Thu</div>
								</div>
								<div className="flex flex-col justify-between items-center gap-[5px] hover:border-[1px] hover:border-yellow-400 rounded-xl p-[5px]">
									<div>17</div>
									<div>Fri</div>
								</div>
								<div className="flex items-center">
									<button className="btn btn-primary  rounded-1xl bg-yellow-400 hover:bg-[#0E8388]">
										<AiOutlineArrowRight size={18} className="text-black" />
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-[#FAF4FF] w-full flex justify-end pb-8">
						<div className="flex w-[95%] overflow-x-scroll scrollbar-hidden scrollbar-w-0 gap-4 justify-center">
							{events.map((event) => {
								return (
									<>
										<div className="w-64 h-96 min-w-[260px] border rounded-3xl overflow-hidden relative  " key={event.id}>
											<img className=" w-full h-full object-cover z-0" src={`http://localhost:8888/uploads/${event.picture}`} />
											<div className="absolute bottom-0  flex flex-col px-5 gap-4 w-full bg-gradient-to-t from-black/[0.5] to-black/[0.0] h-[50%] ">
												<div className="text-white">{moment(event.date).format('DD-MM-YYYY')}</div>
												<div className="text-xl text-blue-300 font-bold">
													<Link to="./DetailEvent">{event.tittle}</Link>
												</div>
											</div>
										</div>
									</>
								)
							})}
						</div>
					</div>
					<div className="flex w-full justify-center py-10">
						<button type="submit" className="font-bold  hover:text-white h-9 px-16 py-1 border border-accent bg-yellow-400 text-black rounded-2xl hover:bg-accent">
							See All
						</button>
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
		</>
	)
}
export default Home
