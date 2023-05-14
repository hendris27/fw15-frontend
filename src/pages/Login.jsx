import logo from "../assets/img/main_logo.png"
import logo_header from "../assets/img/header_logo.png"

import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"

import { useNavigate } from "react-router-dom"
import React from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import propTypes from "prop-types"

import { useDispatch, useSelector } from "react-redux"
import { clearMessage } from "../redux/reducers/auth"

import { asyncLoginAction } from "../redux/actions/auth"

const validationSchema = Yup.object({
  email: Yup.string().email("Email is invalid"),
  password: Yup.string().required("Password is invalid"),
})

const FormLogin = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
  const errorMessage = useSelector((state) => state.auth.errorMessage)
  const warningMessage = useSelector((state) => state.auth.warningMessage)

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full px-8">
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
      {warningMessage && (
        <div>
          <div className="alert alert-warning">{warningMessage}</div>
        </div>
      )}

      <div className="form-control">
        <input type="email" name="email" placeholder="email" className={`input w-full input-bordered ${errors.email && touched.email && "input-error"}`} onChange={handleChange} onBlur={handleBlur} value={values.email} />
        {errors.email && touched.email && (
          <label className="label">
            <span className="label-text-alt text-error">{errors.email}</span>
          </label>
        )}
      </div>
      <div className="form-control">
        <input
          type="password"
          name="password"
          placeholder="password"
          className={`input w-full input-bordered ${errors.password && touched.password && "input-error"}`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {errors.password && touched.password && (
          <label className="label">
            <span className="label-text-alt text-error">{errors.password}</span>
          </label>
        )}
      </div>
      <div className="text-right">
        <Link to="/ForgotPassword" className="text-primary font-bold hover:text-[#0E8388] ">
					Forgot Password?
        </Link>
      </div>
      <div>
        <button disabled={isSubmitting} type="submit" className="btn btn-primary text-white w-full">
					Sign In
        </button>
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
  )
}

FormLogin.propTypes = {
  values: propTypes.objectOf(propTypes.string),
  errors: propTypes.objectOf(propTypes.string),
  touched: propTypes.objectOf(propTypes.bool),
  handleChange: propTypes.func,
  handleBlur: propTypes.func,
  handleSubmit: propTypes.func,
  isSubmitting: propTypes.bool,
}
const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)
  const formError = useSelector((state) => state.auth.formError)

  React.useEffect(() => {
    if (token) {
      console.log("test")
      navigate("/")
    }
  }, [token, navigate])

  const doLogin = async (values, { setSubmitting, setErrors }) => {
    dispatch(clearMessage())
    dispatch(asyncLoginAction(values))
    if (formError.length) {
      setErrors({
        email: formError.filter((item) => item.param === "email")[0].message,
        password: formError.filter((item) => item.param === "password")[0].message,
      })
    }
    setSubmitting(false)
  }
  return (
    <div className="h-screen flex">
      <aside className="hidden  md:block bg-[#0E8388] md:w-[70%] md:justify-center md:items-center md:flex">
        <img src={logo} />
      </aside>
      <div className="flex justify-center md:items-center items-center w-[100%] flex-1">
        <Formik
          initialValues={{
            enail: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={doLogin}
        >
          {(props) => <FormLogin {...props} />}
        </Formik>
      </div>
    </div>
  )
}
export default Login
