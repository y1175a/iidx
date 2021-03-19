import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { userActions } from '../reducers/user';
import * as userAPI from '../api/user';

const { GET_USER, GET_USER_SUCCESS, GET_USER_FAILURE } = userActions;

function* getUserSaga(action) {
    try {
        const res = yield call(userAPI.getUser, action);
        yield put(GET_USER_SUCCESS(res.data));
    } catch (err) {
        yield put(GET_USER_FAILURE(err));
    }
}

export default function* userSaga() {
    yield takeLatest(GET_USER, getUserSaga);
}
