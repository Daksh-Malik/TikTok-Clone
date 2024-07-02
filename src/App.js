import './App.css';
import {useEffect, useState} from 'react';
import Video from './components/Video';

function App() {

  const API_URL = 'https://raw.githubusercontent.com/codedamn-classrooms/tiktok-react-material/main/data.json';

  const [content,setContent] = useState([]);

  useEffect(()=>{
    fetch(API_URL)
    .then(data => data.json())
    .then(data => {
      setContent(data);
    })
  },[]);

  return (
    <div className='app'>
      <div className='container'>
        {content.map(item => {
          return(
              <Video 
                url={item.url} 
                channel={item.channel} 
                desc={item.description} 
                song={item.song} 
                likes={item.likes} 
                messages={item.messages}
                shares={item.shares}
              />
            )
        })}
      </div>
    </div>
  );
}

export default App;
