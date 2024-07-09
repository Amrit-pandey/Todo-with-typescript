import { useDispatch, useSelector } from "react-redux";
import { setSearchTodo, Todo, TodosState } from "../redux/todoSlice";
import Logo from "../assets/todo.png";

const Header = () => {
  const todos = useSelector((state: TodosState) => state.todos.allTodos);
  const completedTodos = todos.filter((todo: Todo) => todo.isCompleted).length;
  const totalTodos = todos.length;
  const dispatch = useDispatch();

  const handleSearchTodoInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setSearchTodo(event.target.value));
  };
  return (
    <header className="col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/5 flex justify-between items-center px-[40px]">
      <img src={Logo} alt="Logo" className="size-8" />
      <div className="relative">
        <input
          type="text"
          placeholder="Search todos..."
          className="border p-2 rounded-md focus:border-none"
          onChange={handleSearchTodoInput}
        />
      </div>
      <div>
        {completedTodos}/{totalTodos} todos completed
      </div>
    </header>
  );
};

export default Header;
