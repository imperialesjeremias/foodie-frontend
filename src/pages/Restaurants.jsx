import Category from "../components/category/Category";
import { useState, useEffect } from 'react';
import { fetchByCategories, selectRestByCategory } from "../features/restaurant/restaurantSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { description } from "../utils/descriptions";
import './restaurants.css';

function Restaurants() {
  const [selectedCategory, setSelectedCategory] = useState('Hamburguesa');
  const [mostrarTexto, setMostrarTexto] = useState(null)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(fetchByCategories(selectedCategory));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [dispatch, fetchByCategories, selectedCategory]);

  const handleCategory = (category) => {
    setSelectedCategory(category);
    setMostrarTexto(true)
  }
  const handleRestaurant = (id) => {
    navigate(`/restaurant/${id}/details`);
  }

  const restaurants = useSelector(selectRestByCategory)

  return (
    <>
      <Category onSelect={handleCategory} />
      <div className="bg-[#fff] pb-4 m-auto flex flex-wrap gap-10 pt-20 absolute top-[60rem] w-[100vw] left-0 lg:left:0 lg:top-[30rem]  justify-center">
        <h1 className={`text-2xl font-titulo text-[#50793D] ${mostrarTexto ? 'flex' : 'hidden'} lg:w-[100%] lg:justify-center`}>Resultados:</h1>
        <div className="flex flex-wrap gap-20 justify-center lg:w-[100%] lg:justify-center">
          {restaurants &&
            restaurants.map((restaurant) => (
              <div key={restaurant.id} onClick={() => handleRestaurant(restaurant.id)} style={{ cursor: 'pointer' }}>
                <div className="lg:w-96 w-80"> {/* Establecer una altura fija para la tarjeta */}
                  <div class="lg:max-w-sm lg:h-96 lg:rounded-xl rounded overflow-hidden shadow-lg bg-[#50793D] text-[#fff]">
                    <img
                      class="lg:w-full lg:h-52 lg:object-cover w-80 h-52 object-cover" // Establecer un tamaño fijo para la imagen
                      src={description.imagen[restaurant.name]}
                      alt="Sunset in the mountains"
                    />
                    <div class="lg:px-6 lg:py-4 py-2 flex flex-col flex-wrap px-3">
                      <div class="text-xl mb-2 text-center font-subtitulo lg:text-left">{restaurant.name}</div>
                      <p class="text-[#fff] font-texto">
                        {description.name[restaurant.name]}
                      </p>
                    </div>
                    <div class="px-6 pt-2 pb-6 lg:pb-12 lg:mb-4">
                      <div>
                        <button className="w-full text-[#fff] border border-[#fff] bg-[#50793D] rounded-md cursor-pointer btn hover:text-white font-texto">
                          Ver más
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>



      </div>
    </>
  );
}

export default Restaurants;
