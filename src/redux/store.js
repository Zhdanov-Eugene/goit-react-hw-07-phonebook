import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './phonebook/phonebook-reducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;