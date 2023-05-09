import HeaderHome from '../components/HeaderHome'
import FooterSection from '../components/FooterSection'
import { Link } from 'react-router-dom'

import logo from '../assets/img/main_logo.png'

import { AiOutlineMinus, AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { IoSearch } from 'react-icons/io5'
import { ImLocation } from 'react-icons/im'
import { BsArrowRightSquareFill } from 'react-icons/bs'

import React from 'react'
import axios from 'axios'
import moment from 'moment'
import http from '../helpers/http'

const Home = () => {
	const [events, setEvents] = React.useState([])
	const [profile, setProfile] = React.useState({})
	// const [token, setToken] = React.useState('')

	React.useEffect(() => {
		async function getData() {
			const { data } = await axios.get('http://localhost:8888/event')
			setEvents(data.results)
		}
		getData()

		async function getProfileData() {
			const token = window.localStorage.getItem('token')
			const { data } = await http(token).get('/profile')
			setProfile(data.results)
		}
		getProfileData()
		// if (window.localStorage.getItem('token')) {
		// 	setToken(window.localStorage.getItem('token'))
		// }
	}, [])
	return (
		<>
			<div className="h-screen">
				<div className="relative">
					<HeaderHome />
				</div>
				<main>
					<div className="flex flex-col md:justify-center bg-[#0E8388] pt-[100px] px-[50px] md:flex md:flex-row  bg-[url('./assets/img/layer.png')] bg-no-repeat bg-cover">
						<div className="flex flex-col flex-1 justify-center gap-4">
							<div className="w-[90%] font-bold text-center md:text-6xl text-[36px] text-white tracking-[2px] md:leading-[96px] leading-[54px] md:self-start self-center">
								Find events you <br />
								love with our
							</div>
							<div className="text-8xl text-black z-30">{profile?.fullName}</div>
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
					<div className="bg-[#FAF4FF] w-full flex justify-center pb-8">
						<div className="flex w-[95%] overflow-x-scroll scrollbar-hidden scrollbar-w-0 gap-4 justify-center">
							{events.map((event) => {
								return (
									<>
										<div className="w-64 h-96 min-w-[260px] border rounded-3xl overflow-hidden relative" key={`events${event.id}`}>
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
					<div className="flex w-full justify-center pb-8 bg-[#FAF4FF] ">
						<button type="submit" className="font-bold  hover:text-white h-9 px-16 py-1 border border-accent bg-yellow-400 text-black rounded-2xl hover:bg-accent">
							See All
						</button>
					</div>
				</main>

				<div className="footers">
					<FooterSection />
				</div>
			</div>
		</>
	)
}
export default Home
