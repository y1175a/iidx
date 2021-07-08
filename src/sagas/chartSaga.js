import { call, put, takeLatest } from 'redux-saga/effects';
import { loadingActions } from '../reducers/loading';
import { chartActions } from '../reducers/chart';
import { chartsActions } from '../reducers/charts';
import { playdataActions } from '../reducers/playdata';
import * as chartAPI from '../api/chart';
import * as playdataAPI from '../api/playdata';

const { LOAD_CHART, LOAD_CHART_SUCCESS, LOAD_CHART_FAILURE } = chartActions;
const { LOAD_PLAYDATA, LOAD_PLAYDATA_SUCCESS, LOAD_PLAYDATA_FAILURE } = playdataActions;
const { LOAD_CHARTS, LOAD_CHARTS_SUCCESS, LOAD_CHARTS_FAILURE } = chartsActions;

const { START_LOADING, FINISH_LOADING } = loadingActions;

function* loadChartSaga(action) {
    yield put(START_LOADING());
    try {
        const res = yield call(chartAPI.getChart, action);
        yield put(LOAD_CHART_SUCCESS(res));
    } catch (err) {
        yield put(LOAD_CHART_FAILURE(err));
    }
    yield put(FINISH_LOADING());
}

function* loadPlaydataOneSaga(action) {
    yield put(START_LOADING());
    try {
        const res = yield call(playdataAPI.getPlaydata, action);
        yield put(LOAD_PLAYDATA_SUCCESS(res));
    } catch (err) {
        yield put(LOAD_PLAYDATA_FAILURE(err));
    }
    yield put(FINISH_LOADING());
}

function* loadChartsSaga(action) {
    yield put(START_LOADING());
    try {
        const res = yield call(chartAPI.getCharts, action);
        yield put(LOAD_CHARTS_SUCCESS(res));
    } catch (err) {
        yield put(LOAD_CHARTS_FAILURE(err));
    }
    yield put(FINISH_LOADING());
}

export default function* chartSaga() {
    yield takeLatest(LOAD_CHART, loadChartSaga);
    yield takeLatest(LOAD_CHARTS, loadChartsSaga);
    yield takeLatest(LOAD_PLAYDATA, loadPlaydataOneSaga);
}
