import { call, put, takeLatest } from 'redux-saga/effects';
import { chartActions } from '../reducers/chart';
import { chartsActions } from '../reducers/charts';
import * as chartAPI from '../api/chart';

const { LOAD_CHART, LOAD_CHART_SUCCESS, LOAD_CHART_FAILURE } = chartActions;
const { LOAD_CHARTS, LOAD_CHARTS_SUCCESS, LOAD_CHARTS_FAILURE } = chartsActions;

function* loadChartSaga(action) {
    try {
        const res = yield call(chartAPI.getChart, action);
        yield put(LOAD_CHART_SUCCESS(res));
    } catch (err) {
        yield put(LOAD_CHART_FAILURE(err));
    }
}

function* loadChartsSaga(action) {
    try {
        const res = yield call(chartAPI.getCharts, action);
        yield put(LOAD_CHARTS_SUCCESS(res));
    } catch (err) {
        yield put(LOAD_CHARTS_FAILURE(err));
    }
}

export default function* chartSaga() {
    yield takeLatest(LOAD_CHART, loadChartSaga);
    yield takeLatest(LOAD_CHARTS, loadChartsSaga);
}
