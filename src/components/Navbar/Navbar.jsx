import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import './navbar.css';
import { img } from "../../utils/fotos";
// import logo from '../../public/logo.png';

function Navbar() {
  const [id, setId] = useState('');
  const navigate = useNavigate();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const showUserConnect = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/restaurant/${id}/details`);
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.setItem("isAuth", false);
    navigate("/login");
  };

  useEffect(() => {
    const path = window.location.pathname;

    if (path === "/login" || path === "/register") {
      const navbar = document.getElementById("searchbar");
      navbar.classList.add("invisible");
    }
  }, []);
  const isAuth = localStorage.getItem("isAuth");

  const toggleMenu = () => {
    const menu = document.getElementById("hamburgue-menu");
    if (menu.classList.contains("invisible")) {
      menu.classList.remove("invisible");
    } else {
      menu.classList.add("invisible");
    }
  }

  const closeMenu = () => {
    const menu = document.getElementById("hamburgue-menu");
    menu.classList.add("invisible");
  }
  const toggleMenu2 = () => {
    const menu = document.getElementById("user-menu");
    menu.classList.toggle("invisible");
  }

  return (
    <nav className="flex flex-row bg-[#50793D] shadow-xl outline-none w-full text-sm text-center items-center p-12 lg:p-7 justify-between fixed top-0 left-0 z-50">
      { }
      <div className="m-2 text-center" onClick={toggleMenu}>
        <IoMdMenu className="text-2xl lg:text-4xl text-[#fff] cursor-pointer" />
      </div>
      <div id="hamburgue-menu" className="flex flex-col absolute left-0 top-[0rem] bg-[#fff] border-[#8f8888] border-r-2 shadow-2xl w-[15rem] h-[100vh] gap-2 text-center lg:w-[20rem]  lg:top-[6.9rem] z-10 invisible">

        <div className="absolute right-0 top-2 pr-2.5 cursor-pointer" onClick={closeMenu}>
          <MdClose className="text-2xl text-[#000]" />
        </div>
        <div className="flex flex-col gap-4 mt-6 mb-4 lg:h-full lg:gap-10">
          <img src={img.logo} className='w-30 mx-auto lg:object-cover lg:w-36 lg:left-10 lg:mx-auto' />
          <div className="gap-10 contenedor-menu text-[#50793D] mx-auto ">
            <div>
              <h3 className="text-2xl lg:text-[2.5rem] font-subtitulo">SECCIONES</h3>
              <div className="separador-login-register" />
              <ul className="flex flex-col gap-10 mt-10 font-semibold text-left font-texto lg:text-lg">
                <li className="flex items-center justify-between cursor-pointer bg-[#50793D] text-[#ffffff] font-normal p-2 rounded-xl"><a href="/restaurants">RESTAURANTS</a> <IoIosArrowForward className="lg:text-lg" /></li>
                <li className="flex items-center justify-between cursor-pointer bg-[#50793D] text-[#ffffff] font-normal p-2 rounded-xl"><a href="/emprendimientos">EMPRENDIMIENTOS</a><IoIosArrowForward className="lg:text-lg" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-titulo text-[#fff]">Foodie</h1>
      <div className="p-1 m-2" onClick={toggleMenu2}>

        <FaUser className='cursor-pointer lg:text-3xl text-[#fff]' />
      </div>
      <div id="user-menu" className={`absolute font-subtitulo right-0 top-[8.5rem] w-28 gap-3 bg-[#fff] flex flex-col p-4 lg:w-52 rounded-sm lg:text-lg font-semibold border-2  cursor-pointer lg:right-[0rem] lg:top-[6.9rem] border-[#000] text-[#000] ${isUserMenuOpen ? '' : 'invisible'}`}>
        {
          isAuth === "true" ? (
            <>
              <button onClick={() => navigate("/profile")}>Profile</button>
              <div className="w-34 bg-[#722620] h-0.5"></div>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <button onClick={() => navigate("/login")}>Login</button>
              <button onClick={() => navigate("/register")}>Register</button>
            </>
          )
        }
      </div>
    </nav>
  );
};

export default Navbar;