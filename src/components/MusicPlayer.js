import React, {useState} from 'react'
import '../styles/MusicPlayer.scss'
import SongImage from '../assets/tracks/goGetIt.png'
import { KeyboardArrowDown } from '@material-ui/icons'
import { KeyboardArrowUp } from '@material-ui/icons'
import GoGetIt from '../assets/tracks/goGetIt.wav'

function MusicPlayer() {
  const [closePlayer, setPlayer] = useState(false);

  const togglePlayer = () => {
    setPlayer(!closePlayer);
  };
  
  return (
    <div className='musicPlayer' id={closePlayer ? "close" : "open"}>
        <div className='top' id={closePlayer ? "close" : "open"}>
            <h2 className='noShadow'>Go Get It</h2>
            <div className='arrow opened' onClick={togglePlayer}><KeyboardArrowUp/></div>
            <div className='arrow closed' onClick={togglePlayer}><KeyboardArrowDown/></div>
        </div>
        <div id={closePlayer ? "close" : "open"}><img className = 'music' src={SongImage}/></div>
        <div id={closePlayer ? "close" : "open"}><audio className = 'music' src={GoGetIt} type='audio/wav' controls></audio></div>
    </div>
  )
}

export default MusicPlayer