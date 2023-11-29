import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RequestEditUser } from "../../features/login/loginSlice";
import { selectEmail } from "../../features/login/loginSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

function EditProfile() {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const email = useSelector(selectEmail);
    const navigate = useNavigate();

    async function handleForm(e) {
        e.preventDefault();
        console.log(email, firstName, lastName, password);
        dispatch(RequestEditUser({ email, firstName, lastName, password }))
        navigate('/profile');
    }

    return (
        <div>
            <Navbar />
            <div className="lg:mt-[17rem] pb-10 h-full mt-[33rem] bg-[#fff] lg:w-[100vw] lg:flex lg:flex-col lg:items-center">
                <h1 className="text-xl px-2 lg:text-4xl font-titulo text-[#50793D] mb-4">Chicos, dejen los mates... sale una nueva credencial sin gluten!</h1>
                <form className="flex flex-col gap-8 px-2 lg:px-0 lg:gap-6 lg:text-xl font-texto items-start lg:w-[50%]">
                    <div className="lg:flex flex flex-col text-lg  text-[#50793D]">
                        <label for="name" className="">Nuevo nombre de usuario:</label>
                        <input className="lg:ml-2 w-80 text-[#fff] bg-[#807b7b] rounded-lg pl-2 " name="name" id="name" type="text" placeholder="Ingrese aquí su nuevo usuario" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="lg:flex flex flex-col text-lg  text-[#50793D]">
                        <label for="lastName">Confirme su email:</label>
                        <input className="lg:ml-2 w-80 text-[#fff] bg-[#807b7b] rounded-lg pl-2" type="text" placeholder="Ingrese aquí su email" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="lg:flex flex flex-col text-lg  text-[#50793D]">
                        <label for="password">Nueva contraseña:</label>
                        <input className="lg:ml-2 w-80 text-[#fff] bg-[#807b7b] rounded-lg pl-2" type="password" placeholder="Ingrese aquí su nueva contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>


                    <button className="p-2 rounded-xl text-[#fff] bg-[#50793D]" type="submit" onClick={
                        (e) => handleForm(e)
                    }>Guardar cambios</button>
                </form>

                <div class="max-w-xs mx-auto mt-20 lg:flex lg:max-w-none lg:items-center lg:justify-center border border-[#50793D] rounded-lg">
                    <div class="bg-white shadow-xl rounded-lg py-3 lg:w-[50rem] lg:flex lg:flex-col">
                        <div class="p-2 bg-[#50793D]">
                            <img class="w-32 h-32 rounded-full mx-auto" src="https://cdn.vectorstock.com/i/preview-1x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg" alt="" />
                        </div>
                        <div class="p-2">
                            <h3 class="text-center text-xl font-subtitulo text-[#000] leading-8 lg:text-3xl">Alo! {firstName}</h3>
                            <div class="text-center  text-xs  font-texto lg:mt-2 lg:text-lg bg-[#50793D] rounded-lg text-[#fff] py-2">
                                <p>Foode indeciso</p>
                            </div>
                            <table class="text-xs my-3 lg:text-lg font-texto">
                                <tbody><tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">Tu nueva identidad será:</td>
                                    <td class="px-2 py-2">{firstName}</td>
                                </tr>
                                    <tr>
                                        <td class="px-2 py-2 text-gray-500 font-semibold">Nueva contraseña:</td>
                                        <td class="px-2 py-2">Esperemos que no sea 123...</td>
                                    </tr>
                                    <tr>
                                        <td class="px-2 py-2 text-gray-500 font-semibold">Email:</td>
                                        <td class="px-2 py-2">{email}</td>
                                    </tr>
                                </tbody></table>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default EditProfile;