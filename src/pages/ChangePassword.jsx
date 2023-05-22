import FooterSection from '../components/FooterSection'
import HeaderHome from '../components/HeaderHome'
import UserSideBar from '../components/UserSideBar'
// import { useSelector } from 'react-redux'
import {  Formik } from 'formik'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import * as Yup from 'yup'
import http from '../helpers/http'

import { FaEye, FaEyeSlash } from 'react-icons/fa'


const validationSchema = Yup.object({
    oldPassword: Yup.string().required('Old password don`t be empty'),
    newPassword: Yup.string().required('New password don`t be empty'),
    confirmNewPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
})

function ChangePassword() {
    const token = useSelector((state) => state.auth.token)
    const [successMessage, setSuccessMessage] = useState('')
    const [errors, setErrors] = useState('')
    const [text, password] = useState(false)
    const [openEye, closeEye] = useState(false)

    const ShowPassword = () =>{
        password(!text)
        closeEye(!openEye)
    }
    // const ShowPassword = () =>{
    //     password(!text)
    //     closeEye(!openEye)
    // }

  

    if (errors) {
        setTimeout(() => {
            setErrors(false)
        }, 4000)
    }
    if (successMessage) {
        setTimeout(() => {
            setSuccessMessage(false)
        }, 4000)
    }

    const changePassword = async (values) => {
        try {
            const { oldPassword, newPassword, confirmNewPassword } = values
            const body = new URLSearchParams({ oldPassword, newPassword, confirmNewPassword }).toString()
            const { data } = await http(token).patch('/ChangePassword', body)
            return setSuccessMessage(data.message)
        } catch (err) {
            const results = err.response?.data?.results
            const message = err?.response?.data?.message
            if (results) {
                setErrors(results)
            }
            if (message) {
                setErrors(message)
            }
        }
    }

    return (
        <div className='h-screen'>
            <nav className='headers'>
                <HeaderHome />
            </nav>
            <main className='flex flex-row md:bg-[#DAE5D0] justify-between gap-12 pb-[50px] w-full pt-[150px] pr-10'>
                <aside>
                    <UserSideBar />
                </aside>
                <div className='w-full rounded-[30px] flex pb-[50px] px-[50px] gap-[100px] justify-center mr-5 bg-white mt-[0px] overflow-hidden'>
                    <div className='bg-[#fffF] w-full rounded-2xl flex flex-col gap-8 item-center ml-30px p-[30px] ml-12'>
                        <div className='w-full h-full '>
                            <div>
                                <div className='text-3xl font-bold'>
                                    <label>Change Password</label>
                                    <br />
                                    <br />
                                </div>
                                <div className='rounded-xl md:m-[50px] flex items-center justify-center'>
                                    {successMessage && (
                                      
                                        <div className='flex items-center justify-center'>
                                            <div className='alert alert-success text-xl text-noraml'>
                                                {successMessage}
                                            </div>
                                        </div>
                                      
                                    )}
                                    {errors && (
                                        
                                        <div className='flex items-center justify-center'>
                                            <div className='alert alert-error danger text-xl text-center'>{errors}</div>
                                        </div>
                                        
                                    )}</div>
                                <Formik
                                    initialValues={{
                                        oldPassword:'',
                                        newPassword:'',
                                        confirmNewPassword:''
                                    }}
                                    validationSchema={validationSchema}
                                    onSubmit={changePassword}
                                >
                                    {({isSubmitting, handleSubmit, handleChange, handleBlur, errors, touched, values}) =>(
                                        <form onSubmit={handleSubmit} className='flex flex-col gap-12'>
                                            <div className='w-full'>
                                                <div className='flex flex-col md:flex-row md:items-center md:w-[100%]'>
                                                    <div className='flex items-center w-[300px]'>Old Password</div>
                                                    <div className='flex-1 relative'>
                                                        <input 
                                                            type={text ? 'text' : 'password'}
                                                            name='oldPassword' 
                                                            className='input input-bordered w-full w-max-[315px]'
                                                            placeholder='Old Password' 
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.oldPassword}
                                                        />
                                                        {errors.oldPassword && touched.oldPassword && (
                                                            <label>
                                                                <span className='label-text-alt text-error'>{errors.oldPassword}</span>
                                                            </label>
                                                        )}
                                                        <div className='absolute top-3 right-4 '>
                                                            <button type='button' onClick={ShowPassword}>
                                                                {openEye ? <FaEye color='green' size={22} /> : <FaEyeSlash  color='red' size={22}/> }
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full'>
                                                <div className='flex flex-col md:flex-row md:items-center md:w-[100%]'>
                                                    <div className='flex items-center w-[300px]'>New Password</div>
                                                    <div className='flex-1 relative'>
                                                        <input 
                                                            type={text ? 'text' : 'password'}
                                                            name='newPassword' 
                                                            className='input input-bordered w-full w-max-[315px]'
                                                            placeholder='New Password' 
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.newPassword}/>
                                                        {errors.newPassword && touched.newPassword && (
                                                            <label>
                                                                <span className='label-text-alt text-error'>{errors.newPassword}</span>
                                                            </label>
                                                        )}
                                                        <div className='absolute top-3 right-4 '>
                                                            <button type='button' onClick={ShowPassword}>
                                                                {openEye ? <FaEye color='green' size={22} /> : <FaEyeSlash  color='red' size={22}/> }
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full'>
                                                <div className='flex flex-col md:flex-row md:items-center md:w-[100%]'>
                                                    <div className='flex items-center w-[300px]'>Confirm Password</div>
                                                    <div className='flex-1 relative'>
                                                        <input 
                                                            type={text ? 'text' : 'password'}
                                                            name='confirmNewPassword' 
                                                            className='input input-bordered w-full w-max-[315px]'
                                                            placeholder='Confrim Password' 
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.confirmNewPassword}
                                                        />
                                                        {errors.confirmNewPassword && touched.confirmNewPassword && (
                                                       
                                                            <span className='label-text-alt text-error'>{errors.confirmNewPassword}</span>
                                                           
                                                        )}
                                                        <div className='absolute top-3 right-4 '>
                                                            <button type='button' onClick={ShowPassword}>
                                                                {openEye ? <FaEye color='green' size={22} /> : <FaEyeSlash  color='red' size={22}/> }
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                            <div className=''>
                                                <button 
                                                    type='submit'
                                                    disabled={isSubmitting}
                                                    className='btn btn-primary w-full rounded-2xl'>
                                                Update
                                                </button>
                                            </div>
                                        </form>
                                    )
                                    }
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div className='footers'>
                <FooterSection />
            </div>
        </div>
    )
}
export default ChangePassword
