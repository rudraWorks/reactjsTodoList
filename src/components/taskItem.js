import "./taskItem.css"

let taskItem = (props) =>{
    return (
        <div className="taskItem">
            <h1>{props.task.title}</h1>
            <div style={{color:"blue"}}>{props.task.desc}</div>
            <br></br>
            <div>{props.task.time}</div>
      
            <button onClick={()=>props.deleteTask(props.task.id)}>Delete</button>
        </div>
    )
}

export default taskItem