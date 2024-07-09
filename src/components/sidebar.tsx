import TodoForm from "./todo-form";

const Sidebar = () => {
  return (
    <section className="col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08]">
      <TodoForm />
    </section>
  );
};

export default Sidebar;
