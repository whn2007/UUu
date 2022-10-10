import React, {useState, useEffect} from 'react'
import '../styles/MusicPlayer.scss'
import SongImage from '../assets/tracks/goGetIt.png'
import { KeyboardArrowDown } from '@material-ui/icons'
import { KeyboardArrowUp } from '@material-ui/icons'
import GoGetIt from '../assets/tracks/goGetIt.wav'
import { PlayArrow } from '@material-ui/icons'
import { SkipPrevious } from '@material-ui/icons'
import { SkipNext } from '@material-ui/icons'
import { Pause } from '@material-ui/icons'

function MusicPlayer() {
  //opens/closes music player
  const [closePlayer, setPlayer] = useState(true);

  const togglePlayer = () => {
    setPlayer(!closePlayer);
  };

  const [audio] = useState(new Audio(GoGetIt)) 
  const [playing, setPlaying] = useState(false);
  //plays/pause song
  const togglePlay = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  },
    [playing]
  );

  
  return (
    <div className='musicPlayer' id={closePlayer ? "close" : "open"}>
        <div className='top' id={closePlayer ? "close" : "open"}>
            <h2 className='noShadow'>Go Get It</h2>
            <div className='arrow opened' onClick={togglePlayer}><KeyboardArrowUp/></div>
            <div className='arrow closed' onClick={togglePlayer}><KeyboardArrowDown/></div>
        </div>
        <div className='play' id={closePlayer ? "close" : "open"}>
          <div className = 'music' id={playing ? "playing" : "notPlaying"}>
            <SkipPrevious className='musicButton'/>
            <PlayArrow className='musicButton notPlaying' onClick = {togglePlay}/>
            <Pause className='musicButton playing' onClick = {togglePlay}/>
            <SkipNext className='musicButton'/>
          </div>
        </div>
    </div>
  )
}

export default MusicPlayer