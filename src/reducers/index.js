import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth';
import userReducer from './user';
import chartReducer from './chart';
import chartsReducer from './charts';
import loadingReducer from './loading';
import playdataReducer from './playdata';

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
    playdata: playdataReducer,
    loading: loadingReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;