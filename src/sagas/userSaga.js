import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { loadingActions } from '../reducers/loading';
import { userActions } from '../reducers/user';
import * as userAPI from '../api/users';

const { GET_USER, GET_USER_SUCCESS, GET_USER_FAILURE } = userActions;

const { START_LOADING, FINISH_LOADING } = loadingActions;

function* getUserSaga(action) {
    yield put(START_LOADING());
    try {
        const res = yield call(userAPI.getUser, action);
        yield put(GET_USER_SUCCESS(res.data));
    } catch (err) {
        yield put(GET_USER_FAILURE(err));
    }
    yield put(FINISH_LOADING());
}

export default function* userSaga() {
    yield takeLatest(GET_USER, getUserSaga);
}
