import axios from "axios";
import { useEffect, useState } from "react";

export const ListaOfComents = () => {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/comments/comment"
        );
        setComentarios(response.data.comments);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [comentarios]);
  return (
    <div className="container mt-4 ml-5">
      {comentarios.map((comentario) => (
        <div className="flex flex-col lg:w-full justify-between lg:p-[20px]">
          <div className="w-56 max-w-sm px-2 py-2 mx-2 overflow-hidden rounded shadow-lg">
            <p className="lg:text-[18px] font-semibold text-[#595959]">
              {comentario.description}
            </p>
            <p className="lg:text-[18px] font-semibold text-[#595959]">
              {comentario.restaurantId}
            </p>
                <button className="px-2 text-white bg-red-400 rounded-lg">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};
