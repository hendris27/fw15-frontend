import FooterSection from '../components/FooterSection'
import HeaderHome from '../components/HeaderHome'
import UserSideBar from '../components/UserSideBar'

function DetailMyBooking() {
    return (
        <div className='h-screen'>
            <nav className='headers'>
                <HeaderHome />
            </nav>
            <aside>
                <UserSideBar />
            </aside>
            <main className='flex justify-center bg-[#DAE5D0]'></main>
            <div className='footers'>
                <FooterSection />
            </div>
        </div>
    )
}
export default DetailMyBooking
