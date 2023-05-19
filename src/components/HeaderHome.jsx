import { Link } from 'react-router-dom'
import logo_header from '../assets/img/header_logo.png'
import { MdDensitySmall } from 'react-icons/md'

import { FiUser, FiUnlock, FiLogOut } from 'react-icons/fi'
import {
    AiFillCreditCard,
    AiFillEdit,
    AiOutlinePlusCircle,
    AiOutlineUnorderedList,
    AiOutlineHeart,
    AiOutlineSetting,
} from 'react-icons/ai'

import React from 'react'
import http from '../helpers/http'
import { useNavigate } from 'react-router-dom'
import { logout as logoutAction } from '../redux/reducers/auth'
import { useDispatch, useSelector } from 'react-redux'

const HeaderHome = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [profile, setProfile] = React.useState({})
    const token = useSelector((state) => state.auth.token)
    const [hiddened, setHiddened] = React.useState(
        'hidden md:hidden w-full h-auto flex flex-col gap-1 bg-[#C1C5D0] py-3'
    )
    const ShowHideNavBar =() => {
        if (
            hiddened ===
            'hidden md:hidden w-full h-auto flex flex-col gap-1 bg-[#C1C5D0] py-3'
        ) {
            setHiddened(
                'md:hidden w-full h-auto flex flex-col gap-1 bg-[#C1C5D0] py-3'
            )
        } else {
            setHiddened(
                'hidden md:hidden w-full h-auto flex flex-col gap-1 bg-[#C1C5D0] py-3'
            )
        }
    }

    React.useEffect(() => {
        async function getProfileData() {
            const { data } = await http(token).get('/profile')
            setProfile(data.results)
        }
        getProfileData()
    }, [])

    const doLogout = () => {
        const confirmed = window.confirm('Are you sure you want to logout?')
        if (confirmed) {
            dispatch(logoutAction())
            navigate('/Login')
        }
    }
    return (
        <>
            <header className='flex justify-between items-center bg-white px-[50px] w-full fixed z-10'>
                <div>
                    <Link to='/' className='hover:text-[#00AFC1] font-bold'>
                        <img src={logo_header} />
                    </Link>  
                </div>
                <div className='flex font-bold gap-4 hidden md:flex md:block'>
                    <Link to='/' className='hover:text-[#00AFC1] font-bold'>
                        Home
                    </Link>
                    <Link
                        to='/ManageEvent'
                        className='hover:text-[#00AFC1] font-bold'
                    >
                        Create Event
                    </Link>

                    <a
                        href='#cities'
                        className='hover:text-[#00AFC1] font-bold'
                    >
                        Location
                    </a>
                </div>
                {token ? (
                    
                    <div className='hidden md:block flex gap-2 justify-center items-center'>
                        <button onClick={ShowHideNavBar}
                            className='flex justify-center items-center gap-2'
                        >
                            {profile?.picture && (
                                <img
                                    className='w-12 h-12 border-4 border-blue-600 rounded-full object-cover'
                                    src={
                                        profile.picture.startsWith('https')
                                            ? profile.picture
                                            : `${
                                                import.meta.env
                                                    .VITE_BACKEND_URL
                                            }/uploads/${profile.picture}`
                                    }
                                    alt={profile?.fullName}
                                />
                            )}
                            <div className='text-black font-bold hover:text-accent'>
                                {profile?.fullName}
                            </div>
                        </button>

                        <button
                            onClick={doLogout}
                            className='btn btn-primary bg-red-700 text-white w-[95px] h-[20px]'
                        >
                            log out
                        </button>
                    </div>
                  
                ) : (
                    <div className='flex items-center gap-8 font-bold hidden md:block md:flex'>
                        <div>
                            <Link
                                to='/Login'
                                className='hover:text-[#00AFC1] font-bold'
                            >
                                Log In
                            </Link>
                        </div>
                        <div>
                            <button className='btn btn-primary text-white w-full h-[20px]'>
                                <Link
                                    to='/Register'
                                    className='hover:text-[#00AFC1] font-bold'
                                >
                                    Sign Up
                                </Link>
                            </button>
                        </div>
                    </div>
                )}

                <div
                    onClick={ShowHideNavBar}
                    className='md:hidden btn btn-square rounded-1xl btn-accent bg-white hover:bg-accent outline-none'
                >
                    <button>
                        <MdDensitySmall size={25} />
                    </button>
                </div>
            </header>
            <div className={hiddened}>
                {token ? (
                    <div className='mt-[100px] md:mt-[150px]'>
                        <div className='flex flex-col items-center'>
                            <div className='flex items-center justify-center gap-3 mb-8'>
                                <div className='inline-block rounded-full p-0.5 bg-gradient-to-br from-yellow-500 to-blue-400'>
                                    {profile?.picture && (
                                        <img
                                            className='w-12 h-12 border-4 border-white rounded-full'
                                            src={
                                                profile?.picture.startsWith('https')
                                                    ? profile?.picture
                                                    : `http://localhost:8888/uploads/${profile?.picture}`
                                            }
                                            alt={profile?.fullName}
                                        />
                                    )}
                                </div>
                                <div className='text-black'>
                                    <h1 className='font-bold text-[14px] '>
                                        {profile?.fullName}
                                    </h1>
                                    <p className=''>
                                        {profile?.profession}
                                    </p>
                                </div>
                            </div>
                           
                           
                            <div className='flex  gap-4  font-bold'>
                                <div>
                                    <FiUser color='#00AFC1' size={25} />
                                </div>
                                <div>
                                    <Link
                                        to='/Profil'
                                        className='font-bold hover:text-[#0E8388] '
                                    >
                            Profile
                                    </Link>
                                </div>
                            </div>
                            <div className='flex  gap-4 mt-10 '>
                                <div>
                                    <AiFillCreditCard color='#00AFC1' size={25} />
                                </div>
                                <div>Card</div>
                            </div>

                            <div className='flex  gap-4 mt-10'>
                                <div>
                                    <AiFillEdit color='#00AFC1' size={25} />
                                </div>
                                <div>
                                    <Link
                                        to='/Profil'
                                        className='hover:text-[#0E8388] hover:text-[17px]'
                                    >
                            Edit Profile
                                    </Link>
                                </div>
                            </div>

                            <div className='flex  gap-4 mt-10'>
                                <div>
                                    <FiUnlock color='#00AFC1' size={25} />
                                </div>
                                <div>
                                    <Link
                                        to='/ChangePassword'
                                        className='hover:text-[#0E8388] hover:text-[17px]'
                                    >
                            Change Password
                                    </Link>
                                </div>
                            </div>
                            <div className='flex  gap-4 mt-10'>
                                <div>
                                    <AiOutlinePlusCircle color='#00AFC1' size={25} />
                                </div>
                                <Link
                                    to='/ManageEvent'
                                    className='hover:text-[#0E8388] hover:text-[17px]'
                                >
                        Create Event
                                </Link>
                            </div>
                            <div className='flex  gap-4 mt-10'>
                                <div>
                                    <AiOutlineUnorderedList color='#00AFC1' size={25} />
                                </div>
                                <Link
                                    to='/MyBooking'
                                    className='hover:text-[#0E8388] hover:text-[17px]'
                                >
                        My Booking
                                </Link>
                            </div>
                            <div className='flex  gap-4 mt-10'>
                                <div>
                                    <AiOutlineHeart color='#00AFC1' size={25} />
                                </div>
                                <Link
                                    to='/MyWishlist'
                                    className='hover:text-[#0E8388] hover:text-[17px]'
                                >
                        My Wishlist
                                </Link>
                            </div>
                            <div className='flex  gap-4 mt-10'>
                                <div>
                                    <AiOutlineSetting color='#00AFC1' size={25} />
                                </div>
                                <div>Settings</div>
                            </div>
                            <div className='flex  gap-4 mt-10'>
                                <div>
                                    <FiLogOut color='red' size={25} />
                                </div>
                                <div onClick={doLogout} className='text-[#ff0000] font-bold'>Logout</div>
                            </div>
                        </div>
                       
                    </div>
                ) : (
                    <div className='mt-[80px]'>
                        <ul className='flex flex-col gap-1 font-[500] text-[16px] items-center'>
                            <li className='text-primary hover:text-accent'>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className='text-primary hover:text-accent'>
                                <Link to='/CreateEvent'>Create Event</Link>
                            </li>
                            <li className='text-primary hover:text-accent'>
                                <Link to='/Location'>Location</Link>
                            </li>
                        </ul>
                        <div className='flex gap-2 flex-col lg:flex-row items-center'>
                            <p className='flex items-center text-primary hover:text-neutral text-[16px] font-bold'>
                                <Link to='/Login'>Log In</Link>
                            </p>
                            <button
                                className='bg-accent text-white rounded-2xl h-[40px] px-10 shadow-lg font-bold text-[16px] hover:bg-secondary lg-shadow'
                                type='submit'
                            >
                                <Link to='/Signin'>Sign Up</Link>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
export default HeaderHome
