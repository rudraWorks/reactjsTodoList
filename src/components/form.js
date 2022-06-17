import "./form.css"
import React,{useState} from "react"

let Form = (props) =>{
    
    const [title,setTitle] = useState('')
    const [desc,setDesc] = useState('')

    function titleHandler(e)
    {
        setTitle(e.target.value)
    }
    function descHandler(e)
    {
        setDesc(e.target.value)
    }

    function submitHandler(e)
    {
        e.preventDefault()
        if(title==="" || desc==="")
        return alert('input fields can not be empty!')
        props.addTask(title,desc)
        setTitle('')
        setDesc('')
    }
    return (
        <div className="form">
            <form className="formSubmit" onSubmit={submitHandler}>
                <input placeholder="title" value={title} onChange={titleHandler}></input>
           
                <input placeholder="description" value={desc} onChange={descHandler}></input>
             
                <button>Add</button>
            </form>
        </div>
    )
}

export default Form