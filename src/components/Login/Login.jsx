import React from "react";
import { useDispatch } from 'react-redux';
import { login, loginSetData } from '../../features/login/loginSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      console.log("Email y contraseña son requeridos");
      return;
    }
    try {
      const response = await dispatch(login({ email, password }));
      dispatch(loginSetData(response.payload));
      if (login.fulfilled.match(response)) {
        console.log(`Bienvenido ${email}!`);
        navigate('/restaurants');
      }
    } catch (error) {
      console.error("Error inesperado:", error);
    }
  }
  return (
    <div>
      <div className="text-center m-auto lg:bg-[#50793D] lg:mb-0 lg:flex lg:flex-row-reverse lg:w-[80rem] lg:rounded-full">
        <div className="lg:w-full lg:flex lg:flex-col lg:justify-center lg:ml-40">
          <h1 className="text-[3rem] text-[#50793D] lg:text-[#fff] font-extrabold font-titulo mb-4 lg:flex">FOODIE</h1>
          <h3 className="hidden lg:font-texto text-[#fff] lg:flex lg:text-2xl lg:font-semibold lg:w-[80%] lg:text-left">¡Bienvenido de vuelta! No nos digas... estás buscando un buen lugar para comer. ¡Entrá que se te hace tarde!</h3>
        </div>
        <div className="bg-[#50793D] flex flex-col items-center p-6 rounded-md h-auto gap-4 lg:p-10">
          <p className=" text-[#ffffff] font-texto">INICIAR SESIÓN</p>
          <input
            className="border border-[#fff] p-1.5 pl-3 rounded-sm lg:p-2 lg:pl-4 lg:w-96 "
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border p-1.5 pl-3 rounded-sm border-[#fff]  lg:p-2 lg:pl-4 lg:w-96"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' onClick={handleLogin} className="bg-[#fff] pl-[2.7rem] pr-[2.7rem] pt-2 pb-2 rounded-sm text-[#50793D] font-texto lg:p-2 lg:pl-4 lg:w-96">INICIAR SESION</button>
          <div className="flex flex-col">
            <p className="text-[#fff]  font-texto">¿No tienes cuenta?</p>
            <button
              className="text-[#fff] underline underline-offset-2"
              onClick={() => navigate("/register")}>Registrarse</button>
          </div>
        </div>
      </div>
      <button
        className="mt-4 w-64 py-2 rounded-md lg:w-60 bg-[#50793D] lg:mt-2 lg:h-20 text-xl font-titulo lg:rounded-xl text-[#fff] hover:bg-[#334e27]"
        onClick={() => navigate("/restaurants")}
        >Ingresar como invitado</button>
    </div>

  )
}

export default Login;