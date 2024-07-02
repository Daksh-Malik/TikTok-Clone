import React, { useState } from 'react'
import FavoriteIcon from '../assets/FavoriteIcon'
import FavoriteBorderIcon from '../assets/FavoriteBorderIcon'
import MessageIcon from '../assets/Message'
import ShareIcon from '../assets/Share'

export default function SideControls(props) {

    const [liked,setLiked] = useState(false);
    const {likes,messages,shares} = props;

  return (
    <div className='side-controls'>
        <div className="side-icons">
            {liked ?
                <FavoriteIcon style={{ width: '40px', height: '40px' }} onClick={()=>setLiked(false)}/>
                :
                <FavoriteBorderIcon style={{ width: '40px', height: '40px' }} onClick={()=>setLiked(true)}/>
            }
            <p>{!liked ? likes : likes+1}</p>
        </div>
        <div className="side-icons">
            <MessageIcon style={{ width: '40px', height: '40px' }}/>
            <p>{messages}</p>
        </div>
        <div className="side-icons gap">
            <ShareIcon style={{ width: '40px', height: '40px' }}/>
            <p>{shares}</p>
        </div>
        <div className="side-icons">
            <img className='record' src="https://static.thenounproject.com/png/934821-200.png" />
        </div>
    </div>
  )
}
