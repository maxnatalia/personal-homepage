import { all } from "redux-saga/effects";
import gitHubSaga from "./features/PersonalHomepage/gitHubSaga";
import themeSaga from "./common/ThemeSwitcher/themeSaga";

export default function* rootSaga() {
    yield all([
        gitHubSaga(),
        themeSaga(),
    ]);
}