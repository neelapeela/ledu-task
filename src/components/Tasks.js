
import * as MUI from '@mui/material'
import { useState, useEffect } from 'react'
import { render } from '@testing-library/react'
import AddIcon from '@mui/icons-material/Add'
import FormDialog from './FormDialog';
import Task from './Task';

// complete task display. Maintains all tasks.
const Tasks = () => {
    const [tasks, setTasks] = useState([])
    const [render, setRender] = useState(false)

    const addTask = () => {
        setRender(true)
    }
    
    localStorage.setItem('tasks', JSON.stringify(tasks))

    return(
        <>
        <span className='Tasks'>
            <div className='header'>
                <h1>My Tasks</h1>
                <div className='addbutton'><MUI.Fab onClick={addTask} color="primary" backgroundColor='red' aria-label="add">
                    <AddIcon/>
                </MUI.Fab></div>
            </div>
            {render ? <FormDialog setTasks={setTasks} oldTasks={tasks} render = {setRender}/> : null}
            <Task tasks={tasks} setTasks={setTasks} oldTasks={tasks}/>
        </span>
        </>
    )
}

export default Tasks