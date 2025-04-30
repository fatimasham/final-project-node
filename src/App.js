import { getAllToDo } from './FetchToDo';
import './App.css';
import { MyToDo } from './MyToDo';
import { useEffect, useState } from 'react';

function App() {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    getAllToDo(setToDoList);
  }, []);

  return (
    <div>
      <h1>To Do List</h1>

      <input
        type="text"
        placeholder="Add a ..." 
      />

      <button>ADD</button>

      {toDoList.map((toDo) => <MyToDo text={toDo.title} key={toDo._id}/>
      )}
    </div>
  );
}

export default App;
