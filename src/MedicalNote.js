import React, { useState, useEffect } from "react";
import './medicalnote.css';
import Nav from './Nav'
function MedicalNote() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [newTaskDateTime, setNewTaskDateTime] = useState('');
  
    useEffect(() => {
      const timer = setInterval(() => {
        checkTasksDue();
      }, 1000); 
  
      return () => {
        clearInterval(timer);
      };
    }, [tasks]);
  
    const addTask = () => {
      if (newTask.trim() !== '' && newTaskDateTime.trim() !== '') {
        setTasks([...tasks, { text: newTask, dateTime: newTaskDateTime }]);
        setNewTask('');
        setNewTaskDateTime('');
      }
    };
  
    const completeTask = (index) => {
      const updatedTasks = [...tasks];
      updatedTasks[index].text = '✔ ' + updatedTasks[index].text;
      setTasks(updatedTasks);
    };
  
    const removeTask = (index) => {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    };
  
    const checkTasksDue = () => {
      const now = new Date().getTime();
  
      for (let i = 0; i < tasks.length; i++) {
        const taskDateTime = new Date(tasks[i].dateTime).getTime();
        if (now >= taskDateTime) {
          playSound();
          removeTask(i);
        }
      }
    };
  
    const playSound = () => {
      const audio = new Audio('alarm.mp3');
      audio.play();
    };
  
    return (
      <div className="App">
      <Nav/>
        <h1>My Beautiful To-Do List</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="New task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <input
            type="datetime-local"
            value={newTaskDateTime}
            onChange={(e) => setNewTaskDateTime(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              <div className="task-details">
                <span className={task.text.startsWith('✔') ? 'completed' : 'task-text'}>
                  {task.text}
                </span>
                <span className="datetime">{task.dateTime}</span>
              </div>
              <div className="task-actions">
                <button onClick={() => completeTask(index)} className="complete-button">Complete</button>
                <button onClick={() => removeTask(index)} className="remove-button">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
export default MedicalNote;



