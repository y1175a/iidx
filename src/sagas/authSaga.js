import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE,
    LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE } from '../reducers/auth';
import * as authAPI from '../api/auth';

function* loginSaga(action) {
    try {
        const res = yield call(authAPI.login, action);
        yield put(LOGIN_SUCCESS(res));
    } catch (err) {
        yield put(LOGIN_FAILURE(err));
    }
}

function* logoutSaga(action) {
    try {
        const res = yield call(authAPI.logout, action);
        yield put(LOGOUT_SUCCESS(res));
    } catch (err) {
        console.log(err);
        yield put(LOGOUT_FAILURE(err));
    }
}

export default function* authSaga() {
    yield takeLatest(LOGIN, loginSaga);
    yield takeLatest(LOGOUT, logoutSaga);
}



