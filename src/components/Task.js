import TaskDisplay from './TaskDisplay';

const Task = ({tasks, setTasks, oldTasks}) => {
    //map tasks into task view
    return(
        <>
        <span className='Task'>     
                {tasks.map((x)=>
                <TaskDisplay taskname={x.name} description={x.description} setTasks={setTasks} id={x.id} oldTasks={oldTasks}/>)}
        </span>
        </>
    )
}

export default Task