import Header from "./header";
import Sidebar from "./sidebar";
import TodoList from "./todo-list";

const Container = () => {
  return (
    <main className="relative w-[972px] h-[636px] bg-white rounded-md grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr]">
      <Header />
      <TodoList />
      <Sidebar />
    </main>
  );
};

export default Container;
