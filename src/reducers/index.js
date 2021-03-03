import { combineReducers } from 'redux';
import { authSlice } from './auth';
import { chartsSlice } from './charts';
import { loadingSlice } from './loading';
import { playdataSlice } from './playdata';
import { userSlice } from './user';

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    user: userSlice.reducer,
    charts: chartsSlice.reducer,
    playdata: playdataSlice.reducer,
    loading: loadingSlice.reducer,
})

export default rootReducer;