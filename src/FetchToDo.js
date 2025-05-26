import axios from 'axios';



const getAllToDo = (setToDoList) => {
    axios.get("https://backend-final-project-o8ql.onrender.com")
    .then(({data}) => {console.log(data)
        setToDoList(data);
})
}

const addToDo = (title, setTitle, setToDoList) => {
    axios.post(`https://backend-final-project-o8ql.onrender.com/saveToDo`, { title })
    .then((data) => {
        console.log(data)
        setTitle("")
        getAllToDo(setToDoList)
    })
}

const editToDo = (toDoId, title, setTitle, setToDoList, setEditing) => {
    axios.put(`https://backend-final-project-o8ql.onrender.com/editToDo`, {_id: toDoId, title })
    .then((data) => {
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllToDo(setToDoList)
    })
}

const deleteToDo = (_id, setToDoList) => {
    axios.post(`https://backend-final-project-o8ql.onrender.com/deleteToDo`, { _id })
    .then((data) => {
        console.log(data)
        getAllToDo(setToDoList)
    })
}


export { getAllToDo, addToDo, editToDo, deleteToDo };