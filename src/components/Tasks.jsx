import React, { Fragment } from 'react'
import Task from './Task'
//aqui foi feita a desconstução dos props
const Tasks = ({ tasks , handleTaskClick,handleTaskDeletion }) => {
  return (
    <Fragment>
      {tasks.map(task => (
        <Task
        key={task.id}
        task={task} 
        handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
      ))}
    </Fragment>
  )
}

export default Tasks
