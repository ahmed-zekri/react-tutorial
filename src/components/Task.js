import {FaTimes} from "react-icons/fa";
import {ListGroup} from "react-bootstrap";


const Task = ({task, onDelete, onToggle}) => {
    return (

        <ListGroup.Item className={`${task.day==='Tuesday'?'underline':''}`} onDoubleClick={() => onToggle(task.id)}>{task.text}
            <p>{task.day}<FaTimes onClick={() =>
                onDelete(task.id)}
            /></p>
        </ListGroup.Item>



    )


}
export default Task