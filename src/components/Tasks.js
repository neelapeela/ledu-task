
import * as MUI from '@mui/material'
import { useState, useEffect } from 'react'
import { render } from '@testing-library/react'
import AddIcon from '@mui/icons-material/Add'
import FormDialog from './FormDialog';
import Task from './Task';

// complete task display. Maintains all tasks.
const Tasks = () => {
    const [tasks, setTasks] = useState([])

    const addTask = () => {
        render (<FormDialog setTasks={setTasks} oldTasks={tasks}/>)
    }
    
    localStorage.setItem('tasks', JSON.stringify(tasks))

    return(
        <>
        <span className='Tasks'>
            <div className='header'>
                <h1>My Tasks</h1>
                <FormDialog setTasks={setTasks} oldTasks={tasks}/>
                <div className='addbutton'><MUI.Fab onClick={addTask} color="primary" backgroundColor='red' aria-label="add">
                    <AddIcon/>
                </MUI.Fab></div>
            </div>
            <Task tasks={tasks} setTasks={setTasks} oldTasks={tasks}/>
        </span>
        </>
    )
}

export default Tasks