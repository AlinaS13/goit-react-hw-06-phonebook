import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './reducer';

export const store = configureStore({
  reducer: contactsReducer,
});
