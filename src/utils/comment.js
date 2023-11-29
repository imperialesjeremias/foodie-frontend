import axios from 'axios';

export const createComment = async ({id, description, restaurantId}) => axios.post('http://localhost:3000/api/restaurants/comment', { 
    id,
    description,
    restaurantId,
})