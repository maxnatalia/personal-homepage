import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./common/ThemeSwitcher/themeSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});

export default store;