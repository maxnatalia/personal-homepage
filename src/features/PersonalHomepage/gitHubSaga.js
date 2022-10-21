import { fetchRepositories, fetchRepositoriesError, fetchRepositoriesSuccess } from "./gitHubSlice";
import { takeLatest, delay, put, call } from "redux-saga/effects";
import { getApiData } from "./getApiData";
import { apiLink } from "./apiLink";

const loadingDelay = 2000;

function* fetchRepositoriesHandler() {
    try {
        yield delay(loadingDelay); // just to demo the loading
        const repositories = yield call(getApiData, apiLink);
        yield put(fetchRepositoriesSuccess(repositories));
    } catch (error) {
        yield put(fetchRepositoriesError());
    }
}

export default function* gitHubSaga() {
    yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}
