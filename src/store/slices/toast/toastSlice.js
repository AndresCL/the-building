import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toast: {
    title: '',
    watts: '',
    content: '',
    display: false
  }
}

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast: (state, action) => {
      // Set attributes and show the toast
      state.toast.title = action.payload.title;
      state.toast.watts = action.payload.watts;
      state.toast.content = action.payload.content;
      state.toast.display = true;
    },
    hideToast: (state) => {
      state.toast.display = false;
    }
  }
});

export const { showToast, hideToast } = toastSlice.actions;