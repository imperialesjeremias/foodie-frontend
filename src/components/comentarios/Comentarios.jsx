import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { postComment } from "../../features/commet/comment";

export const Comentarios = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [description, setData] = React.useState("");
  const [showMessage, setShowMessage] = React.useState(false);


  const handleCommentChange = (e) => {
    setData(e);
  };

  const handlePostComment = async () => {
    const restaurantId = window.location.pathname.split("/")[2];
    const id = localStorage.getItem('userId');
    try {
      const response = await dispatch(postComment({ id, description, restaurantId }));
      if (response.status === 201) {
        console.log(response);
        navigate(`/restaurants/${restaurantId}/details`);

        setShowMessage(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-34">
      <button
        className="px-4 py-1 mt-2 text-[#fff] bg-[#50793D] border-none rounded-lg cursor-pointer btn hover:text-white lg:w-full"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Escribir una reseña
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold"></h3>
          <div className="flex modal-action">
            <div className="flex">
              <div className="">
                <form method="dialog">
                  <textarea
                    className="bg-transparent textarea"
                    placeholder="Deje un comentario"
                    onChange={(e) => handleCommentChange(e.target.value)}
                  ></textarea>
                  <button className="mx-2 rounded-r-full btn"
                    onClick={()=> {handlePostComment; setShowMessage(true)}}>Enviar</button>
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </dialog>
      <div className="h-full flex items-center">

        <h1 className={`lg:text-2xl my-4 rounded-lg  text-center p-2 font-bold lg:text-center lg:mt-10 text-[#50793D] ${showMessage ? 'flex' : 'hidden' }`}>¡Muchas gracias! Su comentario se envió al buzón y está aguardando aprobación. Mientras tanto, no se te anotoja algo..?</h1>
      </div>
    </div>
  );
};
