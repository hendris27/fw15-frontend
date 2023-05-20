import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Home from './pages/Home'
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
import SeacrhResults from './pages/SearchResults'
import Register from './pages/Register'
import ResetPassword from './pages/ResetPassword'

import { store, persistor } from './redux/store'
import PrivateRoute from './components/PrivateRouter'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/Login' element={<Login />} />
                        <Route path='/Register' element={<Register />} />
                        <Route path='/ResetPassword' element={<ResetPassword />} />
                        <Route path='/ForgotPassword' element={<ForgotPassword />} />
                        <Route path='/Event-Detail/:id' element={<Event />} />
                        <Route path='/Search' element={<SeacrhResults />} />
                        <Route
                            path='/Payment'
                            element={
                                <PrivateRoute>
                                    <Payment />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path='/Profil'
                            element={
                                <PrivateRoute>
                                    <Profil />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path='/EditProfil'
                            element={
                                <PrivateRoute>
                                    <EditProfil />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path='/ChangePassword'
                            element={
                                <PrivateRoute>
                                    <ChangePassword />
                                </PrivateRoute>
                            }
                        />
                        <Route path='/Booking' element={<Booking />} />
                        <Route
                            path='/ManageEvent'
                            element={
                                <PrivateRoute>
                                    <ManageEvent />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path='/CreateEvent'
                            element={
                                <PrivateRoute>
                                    <CreateEvent />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path='/UpdateEvent'
                            element={
                                <PrivateRoute>
                                    <UpdateEvent />
                                </PrivateRoute>
                            }
                        />
                        <Route path='/DetailEvent/:id' element={<DetailEvent />} />
                        <Route
                            path='/MyBooking'
                            element={
                                <PrivateRoute>
                                    <MyBooking />
                                </PrivateRoute>
                            }
                        />
                        <Route path='/DetailMyBooking' element={<DetailMyBooking />} />
                        <Route
                            path='/MyWishlist'
                            element={
                                <PrivateRoute>
                                    <MyWishlist />
                                </PrivateRoute>
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}
export default App
