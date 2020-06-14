import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const animeListPageSlice = createSlice({
  name: 'animeListPage',
  initialState: {
    formSelection: {},
  },
  reducers: {
    updateFormSelection: (state, action) => {
      const formatedFormSelection = _.pickBy(action.payload, (field) => field && field.length);

      return { ...state, formSelection: formatedFormSelection };
    },
  },
});

export const animeListPageReducers = animeListPageSlice.reducer;
export const { updateFormSelection } = animeListPageSlice.actions;
