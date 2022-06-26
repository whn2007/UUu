import React from 'react'
import Footer from "../components/Footer";
import "../styles/Shoutouts.scss"
import ShoutOutItem from '../components/ShoutOutItem';
import { ShoutOutList } from "../helpers/ShoutOutList";
import { BallersList } from "../helpers/Ballers"
import { AnimeList } from "../helpers/Anime"

function Shoutouts() {
  return (
    <div className='shoutouts'>

        <div className='header'>
          <h1>Anime</h1>
        </div>

        <div className="aboutList">
          {AnimeList.map((aboutItem, key) => {
            return (
              <ShoutOutItem
                key={key}
                image={aboutItem.image}
                name={aboutItem.name}
                link={aboutItem.link}
              />
            );
          })}
        </div>

        <div className='header'>
          <h1>Ballers</h1>
        </div>

        <div className="aboutList">
          {BallersList.map((aboutItem, key) => {
            return (
              <ShoutOutItem
                key={key}
                image={aboutItem.image}
                name={aboutItem.name}
                link={aboutItem.link}
              />
            );
          })}
        </div>

        <div className='header'>
            <h1>Products</h1>
        </div>

        <div className="aboutList">
          {ShoutOutList.map((aboutItem, key) => {
            return (
              <ShoutOutItem
                key={key}
                image={aboutItem.image}
                name={aboutItem.name}
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