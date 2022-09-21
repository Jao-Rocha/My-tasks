import React ,{useState, Fragment, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Tasks from '../components/Tasks';
import AddTask from '../components/AddTask';

import "../App.css"
import { v4 as uuidv4 } from 'uuid'



const HomeScreen = ()=>{

  const [tasks, setTask] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: true
    }
  ])
  useEffect(()=>{
    const fetchTasks = async ()=>{
      const {data} = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10")
      setTask(data)
    }
    fetchTasks()
  },[])

  const handleTaskClick = (taskId)=>{
    const newTasks = tasks.map(task =>{
      if(task.id=== taskId) return{...task, completed: !task.completed}

      return task
    })
    setTask(newTasks)
  }

  const handleTaskAddition =(taskTitle) =>{
    const newTask = [...tasks,{
      title : taskTitle,
      id:uuidv4(),
      completed: false
    }, ]

    setTask(newTask)
  }
  const handleTaskDeletion =(taskId)=>{
    const newTasks = tasks.filter((task) =>task.id !== taskId)
    setTask(newTasks)
  }





  return(
    <Fragment>
          <div className="container">
            <Header/>
            <AddTask handleTaskAddition={handleTaskAddition} />
            <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
          </div> 
    </Fragment>
  )
}


export default HomeScreen