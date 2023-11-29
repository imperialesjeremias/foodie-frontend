import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../features/register/RegisterSlice';
import { useState } from 'react';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleRegister(e) {
        e.preventDefault();
        if (!email || !password) {
            console.log("Email y contraseña son requeridos");
            return;
        }
        try {
            const response = await dispatch(register({ email, password }));
            if (register.fulfilled.match(response)) {
                console.log(`Has sido registrado ${email}, ${password}!`);
                navigate(`/login`);
            }
        } catch (error) {
            console.error("Error inesperado:", error);
        }
    }

    return (
        <div className=''>

            <div className="text-center m-auto lg:bg-[#50793D] lg:mb-0 lg:flex lg:w-[80rem] lg:rounded-full lg:pl-24">
                <div className='lg:w-full lg:flex lg:flex-col lg:justify-center'>
                    <h1 className="text-[3rem] text-[#50793D] lg:text-[#fff] font-extrabold font-titulo mb-4 lg:flex">FOODIE</h1>
                    <h3 className="hidden lg:font-texto text-[#fff] lg:flex lg:text-2xl lg:font-semibold lg:w-[80%] lg:text-left">¡Bienvenido a Foodie, somos más que una aplicación, somos comunidad. Registrate para ser parte de la familia más grande de amantes de la comida!</h3>
                </div>
                <div className="bg-[#50793D] flex flex-col items-center p-6 rounded-md h-auto gap-4 lg:p-10">
                    <p className='text-[#ffffff] font-texto'>Registrarse</p>
                    <input
                        className="border border-gray-300 p-1.5 pl-3 rounded-sm lg:p-2 lg:pl-4 lg:w-96"
                        type="text"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="border border-gray-300 p-1.5 pl-3 rounded-sm lg:p-2 lg:pl-4 lg:w-96"
                        type="password"
                        placeholder='Contraseña'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className="bg-[#fff] pl-[2.7rem] pr-[2.7rem] pt-2 pb-2 rounded-sm text-[#50793D] font-texto lg:p-2 lg:pl-4 lg:w-96"
                        type='submit'
                        onClick={handleRegister}
                    >
                        REGISTRARSE
                    </button>
                    <div>
                        <p className='text-[#fff] font-texto'>¿Ya tienes cuenta?</p>
                        <button
                            className="text-[#fff] underline underline-offset-2"
                            onClick={() => navigate("/login")}
                        >
                            Inicia sesión
                        </button>
                    </div>
                </div>
            </div>
            <div className='lg:w-full lg:flex lg:justify-end'>

                <button
                    className="mt-4 w-64 py-2 rounded-md  bg-[#50793D] lg:mt-2 lg:h-20 text-xl font-titulo lg:rounded-xl text-[#fff] hover:bg-[#334e27]"
                    onClick={() => navigate("/restaurants")}
                >Ingresar como invitado</button>
            </div>

        </div>
    );
}

export default Register;