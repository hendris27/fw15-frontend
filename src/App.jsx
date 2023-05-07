import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import DetailEvent from './pages/DetailEvent';
import Payment from './pages/Payment';
import Booking from './pages/Booking';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/SignUp" element={<SignUp />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/ForgotPassword" element={<ForgotPassword />} />
				<Route path="/DetailEvent" element={<DetailEvent />} />
				<Route path="/DetailEvent" element={<DetailEvent />} />
				<Route path="/Payment" element={<Payment />} />
				<Route path="/Booking" element={<Booking />} />
			</Routes>
		</BrowserRouter>
	);
};
export default App;
