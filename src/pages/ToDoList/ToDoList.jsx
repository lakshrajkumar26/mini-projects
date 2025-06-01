import React, { useState } from 'react'
import './ToDoList.css'
const ToDoList = () => {

  const [tasks, setTasks] = useState(["create a weather app", "learn About Hooks", "revise Props" , "Go for Walk"]);
  const [newTask, setNewTask] = useState("");

  function handleinput(e) {
    setNewTask(e.target.value)

  }

  function addTask() {
      // newTask = "   "  .trim => ""  => ==""  => true so ! ==>false pe run  || and true to return 
  
      if(!newTask.trim() == "" ){
    setTasks([...tasks , newTask]);
    setNewTask("")
  }
  else {
    return 
        }
  }
 


  function deleteTask(index) {
    console.log("element clicked index for delete",index)
    const updatedTasks = tasks.filter( (element, i)=>  i !== index);

    setTasks(updatedTasks);

  }
  function moveTaskUp(index) {
     console.log("element clicked index for up",index)
    if(index >0){
      const updatedTasks = [...tasks];
      [updatedTasks[index] , updatedTasks[index-1]] =
      [updatedTasks[index-1] , updatedTasks[index]]

      setTasks(updatedTasks);
    }

  }
  function moveTaskDown(index) {
    console.log("element clicked index for down ",index)
    if(index <tasks.length-1 ){
      const updatedTasks = [...tasks];
      [updatedTasks[index] , updatedTasks[index+1]] =
      [updatedTasks[index+1] , updatedTasks[index]]

      setTasks(updatedTasks);
    }

  }

  return (
    <div className='to-do-list'>
      <h1>To-Do-List</h1>
      <div>

        <input type="text" value={newTask} onChange={handleinput} placeholder='Enter a task...' />
        <button className='add-button' onClick={addTask} >Add</button>
      </div>

      <ol>
        {tasks.map((task, index) => {
         
         return(
           <li key={index}>
            <span>{task}</span>
            <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
          <button className='move-button' onClick={() => moveTaskUp(index)}>MoveUp</button>
          <button className='move-button' onClick={() => moveTaskDown(index)}>MoveDown</button>
          </li>
         )

        })}
      </ol>
    </div>

  );
}

export default ToDoList
