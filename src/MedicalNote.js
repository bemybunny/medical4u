import React, { useState, useEffect, useRef  } from "react";
import './medicalnote.css';
import Nav from './Nav'
import Chatbot from './Chatbot'
function MedicalNote() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [newTaskDateTime, setNewTaskDateTime] = useState('');
    const [isAlarmPlaying, setIsAlarmPlaying] = useState(false);
    const [alarmTaskIndex, setAlarmTaskIndex] = useState(null);
    const [snoozeTime, setSnoozeTime] = useState(null);
  
    const audioRef = useRef(null);
    const [snoozeTimeInput, setSnoozeTimeInput] = useState('');
    const [showSnoozeTimeInput, setShowSnoozeTimeInput] = useState(false);
  
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
      const audio = audioRef.current;
      audio.pause();
      audio.currentTime = 0;
      const updatedTasks = [...tasks];
      updatedTasks[index].text = '✔ ' + updatedTasks[index].text;
      setTasks(updatedTasks);
    };
  
    const removeTask = (index) => {
      const audio = audioRef.current;
      audio.pause();
      audio.currentTime = 0;
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    };
  
    const snoozeTask = (index) => {
      setSnoozeTimeInput(tasks[index].dateTime);
      setShowSnoozeTimeInput(true);
      setAlarmTaskIndex(index);
    };
  
    const checkTasksDue = () => {
      const now = new Date().getTime();
  
      for (let i = 0; i < tasks.length; i++) {
        const taskDateTime = new Date(tasks[i].dateTime).getTime();
  
        if (now >= taskDateTime) {
          if (!isAlarmPlaying) {
            playSound();
            setIsAlarmPlaying(true);
            setAlarmTaskIndex(i);
            break; // Break the loop after the first alarm
          }
        }
      }
  
      if (snoozeTime && now >= snoozeTime) {
        playSound();
        setIsAlarmPlaying(true);
        setSnoozeTime(null); // Reset snooze time
      }
    };
  
    const playSound = () => {
      const audio = audioRef.current;
      audio.play();
    };
  
    const stopAlarm = () => {
      const audio = audioRef.current;
      audio.pause();
      audio.currentTime = 0;
      setIsAlarmPlaying(false);
  
      if (alarmTaskIndex !== null) {
        removeTask(alarmTaskIndex);
        setAlarmTaskIndex(null);
      }
    };
  
    const snoozeAlarm = () => {
      const newSnoozeTime = new Date(snoozeTimeInput).getTime();
      setSnoozeTime(newSnoozeTime);
      setShowSnoozeTimeInput(false);
      const audio = audioRef.current;
      audio.pause();
      audio.currentTime = 0;
      const updatedTasks = [...tasks];
      updatedTasks[alarmTaskIndex].dateTime = snoozeTimeInput;
      setTasks(updatedTasks);
      setIsAlarmPlaying(false); // Stop the alarm after snoozing
    };
  
    return (
      <div className="backgroundImage">
         <Nav/>
      <div className="medicalnote">
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
                {isAlarmPlaying && alarmTaskIndex === index ? (
                  <div>
                    <button onClick={stopAlarm} className="stop-button">Stop</button>
                    <button onClick={() => snoozeTask(index)} className="snooze-button">Snooze</button>
                  </div>
                ) : (
                  <button onClick={() => removeTask(index)} className="remove-button">Remove</button>
                )}
              </div>
            </li>
          ))}
        </ul>
        {showSnoozeTimeInput && (
        <div>
          <input
            type="datetime-local"
            value={snoozeTimeInput}
            onChange={(e) => setSnoozeTimeInput(e.target.value)}
          />
          <button onClick={snoozeAlarm}>Snooze Alarm</button>
        </div>
      )}
      {isAlarmPlaying && snoozeTime && !showSnoozeTimeInput && (
        <button onClick={stopAlarm} className="stop-button">Stop</button>
      )}
      <audio ref={audioRef} src="alarm.mp3" preload="auto" />
      <Chatbot/>
    </div>
    </div>
  );
}

  
export default MedicalNote;



