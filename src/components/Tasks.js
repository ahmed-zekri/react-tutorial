import Task from "./Task";
import {ListGroup} from "react-bootstrap";


const Tasks = ({tasks,onDelete,onToggle}) => {

    return (
        <div>
            <h2>Tasks</h2>
            <ListGroup>
               {tasks.map(task => (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />))}
            </ListGroup>
        </div>
    )


}
export default Tasks