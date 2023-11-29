import axios from 'axios';

export const getPlatos = async ( { restaurantId }) => await axios.get(`http://localhost:3000/api/restaurants/${restaurantId}/platos`)


