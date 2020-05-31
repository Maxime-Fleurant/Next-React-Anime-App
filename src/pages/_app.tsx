import { AppProps } from 'next/app';
import { createSlice } from '@reduxjs/toolkit';
import 'antd/dist/antd.css';

import App from '../app/app';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
      addTodo(state: any, action: any) {
        const { id, text } = action.payload;
        state.push({ id, text, completed: false });
      },
      toggleTodo(state, action) {
        const todo = state.find((todo) => todo.id === action.payload);
        if (todo) {
          todo.completed = !todo.completed;
        }
      },
    },
  });

  export const { addTodo, toggleTodo } = todosSlice.actions;

  export default todosSlice.reducer;

  console.log('app ');
  return (
    <App>
      <Component {...pageProps} />
    </App>
  );
}
export default MyApp;
