import { configureStore } from "@reduxjs/toolkit";
import homeReducer from '../Actions/homeSlice';
import favortiesReducer from '../Actions/favoritesSlice';
import appReducer from '../Actions/appSlice';

export default configureStore({
    reducer: {
       home: homeReducer,
       favorites: favortiesReducer,
       app: appReducer,
    },
});