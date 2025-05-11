import { AiFillEdit, AiFillDelete} from "react-icons/ai"

export const MyToDo = ({ text, updatingInInput, deleteMyToDo }) => {
    return (
    <div>
        <p>{text}</p>
        <AiFillEdit onClick={updatingInInput}></AiFillEdit>
        <AiFillDelete onClick={deleteMyToDo}></AiFillDelete>


    </div>
    )
}