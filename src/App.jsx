import { useState } from "react";
import Navbar from "./Componnet/NavBar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);


  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    console.log(todos)
  }
  const handleEdit = () => {

  }
  const handleDelete = () => {

  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleCheckbox = (e) => {
    let id = e.target.name;
  }


  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] ">
        <div className="addTodo my-5 ">
          <h2 className="text-lg font-bold"> Add a Todo</h2>
          <input onChange={handleChange} value={todo.id} type="text" className="w-1/2" />
          <button onClick={handleAdd} className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6">Add</button>
        </div>
        <h2 className="text-lg font-bold">Your Todo </h2>
        <div className="todos">
          {todos.map(item => {
            return (
              <div className="todo flex w-1/4 justify-between my-3" key={item}>
                <input name={item.id} onChange={handleCheckbox} type="checkbox" value={item.isCompleted} />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                <div className="buttons">
                  <button onClick={() => handleEdit(item.id)} className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1">Edit</button>
                  <button onClick={() => handleDelete(item.id)} className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1">Delete</button>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </>
  )
}

export default App

