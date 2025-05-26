import { AiFillEdit, AiFillDelete} from "react-icons/ai"

export const MyToDo = ({ text, updatingInInput, deleteToDo }) => {
    return (
    <div>
        <p>{text}</p>
        <AiFillEdit onClick={updatingInInput}></AiFillEdit>
        <AiFillDelete onClick={deleteToDo}></AiFillDelete>


    </div>
    )
}