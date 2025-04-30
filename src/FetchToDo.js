import axios from 'axios';

const getAllToDo = (setToDoList) => {
    axios.get("http://localhost:3000")
    .then(({data}) => {console.log(data)
        setToDoList(data);
})
}

export { getAllToDo };