import logo from '../assets/img/main_logo.png'
import logo_header from '../assets/img/header_logo.png'


import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import propTypes from 'prop-types'

import { useDispatch, useSelector } from 'react-redux'
import { clearMessage } from '../redux/reducers/auth'

import { asyncResetPasswordAction } from '../redux/actions/auth'

import { FaEye, FaEyeSlash } from 'react-icons/fa'

const validationSchema = Yup.object({
    code: Yup.string().required().min(6,'code is Invalid'),
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
    const [text, password] = useState(false)
    const [openEye, closeEye] = useState(false)

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
            <div className='font-bold text-xl'>Reset Password</div>
            
            {succesMessage && (
                <div>
                    <div className='flex items-center justify-center alert alert-success'>{succesMessage}</div>
                </div>
            )}
            {errorMessage && (
                <div>
                    <div className='flex items-center justify-center alert alert-error'>{errorMessage}</div>
                </div>
            )}
            {warningMessage && (
                <div>
                    <div className='flex items-center justify-center alert alert-warning'>{warningMessage}</div>
                </div>
            )}

            <div className='form-control'>
                <input
                    type='text'
                    name='code'
                    placeholder='code'
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
                        {openEye ? <FaEye color='green' size={22} /> : <FaEyeSlash  color='red' size={22}/> }
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
                        {openEye ? <FaEye color='green' size={22} /> : <FaEyeSlash  color='red' size={22}/> }
                    </button>
                </div>
            </div>
           
           

            <div>
                <button
                    type='submit'
                    className='btn btn-primary text-white w-full'
                >
                    Reset Password
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
    // const succesMessage = useSelector((state) => state.auth.succesMessage)
    const formError = useSelector((state) => state.auth.formError)

    // React.useEffect(() => {
    //     // dispatch(clearMessage())
    //     if (succesMessage) {
    //         console.log('test')
    //         navigate('/Login')
    //     }
    // }, [succesMessage, navigate, dispatch])
    
    
    const doResetPassword = async (values, { setSubmitting, setFieldError }) => {
        dispatch(clearMessage())
        dispatch(asyncResetPasswordAction(values))
        if (formError.length) {
            const email = formError.filter((item) => item.param === 'email')[0]?.msg
            const password = formError.filter((item) => item.param === 'password')[0]?.msg
            if (email) {
                setFieldError('email', email)
            }
            if (password) {
                setFieldError('password', password)
                setFieldError('confirmPassword', password)
            }
        }
        setSubmitting(false)
        navigate('/Login')
    }

    
    return (
        <div className='h-screen flex'>
            <aside className='hidden  md:block bg-[#0E8388] md:w-[70%] md:justify-center md:items-center md:flex'>
                <img src={logo} />
            </aside>
            <div className='flex justify-center md:items-center items-center w-[100%] flex-1'>
                <Formik
                    initialValues={{
                        code: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={doResetPassword}
                >
                    {(props) => <FormRegister {...props} />}
                </Formik>
            </div>
        </div>
    )
}
export default Register
