import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import authSaga from './authSaga';

export default function* rootSaga() {
    yield all([authSaga()]);
}