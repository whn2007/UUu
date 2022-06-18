import React from 'react'
import Footer from "../components/Footer";
import "../styles/Johnny.scss";
import Origin from "../assets/origin.png"
import LifeMission from "../assets/lifemission.png"

function Johnny() {
  return (
    <div className='johnny'>
      <div className='intro'>
        <div className='title'>
          <h2>Meet the Founder</h2>
          <h1>Lord Jaywuzer</h1>
        </div>
      </div>
      
      <div className='links'>
        <div className='links-intro'>
          <h1>The Mind Behind the Madness</h1>
          <h2>Peer into the mind of a genius.</h2>
        </div>

        <div className='story'>
            <div className='origin'>
              <h2>Origin Story</h2>
              <a href='https://twitter.com/JayWuzer/status/1537534817302028288' target='_blank'>
                <img className='origin-story' src = {Origin}/>
              </a>
            </div>

            <div className='origin'>
              <h2>Life Mission</h2>
              <a href='https://twitter.com/JayWuzer/status/1537575282583818240' target='_blank'>
                <img className='life-mission' src = {LifeMission}/>
              </a>
            </div>
          </div>
      </div>
      
      <div className='tweets'>

      </div>

      <Footer className = "footer"/>
    </div>
  )
}

export default Johnny