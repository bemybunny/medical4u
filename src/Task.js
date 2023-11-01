import React from "react";
function Task({ text, date, time, onDelete }) {
  return (
    <li>
      <div >
        <span>{text}</span>
        <span>Date: {date}</span>
        <span>Time: {time}</span>
      </div>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default Task;