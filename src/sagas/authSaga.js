import { call, put, takeEvery } from 'redux-saga/effects';
import { authSlice } from '../reducers/auth';
import * as authAPI from '../api/auth';

// function* login(action) {
//     try {
//         const res = yield call(authAPI.login, action.payload);
//         yield put(LOGIN_SUCCESS);
//     } catch (err) {

//     }
// }



