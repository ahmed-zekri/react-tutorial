import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useEffect, useState} from "react";
import AddTaskAlert from "./components/AddTaskAlert";
import RemoveTaskAlert from "./components/RemoveTaskAlert";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./components/About";


const App = () => {

    const [tasks, setTasks] = useState([])
    const [idToDelete, setIdToDelete] = useState(null)
    const [showRemoveTaskAlert, setShowRemoveTaskAlert] = useState(false)
    const [taskTextToDelete, setTaskTextToDelete] = useState('')
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
        setTaskTextToDelete(tasks.find(task => task.id === id).text)

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
        setTasks(tasks.map(task => task.id === id ? {...task, day: 'Tuesday'} : task))

    }
    const hideAlert = () => {
        setShowRemoveTaskAlert(false)
    }
    return (<Router>
            <div className='container'><Header title={"Header"}/>


                <Routes>
                    <Route path="/" element={
                        <>
                            <AddTaskAlert addTask={addTask}/>
                            <RemoveTaskAlert deleteTask={deleteTask} show={showRemoveTaskAlert}
                                             taskText={taskTextToDelete}
                                             hideAlert={hideAlert}/>
                            {tasks.length > 0 ?
                                <Tasks onToggle={changeDateToTuesday} tasks={tasks} onDelete={setIdToDeleteState}/> :
                                <h1>No tasks</h1>}
                        </>

                    }/>
                    <Route path='/about' element={<About/>}/>
                </Routes>
                <Footer/>

            </div>
        </Router>

    )
}

export default App;
