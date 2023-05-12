import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import Event from './pages/Event'
import Payment from './pages/Payment'
import Booking from './pages/Booking'
import Profil from './pages/Profil'
import EditProfil from './pages/EditProfile'
import ChangePassword from './pages/ChangePassword'
import ManageEvent from './pages/ManageEvent'
import CreateEvent from './pages/CreateEvent'
import UpdateEvent from './pages/UpdateEvent'
import DetailEvent from './pages/DetailEvent'
import MyBooking from './pages/MyBooking'
import DetailMyBooking from './pages/DetailMyBooking'
import MyWishlist from './pages/MyWishlist'

import { store } from './redux/store'

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/SignUp" element={<SignUp />} />
					<Route path="/Login" element={<Login />} />
					<Route path="/ForgotPassword" element={<ForgotPassword />} />
					<Route path="/Event-Detail/:id" element={<Event />} />
					<Route path="/Payment" element={<Payment />} />
					<Route path="/Profil" element={<Profil />} />
					<Route path="/EditProfil" element={<EditProfil />} />
					<Route path="/ChangePassword" element={<ChangePassword />} />
					<Route path="/Booking" element={<Booking />} />
					<Route path="/ManageEvent" element={<ManageEvent />} />
					<Route path="/CreateEvent" element={<CreateEvent />} />
					<Route path="/UpdateEvent" element={<UpdateEvent />} />
					<Route path="/DetailEvent/:id" element={<DetailEvent />} />
					<Route path="/MyBooking" element={<MyBooking />} />
					<Route path="/DetailMyBooking" element={<DetailMyBooking />} />
					<Route path="/MyWishlist" element={<MyWishlist />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	)
}
export default App
