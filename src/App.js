import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from "react";
import AddTaskAlert from "./components/AddTaskAlert";


const App = () => {
    const [tasks, setTasks] = useState([{
        id: 1,
        text: 'Learn React', day: 'Monday', reminder: '10:00'
    }, {
        id: 2,
        text: 'Learn React', day: 'Monday', reminder: '10:00'
    }, {
        id: 3,
        text: 'Oauth sheet', day: 'Tuesday', reminder: '12:00'
    }, {
        id: 4,
        text: 'Freelance', day: 'Wednesday', reminder: '15'
    }])
    const deleteTask = (id) => {

        setTasks(tasks.filter(task => task.id !== id))

    }

    const addTask = (text, day) => {
        setTasks([...tasks, {
            id: tasks.length + 1,
            text: text,
            day: day

        }])


    }
    const changeDateToTuesday = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? {...task, day: 'Tuesday'} : task
        ))

    }


    return <div className='container'><Header title={"Header"}/>
        <AddTaskAlert addTask={addTask}/>
        {tasks.length > 0 ? <Tasks onToggle={changeDateToTuesday} tasks={tasks} onDelete={deleteTask}/> :
            <h1>No tasks</h1>}


    </div>
}

export default App;
