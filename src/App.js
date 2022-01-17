import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useEffect, useState} from "react";
import AddTaskAlert from "./components/AddTaskAlert";
import RemoveTaskAlert from "./components/RemoveTaskAlert";


const App = () => {
    const [tasks, setTasks] = useState([])
    const [idToDelete, setIdToDelete] = useState(null)
    const [showRemoveTaskAlert, setShowRemoveTaskAlert] = useState(false)
    useEffect(async () => {
        const getTasks = async () => {
            const tasks = await fetchTasks()
            setTasks(tasks)
        }
        await getTasks()

    }, [])
    const fetchTasks = () => {
        return new Promise(async (resolve) => {
            const response = await fetch('http://localhost:5000/get_tasks')
            const textPromise = response.text()
            const text = await textPromise
            const data = JSON.parse(text)

            resolve(data)
        })
    }
    const setIdToDeleteState = (id) => {
        setIdToDelete(id)
        setShowRemoveTaskAlert(true)
    }
    const deleteTask = () => {
        return new Promise(async () => {
            const response = await fetch(`http://localhost:5000/delete_task?task_id=${idToDelete}`)
            const textPromise = response.text()
            const text = await textPromise
            const data = JSON.parse(text)
            setTasks(data)
            setShowRemoveTaskAlert(false)
        })
    }


    const addTask = (textTask, day, reminder) => {
        return new Promise(async () => {
            const response = await fetch(`http://localhost:5000/add_task?text=${textTask}&day=${day}&reminder=${reminder}`)
            const textPromise = response.text()
            const text = await textPromise
            const data = JSON.parse(text)
            setTasks(data)
        })


    }
    const changeDateToTuesday = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? {...task, day: 'Tuesday'} : task
        ))

    }


    return <div className='container'><Header title={"Header"}/>
        <AddTaskAlert addTask={addTask}/>
        <RemoveTaskAlert deleteTask={deleteTask} show={showRemoveTaskAlert}/>
        {tasks.length > 0 ? <Tasks onToggle={changeDateToTuesday} tasks={tasks} onDelete={setIdToDeleteState}/> :
            <h1>No tasks</h1>}


    </div>
}

export default App;
