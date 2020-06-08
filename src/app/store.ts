import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { animeListPageReducers } from '../features/anime/animeSearch/animeListSlice';

const reducer = combineReducers({ animeListPageReducers });

export const store = configureStore({
  reducer,
});

export type TStore = ReturnType<typeof reducer>;
