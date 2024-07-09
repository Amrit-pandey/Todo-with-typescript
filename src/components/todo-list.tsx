import { useCallback } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  isCompleted,
  setTodoForEdit,
  Todo,
  TodosState,
} from "../redux/todoSlice";

const TodoList = () => {
  const todos = useSelector((state: TodosState) => state.todos.allTodos);
  const searchTodos = useSelector(
    (state: TodosState) => state.todos.searchTodo
  );
  const dispatch = useDispatch();

  const filteredTodos = todos.filter((todo: Todo) =>
    todo.text.toLowerCase().includes(searchTodos.toLowerCase())
  );

  const handleDeleteTodo = useCallback(
    (id: number) => {
      dispatch(deleteTodo(id));
    },
    [dispatch]
  );

  const handleMarkAsCompleted = useCallback(
    (id: number) => {
      dispatch(isCompleted(id));
    },
    [dispatch]
  );

  const handleEditTodo = useCallback(
    (id: number) => {
      dispatch(setTodoForEdit({ id }));
    },
    [dispatch]
  );

  return (
    <ul>
      {filteredTodos.length === 0 ? (
        <div className="text-md text-gray-400 flex justify-center items-center h-full">
          No todos found. Add a new todo to get started!
        </div>
      ) : (
        <>
          {filteredTodos.map((todo: Todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center px-8 h-[50px] cursor-pointer border-b border-black/[8%] text-[14px] text-gray-500"
            >
              <span
                onClick={() => handleMarkAsCompleted(todo.id)}
                className={`${
                  todo.isCompleted ? "line-through text-[#ccc]" : ""
                }`}
              >
                {todo.text}
              </span>
              <div className="flex gap-5">
                <BiTrash onClick={() => handleDeleteTodo(todo.id)} />
                <BiEdit onClick={() => handleEditTodo(todo.id)} />
              </div>
            </li>
          ))}
        </>
      )}
    </ul>
  );
};

export default TodoList;
