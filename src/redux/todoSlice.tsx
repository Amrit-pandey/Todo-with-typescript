// todoSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

export interface TodosState {
  todos: any;
  allTodos: Todo[];
  textForEdit: string;
  isEditing: boolean;
  currentTodoId: number | null;
  searchTodo: string
}

const initialState: TodosState = {
    allTodos: [],
    textForEdit: "",
    isEditing: false,
    currentTodoId: null,
    todos: undefined,
    searchTodo: ""
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.allTodos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.allTodos = state.allTodos.filter(
        (todo) => todo.id !== action.payload
      );
    },
    isCompleted: (state, action: PayloadAction<number>) => {
      const todo = state.allTodos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
    editTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
      const { id, text } = action.payload;
      const todo = state.allTodos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    setText: (state, action: PayloadAction<string>) => {
      state.textForEdit = action.payload;
    },
    setIsEditing: (state, action: PayloadAction<boolean>) => {
      state.isEditing = action.payload;
    },
    setCurrentTodoId: (state, action: PayloadAction<number | null>) => {
      state.currentTodoId = action.payload;
    },
    setTodoForEdit: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      const todoToEdit = state.allTodos.find((todo) => todo.id === id);
      if (todoToEdit) {
        state.textForEdit = todoToEdit.text;
        state.isEditing = true;
        state.currentTodoId = id;
      }
    },
    setSearchTodo: (state, action: PayloadAction<string>) => {
        state.searchTodo = action.payload
    }
  },
});

export const {
  addTodo,
  deleteTodo,
  isCompleted,
  editTodo,
  setText,
  setIsEditing,
  setCurrentTodoId,
  setTodoForEdit,
  setSearchTodo
} = todoSlice.actions;

export default todoSlice.reducer;
