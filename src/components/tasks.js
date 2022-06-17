import "./tasks.css"
import TaskItem from "./taskItem"

const Tasks = (props) =>{

    return (
        
        <div className="tasks">
          { props.allTasks.length  ?  props.allTasks.map((task)=><TaskItem key={task.id} task={task} deleteTask={props.deleteTask} />):<p>No task</p>  } 
        </div>
    )
}

export default Tasks