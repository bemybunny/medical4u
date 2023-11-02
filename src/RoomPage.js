import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import Nav from './Nav';
const RoomPage = () => {
  const {roomId} = useParams();
  const myMeeting = async(element)=>{
    const appID=773381905;
    const serverSecret="8450c60d5a8fc93a944f4373a0b59319";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),"Leena"
      );

      const zc = ZegoUIKitPrebuilt.create(kitToken);
      zc.joinRoom({
        container: element,
        sharedLinks:[
         { name:'Copy Link',
          url:`http://localhost:3000/room/${roomId}`}
        ],
        scenario: {
          mode:ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton:true,
      })
  };
  return (

    <div>
    <Nav/>
      <div ref={myMeeting}/>
    </div>
  )
}

export default RoomPage
