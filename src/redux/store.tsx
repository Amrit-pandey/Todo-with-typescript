// store.ts

import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import todosReducer, { TodosState } from './todoSlice';

const store: EnhancedStore<{ todos: TodosState }, any> = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
