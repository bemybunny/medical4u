import React,{useState,useCallback} from 'react';
import {useNavigate} from 'react-router-dom'
import './videoCall.css'
import Nav from './Nav';
function VideoCall(){
    const [value,setValue]=useState();
    const navigate = useNavigate();
    const handleJoinRoom = useCallback(()=>{
            navigate(`/room/${value}`)
    },[navigate,value])
    return (
        <div className="videoCall">
            <Nav/>
            <input value={value} type="text" onChange={(e)=>setValue(e.target.value)} placeholder="Enter Room Code"/>
            <button onClick={handleJoinRoom} >Join</button>
        </div>
    );
}

export default VideoCall;