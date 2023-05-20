import HeaderHome from '../components/HeaderHome'
import UserSideBar from '../components/UserSideBar'
import FooterSection from '../components/FooterSection'

import defaultProfile from '../assets/img/default_picture.jpg'
import React from 'react'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'
import http from '../helpers/http'
import moment from 'moment'



function Profil() {
    const token = useSelector(state => state.auth.token)
    const [profile, setProfile] = React.useState({})
    const [editUsername, setEditUsername] = React.useState(false)
    const [editEmail, setEditEmail] = React.useState(false)
    const [editPhoneNumber, setEditPhoneNumber] = React.useState(false)
    const [editBirthdate, setEditBirthdate] = React.useState(false)
    const [selectedPicture, setselectedPicture] = React.useState(false)

   
    

    React.useEffect(()=> {
        const getProfile = async ()=> {
            const {data} = await http(token).get('/profile')
            setProfile(data.results)
        } 
        getProfile()

        
    },[])

    React.useEffect(()=>{
        console.log(selectedPicture)
    }, [selectedPicture])

    const editProfile = async (values) =>{
        const form = new FormData()
        Object.keys(values).forEach((key)=>{
            if(values[key]){
                if(key === 'birthDate'){
                    form.append(key, values[key], 'DD-MM-YYYY').format('YYYY/MM/DD')
                }else{
                    form.append(key, values[key])
                }
              
            }
           
        })
        if(selectedPicture){
            form.append('picture', selectedPicture)
        }
        const {data} = await http(token).patch('/Profile', form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        setProfile(data.results)

        setEditUsername(false)
        setEditBirthdate(false)
        setEditPhoneNumber(false)
        setEditEmail(false)
    }

    return (
        <div className='min-h-screen'>
            <nav>
                <HeaderHome />
            </nav>
            <main className='flex flex-row md:bg-[#DAE5D0] justify-between gap-12 pb-[50px] w-full pt-[150px] pr-10'>
                <aside>
                    <UserSideBar />
                </aside>
                <Formik
                    initialValues={{
                        
                        fullName: profile?.fullName,
                        username:profile?.username,
                        email:profile?.email,
                        phoneNumber:profile?.phoneNumber,
                        gender:profile?.gender,
                        profession:profile?.profession,
                        Nationality:profile?.Nationality,
                        birthDate:profile?.birthDate && moment(profile.birthDate).format('YYYY-MM-DD')                 
                    }}
                    onSubmit={editProfile}
                    enableReinitialize
                >
                    {({handleSubmit,handleChange, handleBlur, errors, touched, values})=>(
                        <form onSubmit={handleSubmit} className='w-full h-full rounded-[30px] flex pb-[50px]  justify-center bg-white mt-[0px] overflow-hidden'>
                            <div className='px-[50px] mt-[0px] md:mt-[75px]  flex flex-col flex-1 w-[100%] md:w-full'>
                                <div className='md:hidden flex flex-col gap-2 items-center'>
                            
                                    <div className='p-2 rounded-full border-4 border-accent w-[135px] h-[135px] '>
                                        <div className=' border rounded-full overflow-hidden w-full h-full '>
                                            <img className='block object-cover w-full h-full ' src={profile} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className='btn btn-accent'>
                                            <span>Choose Photo</span>
                                            <input className='hidden' type='file' />
                                        </label>
                                    </div>
                                </div>
                                <div className='md:mt-[0px] mt-[30px] text-xl font-semibold'>
                            Profile
                                </div>
                                <div className='flex mt-[50px]'>
                                    <div className='flex flex-col gap-[30px] w-full'>
                                        <div className='flex gap-6'>
                                            <div className='w-[150px] flex items-center'>Name</div>
                                            <div className='flex-1'>
                                                <input
                                                    name='fullName'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.fullName}
                                                    className='input input-bordered w-full'
                                                    type='text'
                                                    placeholder='Roronoa'
                                                />
                                            </div>
                                        </div>
                                        <div className='flex gap-6'>
                                            <div className='w-[150px] flex items-center' >User name</div>
                                            <div  className='flex-1'>
                                                <div className='flex gap-4'>
                                                    { !editUsername && 
                                                    <span> {profile?.username === null? <span className='text-red-400'>Not Set</span>:profile?.username } </span>}
                                                    {editUsername && <input 
                                                        type='text'
                                                        className='input input-bordered w-full'
                                                        name='username'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.username} />}
                                                    {!editUsername && <div>
                                                        <button onClick={() => setEditUsername(true) } className='text-accent font-bold'>Edit</button>
                                                    </div>}
                                                </div>
                                        
                                        
                                            </div>
                                        </div>
                                        <div className='flex gap-6'>
                                            <div className='w-[150px] flex items-center' >Email</div>
                                            <div  className='flex-1'>
                                                <div className='flex gap-4'>
                                                    { !editEmail && <span> {profile?.email === null? <span className='text-red-400'>Not Set</span>:profile?.email }</span>}
                                                    {editEmail && <input
                                                        type='email' 
                                                        className='input input-bordered w-full'
                                                        name='email'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.email}
                                                    />}
                                                    {!editEmail && <div>
                                                        <button onClick={() => setEditEmail(true) } className='text-accent font-bold'>Edit</button>
                                                    </div>}
                                                </div>
                                        
                                            </div>
                                        </div>
                                        <div className='flex gap-6'>
                                            <div className='w-[150px] flex items-center' >Phone Number</div>
                                            <div  className='flex-1'>
                                                <div className='flex gap-4'>
                                                    { !editPhoneNumber && <span>
                                                        {profile?.phoneNumber === null? <span className='text-red-400'>Not Set</span>:profile?.phoneNumber }</span>}
                                                    {editPhoneNumber && <input 
                                                        type='text' 
                                                        className='input input-bordered w-full'
                                                        name='phoneNumber'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.phoneNumber}
                                                    />}
                                                    {!editPhoneNumber && <div>
                                                        <button onClick={() => setEditPhoneNumber(true) } className='text-accent font-bold'>Edit</button>
                                                    </div>}
                                                </div>
                                        
                                            </div>
                                        </div>
                                        <div className='flex gap-6'>
                                            <div className='w-[150px] flex items-center' >Gender</div>
                                            <div className='flex-1'>
                                                <div className='flex gap-4'>
                                                    <label className='flex gap-2 items-center'>
                                                        <input 
                                                            type='radio' 
                                                            className='radio radio-accent'
                                                            name='gender'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.gender}
                                                        />
                                                        <span>Male</span>
                                                    </label>
                                                    <label className='flex gap-2 items-center'>
                                                        <input 
                                                            type='radio' 
                                                            className='radio radio-accent'
                                                            name='gender'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.gender}
                                                        />
                                                        <span>Female</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex gap-6'>
                                            <div className='w-[150px] flex items-center'>Profession</div>
                                            <div className='flex-1'>
                                                <div className=''>
                                                    <select
                                                        className='border-[1px] hover:border-[#0E8388] border-[#C1C5D0] w-full h-[55px] outline-0 rounded-xl px-4'
                                                        name='prefession'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.profession}
                                                    >
                                                        <option className='hidden'>
                                                    Select Profession
                                                        </option>
                                                        <option value='Student'>
                                                    Student
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex gap-6'>
                                            <div className='w-[150px] flex items-center'>Nationality</div>
                                            <div className='flex-1'>
                                                <div className='w-full'>
                                                    <select
                                                        className='border-[1px] hover:border-[#0E8388] border-[#C1C5D0]  w-full h-[55px] outline-0 rounded-xl px-4'
                                                        name='Nationality'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.Nationality}                                                        
                                                    >
                                                        <option className='hidden'>
                                                    Select Nationality
                                                        </option>
                                                        <option value='Indonesia'>
                                                    Indonesia
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex gap-6'>
                                            <div className='w-[150px] flex items-center' >Birthdate</div>
                                            <div  className='flex-1'>
                                                <div className='flex gap-4'>
                                                    { !editBirthdate && <span>{profile?.birthDate === null? <span className='text-red-400'>Not Set</span>:moment(profile?.birthDate).format('DD/MM/YYYY') }</span>}
                                                    {editBirthdate && <input 
                                                        type='date' 
                                                        pattern =''
                                                        className='input input-bordered w-full' 
                                                        name='birthDate'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.birthDate}
                                                    />}
                                                    {!editBirthdate && <div>
                                                        <button onClick={() => setEditBirthdate(true) } className='text-accent font-bold'>Edit</button>
                                                    </div>}
                                                </div>
                                        
                                            </div>
                                        </div>
                                        <div>
                                            <button type='submit' className='btn btn-accent max-w-[315px] w-full '>save</button>
                                        </div>
                                    </div>
                           
                                </div>
                       
                            </div>
                            <div className='mt-[100px] p-20 items-center hidden md:block  flex justify-center border-l-2  border-[#C1C5D025%]'>
                                <div className='flex flex-col gap-2 items-center'>
                            
                                    <div className='p-2 rounded-full border-4 border-accent w-[135px] h-[135px] '>
                                        <div className=' border rounded-full overflow-hidden w-full h-full '>
                                            <img
                                                className='block object-cover w-full h-full' src={profile?.picture?.startsWith('https') ? profile.picture : (profile?.picture === null ? defaultProfile : `http://${import.meta.env.VITE_BACKEND_URL}/uploads/${profile?.picture}`)} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className='btn btn-accent'>
                                            <span>Choose Photo</span>
                                            <input 
                                                className='hidden' 
                                                type='file'
                                                name='picture'
                                                onChange={(e)=>setselectedPicture(e.target.files[0] )}
                                                value={values.picture}  
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <label
                                            className='text-xs text-[#373A42 75%] font-normal'
                                            htmlFor='information'
                                        >
                                    Image size: max, 2 MB
                                        </label>
                                        <br />
                                        <label
                                            className='text-xs text-[#373A42 75%] font-normal'
                                            htmlFor='information'
                                        >
                                    Image formats: .JPG, .JPEG, .PNG
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </main>

            <div className='footers'>
                <FooterSection />
            </div>
        </div>
    )
}
export default Profil
