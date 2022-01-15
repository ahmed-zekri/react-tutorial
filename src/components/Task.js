import {FaTimes} from "react-icons/fa";


const Task = ({task, onDelete}) => {
    return (

        <li>{task.text}
            <p>{task.day}<FaTimes onClick={() => onDelete(task.id)}/></p>
        </li>


    )


}
export default Task