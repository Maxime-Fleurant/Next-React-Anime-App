import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    light: true,
  },
  reducers: {
    updateLight: (state, action: PayloadAction<void>) => {
      return { light: !state.light };
    },
  },
});

export const lightReducer = themeSlice.reducer;
export const { updateLight } = themeSlice.actions;
