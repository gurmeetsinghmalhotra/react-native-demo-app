import { takeEvery, put, call } from 'redux-saga/effects';
import { USER_FETCH_REQUESTED, USER_FETCH_REQUEST_SENT, USER_FETCH_RECEIVED } from './../ActionTypes';

export function fetchUsersApi() {
    return fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(json => json)
}

function* fetchUser() {
    yield put({ type: USER_FETCH_REQUEST_SENT })
    const users = yield call(fetchUsersApi)
    yield put({ type: USER_FETCH_RECEIVED, users: users })
}

function* rootSaga() {
    yield takeEvery(USER_FETCH_REQUESTED, fetchUser);
}

export default rootSaga;