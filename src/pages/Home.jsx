import HeaderHome from '../components/HeaderHome'
import FooterSection from '../components/FooterSection'
import { Link, useSearchParams } from 'react-router-dom'

import logo from '../assets/img/main_logo.png'

import {
    AiOutlineMinus,
    AiOutlineArrowRight,
    AiOutlineArrowLeft,
} from 'react-icons/ai'
import { IoSearch } from 'react-icons/io5'
import { ImLocation } from 'react-icons/im'
import { BsArrowRightSquareFill } from 'react-icons/bs'

import { Formik } from 'formik'
import React from 'react'
import moment from 'moment'
import http from '../helpers/http'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const [events, setEvents] = React.useState([])
    const [cities, setCities] = React.useState([])
    const [patners, setPatners] = React.useState([])
    const [category, setCategory] = React.useState([])
    const [eventCategory, setEventCategory] = React.useState([])
    const [searchParams, setSeacrhParams] = useSearchParams()

    async function getDataEventCategory(name) {
        try {
            const { data } = await http().get('/event?limit=10', {
                params: { searchByCategory: name },
            })
            setEventCategory(data.results)
        } catch (error) {
            const message = error?.response?.data?.message
            if (message) {
                console.log(message)
            }
        }
    }

    React.useEffect(() => {
        async function getDataEvent() {
            try {
                const { data } = await http().get('/event?limit=5')
                setEvents(data.results)
            } catch (error) {
                const message = error?.response?.data?.message
                if (message) {
                    console.log(message)
                }
            }
        }
        getDataEvent()

        getDataEventCategory()

        async function getDataCity() {
            try {
                const { data } = await http().get('/city?limit=100')
                setCities(data.results)
            } catch (error) {
                const message = error?.response?.data?.message
                if (message) {
                    console.log(message)
                }
            }
        }
        getDataCity()

        async function getDataCategory() {
            try {
                const { data } = await http().get('/category?limit=7')
                setCategory(data.results)
            } catch (error) {
                const message = error?.response?.data?.message
                if (message) {
                    console.log(message)
                }
            }
        }
        getDataCategory()

        async function getDataPatners() {
            try {
                const { data } = await http().get('/patners?limit=100')
                setPatners(data.results)
            } catch (error) {
                const message = error?.response?.data?.message
                if (message) {
                    console.log(message)
                }
            }
        }
        getDataPatners()
    }, [])

    const onSearch = (values) => {
        const qs = new URLSearchParams(values).toString()
        navigate(`/Search?${qs}`)
        // setSeacrhParams(values, "/Search")
    }

    return (
        <>
            <div className='h-screen'>
                <div className='relative'>
                    <HeaderHome />
                </div>
                <main>
                    <div className="flex flex-col md:justify-center bg-[#0E8388] pt-[100px] px-[50px] md:flex md:flex-row  bg-[url('./assets/img/layer.png')] bg-no-repeat bg-cover">
                        <div className='flex flex-col flex-1 justify-center gap-4'>
                            <div className=' w-[90%] font-bold text-center md:text-6xl text-[36px] text-white tracking-[2px] md:leading-[96px] leading-[54px] md:self-start self-center'>
                                Find events you <br />
                                love with our
                            </div>
                            <Formik
                                initialValues={{
                                    searchByName: '',
                                    searchByLocation: '',
                                }}
                                onSubmit={onSearch}
                            >
                                {({
                                    handleBlur,
                                    handleChange,
                                    handleSubmit,
                                }) => (
                                    <form onSubmit={handleSubmit}>
                                        <div className='hidden md:block md:flex  bg-white w-[85%] h-[50px] items-center px-[10px] rounded-xl  md:self-start self-center '>
                                            <div className='flex gap-2 '>
                                                <div>
                                                    <IoSearch
                                                        color='#C1C5D0'
                                                        size={25}
                                                    />
                                                </div>
                                                <div>
                                                    <input
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        name='searchByName'
                                                        type='text'
                                                        placeholder='Search event...'
                                                        className='text-[##C1C5D0] w-full outline-none'
                                                    />
                                                </div>
                                            </div>
                                            <div className=' border-l-[1px] border-[#C1C5D0] h-[40px] flex items-center  px-[10px]'></div>
                                            <div className='flex gap-2'>
                                                <div>
                                                    <ImLocation
                                                        color='#C1C5D0'
                                                        size={22}
                                                    />
                                                </div>
                                                <div>
                                                    <div className='form-control'>
                                                        <select
                                                            name='searchByLocation'
                                                            onChange={
                                                                handleChange
                                                            }
                                                            onBlur={handleBlur}
                                                            className='outline-none appearance:none -webkit-appearance:none -moz-appearance:none'
                                                        >
                                                            <option value=''>
                                                                All Location
                                                            </option>
                                                            {cities.map(
                                                                (city) => {
                                                                    return (
                                                                        <option
                                                                            key={`city-name${city.id}`}
                                                                            value={
                                                                                city.name
                                                                            }
                                                                        >
                                                                            {
                                                                                city.name
                                                                            }
                                                                        </option>
                                                                    )
                                                                }
                                                            )}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-center'>
                                                <button
                                                    type='submit'
                                                    className='btn btn-primary bg-white border-0 hover:bg-white'
                                                >
                                                    <BsArrowRightSquareFill
                                                        color='red'
                                                        size={28}
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </div>
                        <div className='md:mb-[0px] mb-[-40px]'>
                            <img src={logo} />
                        </div>
                        {/* top-search-mobile */}
                        <div className='md:hidden md:mb-[0px] mb-12 flex bg-white w-[85%] h-[50px] items-center px-[10px] rounded-xl  md:self-start self-center '>
                            <div className='flex gap-2 '>
                                <div>
                                    <IoSearch color='#C1C5D0' size={25} />
                                </div>
                                <div>
                                    <input
                                        type='text'
                                        placeholder='Search event...'
                                        className='text-[##C1C5D0] w-full outline-none'
                                    />
                                </div>
                            </div>
                            <div className='border-l-[1px] border-[#C1C5D0] h-[40px] flex items-center  px-[10px]'>
                                {' '}
                            </div>
                            <div className='flex gap-2'>
                                <div>
                                    <ImLocation color='#C1C5D0' size={22} />
                                </div>
                                <div>
                                    <input
                                        className=' w-full outline-none'
                                        type='text'
                                        placeholder='Where?'
                                    />
                                </div>
                            </div>
                            <div>
                                <BsArrowRightSquareFill color='red' size={28} />
                            </div>
                        </div>
                        {/* dowm-search-mobile */}
                    </div>
                    <div className='bg-[#FAF4FF]'>
                        <div className='flex flex-col items-center justify-center py-[50px]'>
                            <button className='bg-yellow-400 rounded-xl px-[20px] '>
                                <div className='flex gap-4 pl-3 tracking-[3px]'>
                                    <AiOutlineMinus color='black' size={25} />
                                    <div className='text-sm font-semibold'>
                                        EVENT
                                    </div>
                                </div>
                            </button>
                            <div className='font-semibold text-4xl mt-5 tracking-[1px]'>
                                Events For You
                            </div>
                            <div className='flex gap-10 mt-6'>
                                <div className='flex items-center'>
                                    <button className='btn btn-primary  rounded-1xl bg-yellow-400 hover:bg-[#0E8388]'>
                                        <AiOutlineArrowLeft
                                            size={18}
                                            className='text-black'
                                        />
                                    </button>
                                </div>
                                <div className='flex flex-col justify-between items-center gap-[5px] hover:border-[1px] hover:border-yellow-400 rounded-xl p-[5px]'>
                                    <div>13</div>
                                    <div>Mon</div>
                                </div>
                                <div className='flex flex-col justify-between items-center gap-[5px] hover:border-[1px] hover:border-yellow-400 rounded-xl p-[5px]'>
                                    <div>14</div>
                                    <div>Tue</div>
                                </div>
                                <div className='flex flex-col justify-between items-center gap-[5px] hover:border-[1px] hover:border-yellow-400 rounded-xl p-[5px]'>
                                    <div>15</div>
                                    <div>Wed</div>
                                </div>
                                <div className='flex flex-col justify-between items-center gap-[5px] hover:border-[1px] hover:border-yellow-400 rounded-xl p-[5px]'>
                                    <div>16</div>
                                    <div>Thu</div>
                                </div>
                                <div className='flex flex-col justify-between items-center gap-[5px] hover:border-[1px] hover:border-yellow-400 rounded-xl p-[5px]'>
                                    <div>17</div>
                                    <div>Fri</div>
                                </div>
                                <div className='flex items-center'>
                                    <button className='btn btn-primary  rounded-1xl bg-yellow-400 hover:bg-[#0E8388]'>
                                        <AiOutlineArrowRight
                                            size={18}
                                            className='text-black'
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='allevents'>
                        <div className='bg-[#FAF4FF] w-full flex justify-center pb-8'>
                            <div className='flex w-[95%] overflow-hidden object-cover overflow-scroll scrollbar-hide overflow-y-hidden gap-4 justify-center'>
                                {events.map((event) => {
                                    return (
                                        <Link
                                            to={`/Event-Detail/${event.id}`}
                                            key={`events-detail${event.id}`}
                                        >
                                            <>
                                                <div className='w-64 h-96 min-w-[260px] border rounded-3xl overflow-hidden relative'>
                                                    <img
                                                        className=' w-full h-full object-cover z-0'
                                                        src={
                                                            event.picture.startsWith(
                                                                'https'
                                                            )
                                                                ? event.picture
                                                                : `${
                                                                    import.meta
                                                                        .env
                                                                        .VITE_BACKEND_URL
                                                                }/uploads/${
                                                                    event.picture
                                                                }`
                                                        }
                                                    />
                                                    <div className='absolute bottom-0  flex flex-col px-5 gap-4 w-full bg-gradient-to-t from-black/[0.5] to-black/[0.0] h-[50%] '>
                                                        <div className='text-white'>
                                                            {moment(
                                                                event.date
                                                            ).format('LLLL')}
                                                        </div>
                                                        <div className='text-xl text-blue-300 font-bold'>
                                                            {event.tittle}
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='flex w-full justify-center pb-8 bg-[#FAF4FF] '>
                            <button
                                type='submit'
                                className='font-bold  hover:text-white h-9 px-16 py-1 border border-accent bg-yellow-400 text-black rounded-2xl hover:bg-accent'
                            >
                                See All
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-center' id='cities'>
                        <div className="bg-gray-700 w-[90%] px-[68px] py-[74px] border rounded-3xl bg-[url('/src/assets/img/layer2.png')] bg-no-repeat bg-cover">
                            <div className='bg-yellow-400 mt-11 w-40 h-[30px] flex justify-center items-center rounded-full'>
                                <div className='flex justify-center items-center rounded-full border-none outline-none text-white bg-yellow-400 border h-7 w-[150px] gap-3'>
                                    <div>
                                        <AiOutlineMinus
                                            color='black'
                                            size={25}
                                        />
                                    </div>

                                    <div>LOCATION</div>
                                </div>
                            </div>
                            <div className='h-[580px] lg:h-auto overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-12 xl:gap-16'>
                                <div>
                                    <div className='text-4xl flex flex-col tracking-wide w-[214px] mt-6 py-1 tracking-wide'>
                                        Discover
                                        <br /> Events
                                        <br /> Near You
                                        <br />
                                    </div>
                                </div>

                                {cities.map((city) => {
                                    return (
                                        <React.Fragment key={`city-${city.id}`}>
                                            <div className='flex flex-col items-center rounded-2xl overflow-hidden h-full gap-[15px] font-medium text-white text-base leading-6 tracking-[1px] '>
                                                <img
                                                    className='w-[214px] h-[100px] object-cover rounded-xl'
                                                    src={
                                                        city.picture.startsWith(
                                                            'https'
                                                        )
                                                            ? city.picture
                                                            : `${
                                                                import.meta
                                                                    .env
                                                                    .VITE_BACKEND_URL
                                                            }/uploads/${
                                                                city.picture
                                                            }`
                                                    }
                                                />
                                                <div className='text-white'>
                                                    {city.name}
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                            <div className='flex justify-center py-[40px]'>
                                <Link to='/'>
                                    <button className='w-[255px] h-[40px] bg-white rounded-xl text-sm hover:bg-yellow-400'>
                                    See All
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Top-category */}
                    <div className='flex justify-center'>
                        <div className='w-[100%] flex flex-col items-center justify-center py-[50px]'>
                            <button className='bg-yellow-400 rounded-xl px-[20px] flex items-center'>
                                <div className='flex gap-4 pl-3 tracking-[3px] flex gap-2 items-center'>
                                    <AiOutlineMinus color='black' size={25} />
                                </div>
                                <div className='text-sm font-semibold'>
                                    EVENT
                                </div>
                            </button>
                            <div className='font-semibold text-4xl mt-5 tracking-[1px]'>
                                Browse Events By Category{' '}
                            </div>
                            <div className='w-[95%] flex justify-center flex  items-center flex w-[100%] overflow-hidden object-cover overflow-scroll scrollbar-hide overflow-y-hidden gap-2'>
                                <div className='flex gap-28'>
                                    {category.map((category) => {
                                        return (
                                            <button
                                                onClick={function () {
                                                    getDataEventCategory(
                                                        category.name
                                                    )
                                                }}
                                                key={`categories-${category.id}`}
                                            >
                                                <div className='hover:text-red-400 text-xl hover:border-b-4 border-[#00AFC1] '>
                                                    <div className='hover:text-[#00AFC1] cursor-pointer text-black text-xl'>
                                                        {category.name}
                                                    </div>
                                                </div>
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='w-[80%] flex  items-center flex w-[100%] overflow-hidden object-cover overflow-scroll scrollbar-hide overflow-y-hidden gap-4'>
                                <div className='w-[100%]  py-6'>
                                    <div className='flex gap-4  w-full items-center justify-center'>
                                        {eventCategory.map((event) => {
                                            return (
                                                <Link
                                                    to={`/Event-Detail/${event.id}`}
                                                    key={`events-detail${event.id}`}
                                                >
                                                    <div
                                                        className='flex flex-col w-[264px] h-96 border rounded-3xl drop-shadow-lg flex-shrink-0 overflow-hidden'
                                                        key={`categoriesEvent${event.id}`}
                                                    >
                                                        <div className='flex-1 overflow-hidden'>
                                                            <img
                                                                src={
                                                                    event.picture.startsWith(
                                                                        'https'
                                                                    )
                                                                        ? event.picture
                                                                        : `${
                                                                            import.meta
                                                                                .env
                                                                                .VITE_BACKEND_URL
                                                                        }/uploads/${
                                                                            event.picture
                                                                        }`
                                                                }
                                                                className='w-full h-full object-cover'
                                                            />
                                                        </div>
                                                        <div className='flex-[0.5] flex justify-end gap-3 flex-col bg-accent h-[90px] w-full text-black p-10'>
                                                            <div className='text-white'>
                                                                {moment(
                                                                    event.date
                                                                ).format(
                                                                    'DD MMMM YYYY'
                                                                )}
                                                            </div>
                                                            <div className='font-bold text-2xl'>
                                                                {event.tittle}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )
                                        })}

                                        {eventCategory.length < 1 && (
                                            <div className='text-2xl font-bold text-red-400'>
                                                Data Category Not Found!
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* down-category */}

                    {/* top-patners */}
                    <div className="bg-[url('/src/assets/img/layer2.png')] bg-no-repeat bg-cover bg-[#012b2c] py-[50px]">
                        <div className='flex flex-col items-center gap-10'>
                            <div className='flex items-center gap-4 flex-col mt-10'>
                                <button className='bg-gray-400 rounded-xl px-[20px] flex gap-2 items-center'>
                                    <div className='flex gap-4 pl-3 tracking-[3px]'>
                                        <AiOutlineMinus
                                            color='black'
                                            size={25}
                                        />
                                    </div>
                                    <div className='text-sm font-semibold'>
                                        PATNERS
                                    </div>
                                </button>
                                <div className='font-semibold md:text-4xl text-2xl mt-6 tracking-[1px] text-[#ffff]'>
                                    Our Trusted Partners
                                </div>
                                <div className=' text-[12px] mt-6 tracking-[0.5px] text-[#C1C5D0]'>
                                    By companies like :
                                </div>
                            </div>
                            <div className='md:flex md:flex-row md:gap-10 flex  gap-16 flex-wrap'>
                                {patners.map((patner) => {
                                    return (
                                        <React.Fragment
                                            key={`patner-${patner.id}`}
                                        >
                                            <div>
                                                <img
                                                    className=' w-full h-full object-cover z-0'
                                                    src={
                                                        patner.picture.startsWith(
                                                            'https'
                                                        )
                                                            ? patner.picture
                                                            : `${
                                                                import.meta
                                                                    .env
                                                                    .VITE_BACKEND_URL
                                                            }/uploads/${
                                                                patner.picture
                                                            }`
                                                    }
                                                />
                                            </div>
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    {/* section-patners */}
                </main>

                <div className='footers'>
                    <FooterSection />
                </div>
            </div>
        </>
    )
}
export default Home
