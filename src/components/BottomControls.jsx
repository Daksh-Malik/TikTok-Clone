import React from 'react'
import MusicIcon from '../assets/Music'

export default function BottomControls(props) {

    const {channel,desc,song} = props;

  return (
    <div className='bottom-controls'>
        <div className="text">
            <h3>@{channel}</h3>
            <p>{desc}</p>
            <div className='music-box'>
                <MusicIcon style={{ width: '30px' }}/>
                <marquee direction='left' scrollamount='2'>{song}</marquee>
            </div>
        </div>
    </div>
  )
}
