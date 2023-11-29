import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Restaurants from '../pages/Restaurants';
import { lazy } from 'react';
import Session from '../pages/UserSession/Session';
import RestaurantDetail from '../pages/RestDetail/RestaurantDetail';
import Profile from '../pages/Profile/Profile';
import EditProfile from '../pages/Profile/EditProfile'
import RestaurantPlatos from '../components/Platos/RestaurantPlatos';
import { Emprendimientos } from '../pages/Emprendimientos/Emprendimientos';
const Register = lazy(() => import('../components/Register/Register'));
const Login = lazy(() => import('../components/Login/Login'));


function AppRoutes() {
    return (
        <>
        <div className='h-full' >

        <Routes>
            <Route path='/' element={<Session />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/restaurant/:id/details' element={<RestaurantDetail/>}/>
            <Route path='/restaurant/:id/platos' element={<RestaurantPlatos/>}/>
            <Route path='/restaurants' element={<Restaurants />} />
            <Route path='/emprendimientos' element={<Emprendimientos />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/editProfile' element={<EditProfile />} />
        </Routes>
        </div>
        </>
    );
};

export default AppRoutes;