import logo from "../assets/img/main_logo.png";
import logo_header from "../assets/img/header_logo.png";

import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="h-screen flex">
      <aside className="hidden h-full md:block bg-[#0E8388] md:w-[70%] md:justify-center md:items-center md:flex">
        <img src={logo} />
      </aside>
      <div className="flex justify-center md:items-center items-center w-[100%] flex-1">
        <form className="flex flex-col gap-6 w-full px-8 ">
          <div>
            <img src={logo_header} />
          </div>
          <div className="font-bold">Sign Up</div>
          <div>
						Already have an account?
            <Link to="/Login" className="text-[#0E8388]">
							Log In
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <input type="text" placeholder="Full Name" className="input input-bordered w-full  hover:outline-none px-[10px] border-box border-[1px] rounded-xl" />
            </div>
            <div>
              <input type="email" placeholder="Email" className="input input-bordered w-full  hover:outline-none px-[10px] border-box border-[1px] rounded-xl" />
            </div>
            <div>
              <input type="password" placeholder="Password" className="input input-bordered w-full  hover:outline-none px-[10px] border-box border-[1px] rounded-xl" />
            </div>
            <div>
              <input type="password" placeholder="Confirm Password" className="input input-bordered w-full  hover:outline-none px-[10px] border-box border-[1px] rounded-xl" />
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <input type="checkbox" className="checkbox checkbox-primary " />
            </div>
            <span className="label-text">Accept terms and condition</span>
          </div>
          <div>
            <button className="btn btn-primary text-white w-full">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
