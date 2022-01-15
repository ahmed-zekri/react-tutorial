import Task from "./Task";


const Tasks = ({tasks,onDelete}) => {

    return (
        <div>
            <h2>Tasks</h2>
            <ul>
               {tasks.map(task => (<Task key={task.id} task={task} onDelete={onDelete} />))}
            </ul>
        </div>
    )


}
export default Tasks