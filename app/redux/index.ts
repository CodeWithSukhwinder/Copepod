import {configureStore} from '@reduxjs/toolkit';
import authReducer from './feature/auth/authSlice';
import logger from 'redux-logger';


export const store = configureStore({
  reducer: {
   auth:authReducer,
  },
  middleware: [logger],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
