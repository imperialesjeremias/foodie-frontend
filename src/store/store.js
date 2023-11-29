import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from '../features/restaurant/restaurantSlice';
import loginReducer from '../features/login/loginSlice';
import registerReducer from '../features/register/RegisterSlice';
import ratingsReducer from '../features/rating/ratingSlice';
import commentReducer from '../features/commet/comment';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';

// config de persistencia
const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = {
    restaurants: restaurantReducer,
    login: loginReducer,
    register: registerReducer,
    ratings: ratingsReducer,
    comment: commentReducer,
};

const combinedReducer = combineReducers(rootReducer);

const persistedReducer = persistReducer(persistConfig, combinedReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // para que no de error con el persist
        })
});

export const persistor = persistStore(store);
