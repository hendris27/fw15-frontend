import logo from '../assets/img/main_logo.png'
import logo_header from '../assets/img/header_logo.png'

import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'

import { useNavigate } from 'react-router-dom'
import React from 'react'
import http from '../helpers/http'

const Login = () => {
	const navigate = useNavigate()
	const [errorMessage, setErrorMessage] = React.useState('')
	const [token, settoken] = React.useState('')
	const doLogin = async (event) => {
		event.preventDefault()
		setErrorMessage('')

		try {
			const { value: email } = event.target.email
			const { value: password } = event.target.password
			const body = new URLSearchParams({ email, password }).toString()
			const { data } = await http().post('http://localhost:8888/auth/login', body)
			window.localStorage.setItem('token', data.results.token)
			console.log(body)
			settoken(data.results.token)
		} catch (err) {
			const message = err?.response?.data?.message
			if (message) {
				setErrorMessage(message)
			}
		}
	}

	React.useEffect(() => {
		if (token) {
			console.log('test')
			navigate('/')
		}
	}, [token, navigate])
	return (
		<div className="h-screen flex">
			<aside className="hidden  md:block bg-[#0E8388] md:w-[70%] md:justify-center md:items-center md:flex">
				<img src={logo} />
			</aside>
			<div className="flex justify-center md:items-center items-center w-[100%] flex-1">
				<form onSubmit={doLogin} className="flex flex-col gap-6 w-full px-8">
					<div>
						<img src={logo_header} />
					</div>
					<div className="font-bold">Sign In</div>
					<div>Hi, Welcome back to Urticket!</div>
					{errorMessage && (
						<div>
							<div className="alert alert-error">{errorMessage}</div>
						</div>
					)}
					<div>
						<input type="email" name="email" placeholder="email" className="input input-bordered w-full hover:border-[1px] hover:outline-none px-[10px] border-box border-[1px] rounded-xl" />
					</div>
					<div>
						<input type="password" name="password" placeholder="password" className="input input-bordered w-full  hover:outline-none px-[10px] border-box border-[1px] rounded-xl" />
					</div>
					<div className="text-right">
						<Link to="/ForgotPassword" className="text-primary font-bold hover:text-[#0E8388] ">
							Forgot Password?
						</Link>
					</div>
					<div>
						<button className="btn btn-primary text-white w-full">Sign In</button>
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
	)
}
export default Login
