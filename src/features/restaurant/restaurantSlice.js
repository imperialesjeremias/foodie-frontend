import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getRestaurantById, getTopRestaurants, getRestaurantByCategory } from '../../utils/restaurants';
import { createSelector } from 'reselect';

export const fetchRestaurantById = createAsyncThunk(
    'restaurants/fetchById',
    async (id) => {
        const response = await getRestaurantById(id);
        return response.data;
    }
);
export const fetchTopRest = createAsyncThunk(
    'restaurants/bestRest',
    async () => {
        const response = await getTopRestaurants();
        return response.data;
    }
)

export const fetchByCategories = createAsyncThunk(
    'restaurants/category',
    async (category) => {
        try {
            const response = await getRestaurantByCategory(category);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
)

const restaurantSlice = createSlice({
    name: 'restaurants',
    initialState: {
        topRest: [],
    },
    reducers: {
             setRestaurant: (state, action) => {
            return {
                ...state,
                restaurant: action.payload
            }
        },
    },
    extraReducers: (builded) => {
        builded.addCase(fetchRestaurantById.fulfilled, (state, action) => {
            return { ...state, restaurant: action.payload };
        });
        builded.addCase(fetchTopRest.fulfilled, (state, action) => {
            return { ...state, topRest: action.payload };
        });
        builded.addCase(fetchByCategories.fulfilled, (state, action) => {
            return { ...state, restByCategory: action.payload };
        })
    }
});

export const { setRestaurant, isPending, isError } = restaurantSlice.actions;
export default restaurantSlice.reducer;

export const selectRestaurantById = createSelector(
    (state) => state.restaurants,
    (restaurants) => restaurants.restaurant
)

export const selectRest = createSelector(
    (state) => state.restaurants,
    (restaurants) => restaurants.topRest.data
)

export const selectRestByCategory = createSelector(
    (state) => state.restaurants,
    (restaurants) => restaurants.restByCategory
)