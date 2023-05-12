import { useParams } from 'react-router-dom'
import React from 'react'
import { Link } from 'react-router-dom'
import http from '../helpers/http'
import moment from 'moment'

import logo_header from '../assets/img/header_logo.png'
import foto_profile from '../assets/img/foto_profile.jpg'
import map from '../assets/img/map.png'

import { BiHeart } from 'react-icons/bi'
import { ImLocation } from 'react-icons/im'
import { FcCalendar } from 'react-icons/fc'
import { FaWhatsappSquare } from 'react-icons/fa'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'

import HeaderHome from '../components/HeaderHome'

const DetailEvent = () => {
	const { id } = useParams()
	const [events, setEvent] = React.useState({})
	React.useEffect(() => {
		async function getDataEvent() {
			try {
				const { data } = await http().get(`/event/${id}`)
				setEvent(data.results)
			} catch (error) {
				const message = error?.response?.data?.message
				if (message) {
					console.log(message)
				}
			}
		}
		getDataEvent(id)

		if (id) {
			getDataEvent(id)
		}
	}, [id])

	return (
		<div className="h-screen">
			<div className="headers">
				<HeaderHome />
			</div>
			<main className="flex justify-center bg-[#DAE5D0]">
				<div className=" bg-white md:mt-[130px] h- full w-full md:h-full rounded-2xl overflow-hidden flex p-[50px] md:w-[75%] ">
					<div className="flex flex-col lg:flex-row content-center md:w-full gap-9 px-[50px] py-[50px]">
						<div className=" flex flex-col flex-1 w-full items-center">
							<div className="flex flex-col items-center gap-4">
								<div className=" bg-gray-300s w-full lg:w-[311px] lg:h-[342px]  rounded-[40px] overflow-hidden bg-gray-300">
									{events?.picture && <img src={`http://localhost:8888/uploads/${events.picture}`} className="w-full h-full object-cover" alt={event.id} />}
								</div>
								<div className="font-bold flex gap-4">
									<div>
										<button className="flex gap-2 btn btn-accent bg-white border-none hover:bg-white">
											<BiHeart size={25} />
											<div>Add to Wishlist</div>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className=" flex flex-col flex-1 w-full h-full">
							<div>
								<div className="w-[100%] text-black font-bold tracking-[2px] leading-[36px] text-[24px]">{events.tittle}</div>
								<div className="flex justify-between mt-[30px] ">
									<div className="flex gap-2">
										<ImLocation color="red" size={22} />
										<div className="font-medium">{events?.location}</div>
									</div>
									<div className="flex gap-3.5">
										<FcCalendar color="red" size={22} />
										<div className="font-medium">{moment(events.date).format('MMMM Do YYYY, h:mm')}</div>
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
									<div className="mt-5 border border-b-1 w-full border-black"></div>
								</div>
								<div className="flex flex-col mt-6">
									<div className="text-xl font-bold">Event Detail</div>
									<div
										className="mt-4 leading-[20px] tracking-[1] w-full font-normal text-xs text-[#373A42
									  75%]"
									>
										{events.descriptions}
									</div>
									<div className="mt-2.5 text-[#3366FF] leading-[20px] tracking-[0.5] text-xs ">Read More</div>
									<div className="mt-6 font-semibold text-xl leading-[30px] tracking-[1]">Location</div>
								</div>
								<div className="flex w-[80%]  flex-col gap-12 mt-4">
									<div className="h-[100%] rounded-[20px] overflow-hidden">
										<img src={map} className="object-cover h-full w-full" />
									</div>
									<div>
										<button className="btn btn-primary w-full bg-[#00AFC1]">
											<Link to="/Booking" className="hover:text-[#00AFC1] font-bold">
												Buy Tickets
											</Link>
										</button>
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
export default DetailEvent
