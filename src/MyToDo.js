import { AiFillEdit, AiFillDelete} from "react-icons/ai"

export const MyToDo = ({ text, editMyText, deleteMyToDo }) => {
    return (
    <div>
        <p>{text}</p>
        <AiFillEdit onClick={editMyText}></AiFillEdit>
        <AiFillDelete onClick={deleteMyToDo}></AiFillDelete>


    </div>
    )
}