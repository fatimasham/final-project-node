import axios from 'axios';



const getAllToDo = (setToDoList) => {
    axios.get("http://localhost:4000")
    .then(({data}) => {console.log(data)
        setToDoList(data);
})
}

const addToDo = (title, setTitle, setToDoList) => {
    axios.post(`http://localhost:4000/saveToDo`, { title })
    .then((data) => {
        console.log(data)
        setTitle("")
        getAllToDo(setToDoList)
    })
}

const editToDo = (toDoId, title, setTitle, setToDoList, setEditing) => {
    axios.put(`http://localhost:4000/editToDo`, {_id: toDoId, title })
    .then((data) => {
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllToDo(setToDoList)
    })
}

const deleteToDo = (_id, setToDoList) => {
    axios.post(`http://localhost:4000/deleteToDo`, { _id })
    .then((data) => {
        console.log(data)
        getAllToDo(setToDoList)
    })
}


export { getAllToDo, addToDo, editToDo, deleteToDo };