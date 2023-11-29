import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginJWT } from "../../utils/auth";
import { getDataUser, user } from "../../utils/user";

export const login = createAsyncThunk('u/login', async ({ email, password }) => {      // creamos el thunk para el login q recibe el email y el password y hace la llamada a la api
    try {
        const response = await loginJWT({ email, password });                          // llamamos a la funcion loginJWT q esta en utils/auth y le pasamos el email y el password
        return response.data;                                                          // devolvemos la data q nos devuelve la api
    } catch (error) {
        throw error;
    }
});

export const RequestEditUser = createAsyncThunk(
    'u/edit',
    async ({ email, password, firstName, lastName }) => {
        try {
            const response = await user({ email, password, firstName, lastName });
            return response.data;
        } catch (error) {
            throw error;
        }
    });

export const requestUserData = createAsyncThunk(
    'u/getUserData',
    async (email) => {
        try {
            const response = await getDataUser({ email });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
)

const loginSlice = createSlice({                                                        // creamos el slice para el login
    name: 'login',                                                                      // le ponemos el nombre
    initialState: {                                                                     // le ponemos el estado inicial
        email: '',
        token: null,
        isAuth: localStorage.getItem('isAuth') === 'true' ? true : false,
        userId: null,
        error: null,
        userData: {}
    },
    reducers: {                                                                         // creamos los reducers que son las funciones que modifican el estado
        loginSetData: (state, action) => {                                                     // seteamos los datos
            console.log(action.payload.data)
            state.email = action.payload.data.email;
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token);
            state.isAuth = true;
            state.error = null;
            localStorage.setItem('isAuth', true);
            state.userId = action.payload.data.id;
            localStorage.setItem('userId', action.payload.data.id);
            state.userData = action.payload.data;
        },
        logout: (state) => {                                                            // borramos los datos
            state.email = null;
            state.token = null;
            state.isAuth = false;
            state.error = null;
            localStorage.removeItem('isAuth');
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            state.userId = null;
            state.userData = {};
        }
    },
    extraReducers: (builder) => {                                                       // creamos los reducers extra que son los que se ejecutan cuando se llama a un thunk
        builder
            .addCase(login.fulfilled, (state, action) => {                                  // si el thunk se ejecuta correctamente
                return {
                    ...state,                                                               // se devuelve el estado con los datos
                    email: action.payload.email,
                    token: action.payload.token,
                    isAuth: true,
                }
            })
            .addCase(login.rejected, (state, action) => {                                   // si el thunk falla
                return {
                    ...state,
                    error: action.error.message
                }
            })
            .addCase(RequestEditUser.fulfilled, (state, action) => {
                return {
                    ...state,
                    email: action.payload.email,
                    token: action.payload.token,
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    error: null
                }
            })
            .addCase(RequestEditUser.rejected, (state, action) => {
                return {
                    ...state,
                    isEdited: true,
                    error: action.error.message
                }
            })
            .addCase(requestUserData.fulfilled, (state, action) => {
                state.userData = action.payload;
            })
    },
});

export const { logout, loginSetData } = loginSlice.actions;
export const selectEmail = (state) => state.login.email;
export const selectUserData = (state) => state.login.userData; // Selector para obtener los datos del usuario
export default loginSlice.reducer;