import { getAllToDo, addToDo, editToDo, deleteToDo } from './FetchToDo';
import './App.css';
import { MyToDo } from './MyToDo';
import { useEffect, useState } from 'react';


function App() {
  const [toDoList, setToDoList] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [toDoId, setToDoId] = useState("")


  useEffect(() => {
    getAllToDo(setToDoList);
  }, []);

  const updatingInInput = (_id, title) => {
    setEditing(true)
    setTitle(title)
    setToDoId(_id)
  }

  return (
    <div>
      <h1>To Do List</h1>

      <input
        type="text"
        placeholder="Add a ..." 
        value = {title}
        onChange= {(e) => setTitle(e.target.value)}
      />

      <button 
      disabled={!title}
      onClick=
        {editing ? () => editToDo(toDoId, title, setTitle, setToDoList, setEditing) : () => addToDo(title, setTitle, setToDoList) }>
        {editing ? "Edit" : "Add"}
        </button>


      {toDoList.map((toDo) => <MyToDo text={toDo.title} key={toDo._id}
      updatingInInput={() => updatingInInput(toDo._id, toDo.title)}
      deleteToDo={() => deleteToDo(toDo._id, setToDoList) }
      />
      )}
    </div>
  );
}

export default App;
