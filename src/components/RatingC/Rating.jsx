import React from "react";
import { useState } from "react";
import { postRating } from "../../utils/rating";



const RatingComponent = ({ onAddRating }) => {
    const [rating, setRating] = useState(0);
    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };
    const handleRateRestaurant = async () => {
        const id = localStorage.getItem('userId');
        const restaurantId = window.location.pathname.split('/')[2];
        try {
            console.log({ id, restaurantId, rating });
            const response = await postRating({ id, restaurantId, rating });
            if (response.status === 201) {
                console.log(response);
                onAddRating(rating);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="font-normal w-44 rounded-md text-[#fff] lg:mr-2 bg-[#50793D] lg:rounded-md lg:mt-0  ">
            <div className="flex justify-around mt-2 w-44">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        onClick={() => handleRatingChange(star)}
                        style={{ cursor: 'pointer' }}
                        className="text-[#fff] font-bold p-1 lg:hover:text-[#d6d0d0cc]"
                    >
                        {star}
                    </span>
                ))}
            </div>
            <button className="px-2 py-1 mt-2 w-44 rounded-lg font-semibold text-sm lg:bg-transparent lg:rounded-none lg:hover:text-[#d6d0d0cc]" onClick={handleRateRestaurant}>Puntuar</button>
        </div>
    )
};

export default RatingComponent;