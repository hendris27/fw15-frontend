import { Link } from 'react-router-dom'
import logo_header from '../assets/img/header_logo.png'
import { MdDensitySmall } from 'react-icons/md'

const HeaderHome = () => {
	return (
		<>
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
		</>
	)
}
export default HeaderHome
