import logo from '../assets/img/main_logo.png';

import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

function Login() {
	return (
		<div className="h-screen flex">
			<aside className="hidden  md:block bg-[#0E8388] md:w-[70%] md:justify-center md:items-center md:flex">
				<img src={logo} />
			</aside>
			<div className="flex justify-center md:items-center items-center w-[100%] flex-1">
				<form className="flex flex-col gap-6 w-full px-8">
					<div>Sign In</div>
					<div>Hi, Welcome back to Urticket!</div>
					<div>
						<input type="email" placeholder="email" className="input input-bordered w-full  hover:outline-none px-[10px] border-box border-[1px] rounded-xl" />
					</div>
					<div>
						<input type="password" placeholder="password" className="input input-bordered w-full  hover:outline-none px-[10px] border-box border-[1px] rounded-xl" />
					</div>
					<div className="text-right">
						<Link to="/ForgotPassword" className="text-primary font-bold">
							Forgot Password?
						</Link>
					</div>
					<div>
						<button className="btn btn-primary btext-black w-full">Sign In</button>
					</div>
					<div className="text-center">or sign with</div>
					<div className="flex justify-center gap-4">
						<button className="btn btn-primary w-24 bg-white border-blue-500">
							<FcGoogle size={25} />
						</button>
						<button className="btn  btn-primary w-24 bg-white border-blue-500">
							<FaFacebook color="#4267B2" size={25} />
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
export default Login;
