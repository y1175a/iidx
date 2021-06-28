import { call, put, takeLatest } from 'redux-saga/effects';
import { loadingActions } from '../reducers/loading';
import { authActions } from '../reducers/auth';
import * as authAPI from '../api/auth';

const { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE,
    LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE } = authActions;

const { START_LOADING, FINISH_LOADING } = loadingActions;

function* loginSaga(action) {
    yield put(START_LOADING());
    try {
        const res = yield call(authAPI.login, action);
        yield put(LOGIN_SUCCESS(res));
    } catch (err) {
        yield put(LOGIN_FAILURE(err));
    }
    yield put(FINISH_LOADING());
}

function* logoutSaga(action) {
    yield put(START_LOADING());
    try {
        const res = yield call(authAPI.logout, action);
        yield put(LOGOUT_SUCCESS(res));
    } catch (err) {
        console.log(err);
        yield put(LOGOUT_FAILURE(err));
    }
    yield put(FINISH_LOADING());
}

export default function* authSaga() {
    yield takeLatest(LOGIN, loginSaga);
    yield takeLatest(LOGOUT, logoutSaga);
}



