import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './slices/auth'
const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken'],
  blacklist:['userInfo']
};

const rootReducer = combineReducers({
  auth: persistReducer(persistAuthConfig, authReducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false
    })
});
export const persistor = persistStore(store);

export default store;
