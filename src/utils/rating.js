import axios from 'axios';

export const getRating = async (id) => await axios.get(`http://localhost:3000/api/restaurants/${id}/ratings`);
export const postRating = async ({ id, restaurantId, rating }) => axios.post(`http://localhost:3000/api/restaurants/${restaurantId}/rating`, {id, restaurantId, rating});  