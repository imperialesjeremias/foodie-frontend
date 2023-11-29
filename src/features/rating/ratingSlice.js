import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getRating } from '../../utils/rating';

export const fetchRating = createAsyncThunk(
    '/:id/ratings', async ({ id }) => {
        try {
            const response = await getRating(id);
            return response.data;
        } catch (error) {
            throw error;
        }
});
export const postRating = createAsyncThunk(
    '/:id/rating', async ({ id, restaurantId, rating }) => {
        try {
            const response = await postRating(id, restaurantId, rating);
            return response.data;
        } catch (error) {
            throw error;
        }
});
const ratingSlice = createSlice({
    name: 'rating',
    initialState: {
        rating: [],
        averageRating: 0,
        status: null,
        error: null,
    },
    reducers: {
        addRating: (state, { payload}) => {
            console.log(payload)
            state.rating.push(payload); 
        },
        
    },
    extraReducers: (builder) => [
        builder
        .addCase(fetchRating.fulfilled, (state, { payload }) => {
            state.status = 'success';
        })
        .addCase(fetchRating.rejected, (state, { error }) => {
            state.status = 'failed';
            state.error = error.message;
        })
    ],
});

export default ratingSlice.reducer;
export const { addRating, updateRate, deleteRate } = ratingSlice.actions;
export const selectRating = (state) => state.rating;