import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRating, postRating, selectRating } from "../../features/rating/ratingSlice";
import RatingComponent from "../../components/RatingC/Rating";
import { useParams } from "react-router-dom";
import { fetchRestaurantById, selectRestaurantById } from "../../features/restaurant/restaurantSlice";
import RestaurantPlatos from "../../components/Platos/RestaurantPlatos";
import { Comentarios } from "../../components/comentarios/Comentarios";
import { ListaOfComents } from "../../components/comentarios/ListaOfComents";
import { description } from "../../utils/descriptions";
import { TfiLocationPin } from "react-icons/tfi";
import { MdAccessTime, MdOutlineStar } from "react-icons/md";
import Navbar from "../../components/Navbar/Navbar";

function RestaurantDetail() {
    const dispatch = useDispatch();
    const restaurantId = useParams().id;
    const [averageRating, setAverageRating] = useState(null);
    const [restaurantInfo, setRestaurantInfo] = useState(null);

    // Obtener puntuaciones del restaurante y promedio al cargar la página
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await dispatch(fetchRating({ id: restaurantId }));
                const response2 = await dispatch(fetchRestaurantById({ id: restaurantId }));

                setRestaurantInfo({
                    name: response2.payload.data.name,
                    address: response2.payload.data.address,
                    schedule: response2.payload.data.schedule,
                });
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [dispatch, restaurantId]);

    // Selector para acceder a las puntuaciones
    // const ratings = useSelector(selectRating);
    // selector para acceder al restaurante
    const restaurant = useSelector(selectRestaurantById);

    // Función para enviar una nueva puntuación
    const handleAddRating = (rating) => {
        dispatch(postRating({ id: restaurantId, rating }));
    };

    return (
        <div>
            <Navbar />
            <div className="absolute left-0 flex flex-col top-28 lg:flex-row lg:w-full lg:top-24">
                {/* Detalles del restaurante */}
                <div className="flex flex-col lg:w-1/3 bg-[#fff] border-r-2 border-[#50793D] lg:fixed lg:h-full">
                    {restaurantInfo && (
                        <div>
                            <img className="w-full h-[200px] object-cover lg:w-full lg:h-[20rem]" src={description.imagen[restaurantInfo.name]} alt="Imagen del restaurante" />
                            <h2 className="lg:text-2xl lg:pl-3 lg:text-left text-xl text-center my-2 text-[#50793D] font-subtitulo">{restaurantInfo.name}</h2>
                            <div className="flex flex-col flex-wrap lg:flex-row lg:items-center lg:justify-between lg:mt-4 lg:gap-4 font-texto">
                                <div className="flex items-center pl-2 font-semibold lg:font-normal">
                                    <TfiLocationPin className="text-[#50793D] text-xl" />
                                    <p className="lg:text-[18px] text-sm pl-1  text-[#50793D]">{restaurantInfo.address}</p>
                                </div>
                                <div className="flex items-center pl-2 mt-2 font-semibold lg:mt-0 lg:pr-2 lg:font-normal font-texto">
                                    <MdAccessTime className="text-[#50793D] text-xl" />
                                    <p className="lg:text-[18px] text-sm pl-1 text-[#50793D]">{restaurantInfo.schedule}</p>
                                </div>
                            </div>



                        </div>
                    )}

                    <div className="lg:text-[18px] mt-5 ml-2 font-texto text-[#50793D] lg:bg-[#50793D] lg:rounded-xl lg:mx-2 lg:pl-2 lg:flex lg:justify-between lg">
                        <div className="flex items-center lg:text-[#fff]">
                            <p>Valoración Promedio: {averageRating}</p>
                            <MdOutlineStar className="text-[#e9e634cc] ml-2" />
                        </div>
                        <RatingComponent onAddRating={handleAddRating} />
                    </div>
                    <div className="px-2 mt-4 lg:px-2">
                        <Comentarios />
                        <ListaOfComents />
                    </div>
                </div>

                {/* Menú del restaurante */}
                <div className="flex flex-col lg:w-2/3 font-texto lg:pl-[40rem] ">
                    <div className="bg-[#fff] p-3">
                        {restaurantInfo && (
                            <div className="pb-2 mt-2 border-b border-[#4d433d]">
                                <h1 className="lg:text-[30px] font-subtitulo pl-2 text-xl  text-[#50793D]">{restaurantInfo.name} - Menú</h1>
                            </div>
                        )}
                    </div>
                    <RestaurantPlatos/>
                </div>


            </div>
        </div>
    );
}

export default RestaurantDetail;
