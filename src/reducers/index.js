import { combineReducers } from 'redux';
import authReducer from './auth';
import userReducer from './user';
import chartReducer from './chart';
import chartsReducer from './charts';
// import { loadingSlice } from './loading';
// import { playdataSlice } from './playdata';
// import { userSlice } from './user';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    chart: chartReducer,
    charts: chartsReducer,
    // playdata: playdataSlice.reducer,
    // loading: loadingSlice.reducer,
})

export default rootReducer;