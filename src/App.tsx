import Container from "./components/container"

function App() {
  return (
    <div className="bg-[#f1d4b3] min-h-screen flex justify-center items-center">
       <div className="text-[40px] md:text-[80px] font-bold text-black/5 uppercase absolute left-1/2 -translate-x-1/2 tracking-widest">
        Todo App
     </div>
      <Container />
    </div>
  )
}

export default App
