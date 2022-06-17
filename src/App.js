import Tasks  from './components/tasks';
import Form from './components/form';
import React,{ useState }from 'react';
import {useEffect} from 'react'
import moment from "moment"

function App() {

  let allTasksInit=[
    {
      id:1,
      title:'sleep',
      desc:'first priority'
    },
    {
      id:2,
      title:'bath',
      desc:'second priority'
    }
  ]

  let arr=JSON.parse(localStorage.getItem('todoReactJs'))
  if(arr)
  {
    allTasksInit=arr
  }
  else 
  {
    localStorage.setItem('todoReactJs',[])
    allTasksInit=[]
  }

  let [allTasks,setAllTasks] = useState(allTasksInit)
  useEffect(()=>{
    localStorage.setItem('todoReactJs',JSON.stringify(allTasks))
  },[allTasks])


  let addTask = (title,desc) =>{

    let id
    
    if(allTasks.length===0)
      id=0
    else 
      id=allTasks[allTasks.length-1].id + 1

    let time = moment().format('llll')
    let newAllTasks = [...allTasks,{id,title,desc,time}]
    setAllTasks(newAllTasks)

 
  }
  let deleteTask = (id) =>{
    let newArr = []
    for(let i=0;i<allTasks.length;++i)
    if(allTasks[i].id !== id)
    newArr.push(allTasks[i])

    setAllTasks(newArr)
  }

  return (
    <div>
      <Form addTask={addTask}></Form>
      <br></br>
      <br></br>
     <Tasks allTasks={allTasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
