import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createComment } from "../../utils/comment";

export const postComment = createAsyncThunk(
    "restaurants/comment",
    async ({ id, description, restaurantId }) => {
        try {
            console.log(id, description, restaurantId);
            const response = await createComment(id, description, restaurantId);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
);

const commentSlice = createSlice({
    name: "comment",
    initialState: {
        comment: [],
        status: null,
    },
    reducers: {
        addComment: (state, { payload }) => {
            state.comment.push(payload);
        },
    },
    extraReducers: (builded) => {
        builded.addCase(postComment.pending, (state, action) => {
            state.status = "loading";
        })
        builded.addCase(postComment.fulfilled, (state, action) => {
            state.status = "success";
            state.comment = action.payload;
        })
    }
});

export default commentSlice.reducer;
