import axios from 'axios'

export const getRestaurantById = async ({id}) => await axios.get(`http://localhost:3000/api/restaurants/${id}`);
export const getTopRestaurants = async () => await axios.get('http://localhost:3000/api/restaurants/');
export const getRestaurantByCategory = async (category) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/restaurants/category/${category}`, {
            data: { category},
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};