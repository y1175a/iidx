import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth';
import userReducer from './user';
import chartReducer from './chart';
import chartsReducer from './charts';
import loadingReducer from './loading';
// import { loadingSlice } from './loading';
// import { playdataSlice } from './playdata';
// import { userSlice } from './user';

/**
 * 
 */
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    chart: chartReducer,
    charts: chartsReducer,
    // playdata: playdataSlice.reducer,
    loading: loadingReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;