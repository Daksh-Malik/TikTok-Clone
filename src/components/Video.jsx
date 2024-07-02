import React, { useEffect, useRef } from 'react'
import SideControls from './SideControls';
import BottomControls from './BottomControls';

export default function Video(props) {

    const {url,channel,desc,song,likes,messages,shares} = props;
    const videoRef = useRef(null);

    function onVideoPress(){
        if(videoRef.current.paused){
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }

  return (
    <div className='video-container'>
        <video ref={videoRef} onClick={onVideoPress} className='video' src={url} loop/>
        <div className="controls">
            <BottomControls channel={channel} desc={desc} song={song}/>
            <SideControls likes={likes} messages={messages} shares={shares}/>
        </div>
    </div>
  )
}
