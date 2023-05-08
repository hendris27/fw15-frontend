import logo from '../assets/img/main_logo.png';
import logo_header from '../assets/img/header_logo.png';

function ForgotPassword() {
	return (
		<div className="h-screen flex">
			<aside className="hidden  md:block bg-[#0E8388] md:w-[70%] md:justify-center md:items-center md:flex">
				<div>
					<img src={logo} />
				</div>
			</aside>
			<div className="flex justify-center md:items-center items-center w-[100%] flex-1">
				<form className="flex flex-col gap-6 w-full px-8">
					<div>
						<img src={logo_header} />
					</div>
					<div className="font-bold">Forgot Password</div>
					<div>You’ll get mail soon on your email</div>
					<div>
						<input type="email" placeholder="email" className="input input-bordered w-full  hover:outline-none px-[10px] border-box border-[1px] rounded-xl" />
					</div>
					<div>
						<button className="btn btn-primary text-white w-full">Send</button>
					</div>
				</form>
			</div>
		</div>
	);
}
export default ForgotPassword;
