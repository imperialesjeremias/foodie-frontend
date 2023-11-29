import { Link } from 'react-router-dom';
// recordar el email con useMemo
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestUserData, selectEmail, selectUserData } from '../../features/login/loginSlice';
import Navbar from '../../components/Navbar/Navbar';

function Profile() {
    const userData = useSelector(selectUserData);

    const jerarquia = ['Foodie Aventurero', 'Foodie Legendaro', 'Foodie Melómano', 'Foodie Explorador', 'Foodie Feliz :D', 'Foodie Cinéfilo', 'Foodie Hambriento *privilegiado ;)*', 'Foodie Gourmet', 'Foodie Team Pastas', 'Foodie Team Verano', 'Foodie Fan de Harry Potter']

    console.log(userData);
    return (
        <div>
            <Navbar />


            <div class="max-w-xs mt-20 lg:max-w-none lg:items-center lg:justify-center shadow-2xl border border-[#50793D] rounded-md">
                <div class="bg-white shadow-xl rounded-lg py-3 lg:w-[50rem] lg:flex lg:flex-col">
                    <div class="p-2 bg-[#50793D]">
                        <img class="w-32 h-32 rounded-full mx-auto" src="https://cdn.vectorstock.com/i/preview-1x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg" alt="John Doe" />
                    </div>
                    <div class="p-2">
                        <h3 class="text-center text-xl font-subtitulo text-[#000] leading-8 lg:text-3xl">{userData.firstName}</h3>
                        <div class="text-center  text-xs  font-texto lg:mt-2 lg:text-lg bg-[#50793D] rounded-lg text-[#fff] py-2">
                            <p>
                            {/* A continuación quiero una función que genere aleatoriamente la categoría del tipo de foodie del objeto jerarquia declarado anteriormente */}
                                {
                                    jerarquia[Math.floor(Math.random() * jerarquia.length)]
                                }
                            </p>
                        </div>
                        <table class="text-xs my-3 lg:text-lg font-texto">
                            <tbody><tr>
                                <td class="px-2 py-2 text-gray-500 font-semibold">Usuario:</td>
                                <td class="px-2 py-2 ">{userData.firstName}</td>
                            </tr>
                                <tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">DNFoodie:</td>
                                    <td class="px-2 py-2">{userData.id}</td>
                                </tr>
                                <tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">Email:</td>
                                    <td class="px-2 py-2">{userData.email}</td>
                                </tr>
                            </tbody></table>

                        <div class="text-center my-3 bg-[#50793D] rounded-lg lg:py-2 font-texto text-[#fff] text-xs lg:text-xl">
                            <Link to='/editProfile'>Editar Perfil</Link>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Profile;