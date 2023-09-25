import { configureStore } from "@reduxjs/toolkit";
import favoriteReducers from "../favorites/store/favoritesSlice";
import repasReducer from "../repas/store/repasSlice";

export default configureStore({
    reducer: {
        favorites: favoriteReducers,
        repas: repasReducer,
    },
});