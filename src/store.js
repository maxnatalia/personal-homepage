import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import themeReducer from "./common/ThemeSwitcher/themeSlice";
import rootSaga from "./rootSaga";
import gitHubReducer from "./features/PersonalHomepage/gitHubSlice";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        theme: themeReducer,
        gitHub: gitHubReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;