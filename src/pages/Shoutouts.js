import React from 'react'
import Footer from "../components/Footer";
import "../styles/Shoutouts.scss"
import AboutItem from "../components/AboutItem";
import { ShoutOutList } from "../helpers/ShoutOutList";

function Shoutouts() {
  return (
    <div className='shoutouts'>
        <div className='header'>
            <h1>Shout-Outs</h1>
            <p>Special thanks to these incredible organizations.</p>
        </div>

        <div className="aboutList">
          {ShoutOutList.map((aboutItem, key) => {
            return (
              <AboutItem
                key={key}
                image={aboutItem.image}
                name={aboutItem.name}
                description={aboutItem.description}
                link={aboutItem.link}
              />
            );
          })}
        </div>

        <Footer className = "footer"/>
    </div>
  )
}

export default Shoutouts