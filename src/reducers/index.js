import { combineReducers } from 'redux';
import authReducer from './auth';
// import { chartsSlice } from './charts';
// import { loadingSlice } from './loading';
// import { playdataSlice } from './playdata';
// import { userSlice } from './user';

const rootReducer = combineReducers({
    auth: authReducer,
    // user: userSlice.reducer,
    // charts: chartsSlice.reducer,
    // playdata: playdataSlice.reducer,
    // loading: loadingSlice.reducer,
})

export default rootReducer;