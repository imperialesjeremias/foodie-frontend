import React, { useState, useEffect } from "react";
import { fetchPlatos } from "../../features/platos/platosSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

const RestaurantPlatos = () => {
  const [platos, setPlatos] = useState([]);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  // Usar useParams para obtener el id de la URL
  const { id: restaurantId } = useParams();

  const fetchData = async () => {
    try {
      const response = await dispatch(fetchPlatos({ restaurantId }));
      // Si estás utilizando Redux, asume que response.data tiene la estructura adecuada
      console.log("platos", response.data.data);
      setPlatos(response.data.data.platos);
      setError(null); // Reinicia el estado de error si la solicitud es exitosa
    } catch (error) {
      // Si hay un error en la solicitud de Redux, maneja el error aquí
      setError(error.message);
    }

    // Manejo de la solicitud directa con Axios
    try {
      const axiosResponse = await axios.get(`http://localhost:3000/api/restaurants/${restaurantId}/platos`);
      console.log("platos", axiosResponse.data.data);
      setPlatos(axiosResponse.data.data.platos);
      setError(null); // Reinicia el estado de error si la solicitud es exitosa
    } catch (axiosError) {
      // Si hay un error en la solicitud con Axios, maneja el error aquí
      setError(axiosError.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [restaurantId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="h-full lg:left-[0rem] lg:w-[100%] lg:relative p-4 bg-[#fff]">
      <h2 className="pb-6 font-semibold text-[#50793D] lg:text-2xl">Platos del restaurante</h2>
      <div className="flex flex-col lg:bg-[#fff] lg:w-[100vw] lg:gap-10">
        {platos.length === 0 ? (
          <div>
          <h3 className="text-4xl lg:w-[45rem] font-titulo text-[#000]">Foodie... tenemos un problema</h3>
          <p className="text-2xl lg:w-[45rem] font-subtitulo text-[#7c7979] mt-6">
            Tratamos de convencer a los chefs de ser Foodies pero dijeron que están muy ocupados cocinando. La próxima vez que vengas, ¡seguro que tendrán algo para vos!
          </p>

          </div>
        ) : (
          platos.map((plato) => (
            <div key={plato.id} className="flex flex-col gap-4 p-6 mb-4 bg-[#50793D] rounded-md cursor-pointer lg:rounded-3xl lg:w-[75rem] ">
              <h3 className="text-[#fff] font-subtitulo">{plato.name}</h3>
              <p className="text-[#ffffffa1] font-semibold">{plato.description}</p>
              <p className="text-[#ffffffa1] font-semibold">${plato.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RestaurantPlatos;
