import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setText,
  editTodo,
  addTodo,
  setIsEditing,
  setCurrentTodoId,
  TodosState,
} from "../redux/todoSlice";

const TodoForm = () => {
  const text = useSelector((state: TodosState) => state.todos.textForEdit);
  const isEditing = useSelector((state: TodosState) => state.todos.isEditing);
  const currentTodoId = useSelector(
    (state: TodosState) => state.todos.currentTodoId
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isEditing && text !== "") {
      dispatch(setText(text));
    }
  }, [dispatch, isEditing, text]);

  const handleAddAndUpdateTodo = useCallback(
    (e: { preventDefault: () => void }) => {
      e.preventDefault();
      if (text.trim()) {
        if (isEditing) {
          dispatch(editTodo({ id: currentTodoId, text }));
          dispatch(setIsEditing(false));
          dispatch(setCurrentTodoId(null));
        } else {
          const newTodo = {
            id: Date.now(),
            text,
            isCompleted: false,
          };
          dispatch(addTodo(newTodo));
        }
        dispatch(setText(""));
      }
    },
    [dispatch, text, isEditing, currentTodoId]
  );

  return (
    <div className="flex flex-col justify-center items-center m-2 gap-3">
      <input
        type="text"
        placeholder="Enter"
        className="border p-2 w-full focus:border-none rounded-md"
        value={text}
        onChange={(e) => dispatch(setText(e.target.value))}
      />
      <button
        className="bg-black/70 hover:bg-black text-white rounded-md w-full p-2"
        onClick={handleAddAndUpdateTodo}
      >
        {isEditing ? "Update todo" : "Add todo"}
      </button>
    </div>
  );
};

export default TodoForm;
