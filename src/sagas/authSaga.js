import { call, put, takeEvery } from 'redux-saga/effects';
import { authSlice } from '../reducers/auth';
import * as authAPI from '../api/auth';

const { LOGIN } = authSlice.reducer;

function* login(action) {
    try {
        const res = yield call(authAPI.login());
        yield put(authSlice);
    } catch (err) {

    }
}



