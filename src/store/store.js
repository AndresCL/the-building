import { configureStore } from '@reduxjs/toolkit';
import { apartmentsSlice } from './slices/apartments';
import { toastSlice } from './slices/toast';

export const store = configureStore({
  reducer: {
    apartments: apartmentsSlice.reducer,
    toast: toastSlice.reducer
  },
});