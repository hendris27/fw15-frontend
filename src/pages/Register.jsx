import logo from '../assets/img/main_logo.png'
import logo_header from '../assets/img/header_logo.png'

import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import propTypes from 'prop-types'

import { useDispatch, useSelector } from 'react-redux'
import { clearMessage } from '../redux/reducers/auth'

import { asyncRegisterAction } from '../redux/actions/auth'

import { FaEye, FaEyeSlash } from 'react-icons/fa'

const validationSchema = Yup.object({
    fullName: Yup.string().required().min(3,'fullName is Invalid'),
    email: Yup.string().required().email('Email is invalid'),
    password: Yup.string().required('Password is invalid'),
    confirmPassword: Yup.string().required().oneOf([Yup.ref('password'), null],'Passwords must match'),
})

const FormRegister = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
}) => {
    const errorMessage = useSelector((state) => state.auth.errorMessage)
    const warningMessage = useSelector((state) => state.auth.warningMessage)
    const succesMessage = useSelector((state) => state.auth.succesMessage)
    const [checked, setChecked] = useState(false)
    const isChecked =false
    const [text, password] = useState(false)
    const [openEye, closeEye] = useState(false)

    const clickAccept = () =>{
        setChecked((current) => !current)
    }
    const ShowPassword = () =>{
        password(!text)
        closeEye(!openEye)
    }
    const ShowConfirmPassword = () =>{
        password(!text)
        closeEye(!openEye)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-6 w-full px-8'
        >
            <div>
                <img src={logo_header} />
            </div>
            <div className='font-bold'>Register</div>
            <div>Already have an account? <Link to='/Login' className='text-[#0E8388]'>Log In</Link>
            </div>
            {succesMessage && (
                <div>
                    <div className='alert alert-success'>{succesMessage}</div>
                </div>
            )}
            {errorMessage && (
                <div>
                    <div className='alert alert-error'>{errorMessage}</div>
                </div>
            )}
            {warningMessage && (
                <div>
                    <div className='alert alert-warning'>{warningMessage}</div>
                </div>
            )}

            <div className='form-control'>
                <input
                    type='text'
                    name='fullName'
                    placeholder='Full Name'
                    className={`input w-full input-bordered ${
                        errors.fullName && touched.fullName && 'input-error'
                    }`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fullName}
                />
                {errors.fullName && touched.fullName && (<label className='label'>
                    <span className='label-text-alt text-error'>
                        {errors.fullName}
                    </span>
                </label>
                )}
            </div>
            <div className='form-control'>
                <input
                    type='email'
                    name='email'
                    placeholder='email'
                    className={`input w-full input-bordered ${
                        errors.email && touched.email && 'input-error'
                    }`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                {errors.email && touched.email && (<label className='label'>
                    <span className='label-text-alt text-error'>
                        {errors.email}
                    </span>
                </label>
                )}
            </div>
            <div className='relative form-control'>
                <input
                    type={text ? 'text' : 'password'}
                    name='password'
                    placeholder='password'
                    className={`input w-full input-bordered ${
                        errors.password && touched.password && 'input-error'
                    }`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                />
                {errors.password && touched.password && (
                    <label className='label'>
                        <span className='label-text-alt text-error'>
                            {errors.password}
                        </span>
                    </label>
                )}
                <div className='absolute top-3 right-4 '>
                    <button type='button' onClick={ShowPassword}>
                        {openEye ? <FaEye size={25} /> : <FaEyeSlash  color='red' size={25}/> }
                    </button>
                </div>
            </div>
            <div className='relative form-control'>
                <input
                    type={text ? 'text' : 'password'}
                    name='confirmPassword'
                    placeholder='Confrim Password'
                    className={`input w-full input-bordered ${
                        errors.confirmPassword && touched.confirmPassword && 'input-error'
                    }`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                />
                {errors.confirmPassword && touched.confirmPassword && (
                    <label className='label'>
                        <span className='label-text-alt text-error'>
                            {errors.confirmPassword}
                        </span>
                    </label>
                )}
                <div className='absolute top-3 right-4 '>
                    <button type='button' onClick={ShowConfirmPassword}>
                        {openEye ? <FaEye size={25} /> : <FaEyeSlash  color='red' size={25}/> }
                    </button>
                </div>
            </div>
            <div className='flex gap-4'>
                <div>
                    <input  
                        type='checkbox' 
                        className='checkbox checkbox-primary '
                        name='accept'
                        id='accept'
                        onChange={clickAccept}
                        value={checked}
                        checked={isChecked ?'checked' : null}
                    />
                </div>
                <span className='label-text'>Accept terms and condition</span>
            </div>
            <div>
                <button
                    disabled={!checked}
                    type='submit'
                    className='btn btn-primary text-white w-full'
                >
                    Register
                </button>
            </div>
           
        </form>
    )
}

FormRegister.propTypes = {
    values: propTypes.objectOf(propTypes.string),
    errors: propTypes.objectOf(propTypes.string),
    touched: propTypes.objectOf(propTypes.bool),
    handleChange: propTypes.func,
    handleBlur: propTypes.func,
    handleSubmit: propTypes.func,
    isSubmitting: propTypes.bool,
}
const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const token = useSelector((state) => state.auth.token)
    const succesMessage = useSelector((state) => state.auth.succesMessage)
    // const formError = useSelector((state) => state.auth.formError)

    React.useEffect(() => {
        // dispatch(clearMessage())
        if (succesMessage) {
            console.log('test')
            navigate('/Register')
        }
    }, [succesMessage, navigate, dispatch])
    
    React.useEffect(()=>{
        dispatch(clearMessage())
    },[])
    const doLogin = async (values, { setSubmitting, /*setErrors*/ }) => {
        dispatch(clearMessage())
        dispatch(asyncRegisterAction(values))
        // if (formError.length) {
        //     setErrors({
        //         email: formError.filter((item) => item.param === 'email')[0]
        //             .message,
        //         password: formError.filter(
        //             (item) => item.param === 'password'
        //         )[0].message,
        //     })
        // }
        setSubmitting(false)
    }
    return (
        <div className='h-screen flex'>
            <aside className='hidden  md:block bg-[#0E8388] md:w-[70%] md:justify-center md:items-center md:flex'>
                <img src={logo} />
            </aside>
            <div className='flex justify-center md:items-center items-center w-[100%] flex-1'>
                <Formik
                    initialValues={{
                        fullName: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={doLogin}
                >
                    {(props) => <FormRegister {...props} />}
                </Formik>
            </div>
        </div>
    )
}
export default Register
