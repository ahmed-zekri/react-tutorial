import './App.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from "react";

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


    return <div  className='container'><Header  title={"Header"}/>


        <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
}

export default App;
