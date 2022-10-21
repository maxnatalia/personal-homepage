import { call, takeEvery, select } from "redux-saga/effects";
import { saveThemeInLocalStorage } from "./themeInLocalStorage";
import { selectDarkTheme } from "./themeSlice";

function* saveThemeInLocalStorageHandler() {
    const darkTheme = yield select(selectDarkTheme);
    yield call(saveThemeInLocalStorage, darkTheme);
}

export default function* themeSaga() {
    yield takeEvery("*", saveThemeInLocalStorageHandler);
}