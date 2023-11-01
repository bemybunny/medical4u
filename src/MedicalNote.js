import React, { useState, useRef } from "react";
import Task from "./Task";
import './medicalnote.css';

function MedicalNote() {

  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [alarmTime, setAlarmTime] = useState("");
  const [isAlarmSet, setIsAlarmSet] = useState(false);
  const audioRef = useRef(null);

  const setAlarmOrAddTask = () => {
    if (isAlarmSet) {
      // If an alarm is set, add a task
      if (taskText !== "") {
        const newTask = {
          text: taskText,
        };
  
        setTasks([...tasks, newTask]);
        setTaskText("");
      }
    } else {
      // If no alarm is set, set an alarm
      if (alarmTime) {
        const alarmDate = new Date(alarmTime);
        const currentDate = new Date();
  
        if (alarmDate > currentDate) {
          const timeDifference = alarmDate - currentDate;
          setTimeout(() => {
            audioRef.current.play();
            alert("Alarm! Time to wake up!");
            setIsAlarmSet(false);
          }, timeDifference);
  
          setIsAlarmSet(true);
        } else {
          alert("Invalid alarm time. Please choose a future time.");
        }
      } else {
        alert("Please set an alarm time or enter a task.");
      }
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="medical">
      <h1>Todo List</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
      
      </div>
      <ul>
        {tasks.map((task, index) => (
          <Task
            key={index}
            text={task.text}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </ul>
      <div className="alarm-input">
        <input
          type="datetime-local"
          value={alarmTime}
          onChange={(e) => setAlarmTime(e.target.value)}
        />
      </div>
      {isAlarmSet && <p>Alarm is set for: {new Date(alarmTime).toLocaleString()}</p>}
      <audio ref={audioRef}>
        <source src="alarm.mp3" type="audio/mpeg" />
      </audio>
      <button onClick={setAlarmOrAddTask}>
          {isAlarmSet ? "Add Task" : "New Medicine"}
        </button>
    </div>
  );
}

export default MedicalNote;


