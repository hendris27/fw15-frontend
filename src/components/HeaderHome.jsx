import { Link } from 'react-router-dom'
import logo_header from '../assets/img/header_logo.png'
import { MdDensitySmall } from 'react-icons/md'

import React from 'react'
import http from '../helpers/http'
import { useNavigate } from 'react-router-dom'

const HeaderHome = () => {
	const navigate = useNavigate()
	const [profile, setProfile] = React.useState({})
	const [token, setToken] = React.useState('')

	React.useEffect(() => {
		async function getProfileData() {
			const token = window.localStorage.getItem('token')
			const { data } = await http(token).get('/profile')
			setProfile(data.results)
		}
		getProfileData()
		if (window.localStorage.getItem('token')) {
			setToken(window.localStorage.getItem('token'))
		}
	}, [])

	const doLogout = () => {
		window.localStorage.removeItem('token')
		navigate('/Login')
	}
	return (
		<>
			<header className="flex justify-between items-center bg-white px-[50px] w-full fixed z-10">
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
				{token ? (
					<div className="flex text-2xl text-black">
						<div>{profile?.picture && <img className="w-12 h-12 border-4 border-white rounded-full" src={`http://localhost:8888/uploads/${profile.picture}`} alt="image-profil" />}</div>
						<div>{profile?.fullName}</div>
						<button onClick={doLogout} className="btn btn-primary bg-red-700 text-white w-full h-[20px]">
							log out
						</button>
					</div>
				) : (
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
				)}

				<div className="md:hidden">
					<button>
						<MdDensitySmall size={25} />
					</button>
				</div>
			</header>
		</>
	)
}
export default HeaderHome
