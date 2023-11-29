import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPlatos } from "../../utils/platos";
import { createSelector } from "reselect";

export const fetchPlatos = createAsyncThunk(
  "platos/fetchPlatos",
  async ({restaurantId}) => {
    try {
      const response = await getPlatos({ restaurantId });
      console.log("response", response.data.data.platos);
      return response.data.data.platos;
    } catch (error) {
      // En caso de error, puedes devolver el error usando rejectWithValue
      throw error;
    }
  }
);

export const fetchPlatoById = createAsyncThunk(
  "platos/fetchPlatoById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getPlatos(id);
      return response.data;
    } catch (error) {
      // En caso de error, puedes devolver el error usando rejectWithValue
      throw error;
    }
  }
);

const platosSlice = createSlice({
  name: "platos",
  initialState: {
    platos: [],
    platoById: null,
    error: null, // Nuevo campo para manejar errores
  },
  reducers: {
    setPlatos: (state, action) => {
      return {
        ...state,
        platos: action.payload,
        error: null, // Limpiamos el campo de error cuando se actualizan los platos exitosamente
      };
    },
    setError: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlatos.fulfilled, (state, action) => {
      return { ...state, platos: action.payload, error: null };
    });
    builder.addCase(fetchPlatos.rejected, (state, action) => {
      return { ...state, error: action.error.message };
    });
    builder.addCase(fetchPlatoById.fulfilled, (state, action) => {
      return { ...state, platoById: action.payload, error: null };
    });
    builder.addCase(fetchPlatoById.rejected, (state, action) => {
      return { ...state, error: action.error.message };
    });
  },
});

export const { setPlatos, setError } = platosSlice.actions;
export default platosSlice.reducer;

export const selectPlatos = (state) => state.platos;
export const selectPlatoById = (state) => state.platos.platoById;
export const selectError = (state) => state.platos.error;
