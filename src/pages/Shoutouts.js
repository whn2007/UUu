import React from 'react'
import Footer from "../components/Footer";
import "../styles/Shoutouts.scss"
import ShoutOutItem from '../components/ShoutOutItem';
import { ShoutOutList } from "../helpers/ShoutOutList";
import { BallersList } from "../helpers/Ballers"
import { AnimeList } from "../helpers/Anime"
import { MovieList } from "../helpers/Movie"
import { ShowsList } from '../helpers/Shows';
import { NovelsList } from '../helpers/Novels';
import { PlaysList } from '../helpers/Plays';
import { RestaurantsList } from '../helpers/Restaurants';
import { BooksList } from '../helpers/Books';
import { MusicList } from '../helpers/Music';

function Shoutouts() {
  return (
    <div className='shoutouts'>
      
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
          <h1>Music</h1>
        </div>

        <div className="aboutList">
          {MusicList.map((aboutItem, key) => {
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
          <h1>Restaurants</h1>
        </div>

        <div className="aboutList">
          {RestaurantsList.map((aboutItem, key) => {
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
          <h1>Novels</h1>
        </div>

        <div className="aboutList">
          {NovelsList.map((aboutItem, key) => {
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
          <h1>Books</h1>
        </div>

        <div className="aboutList">
          {BooksList.map((aboutItem, key) => {
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
          <h1>Plays</h1>
        </div>

        <div className="aboutList">
          {PlaysList.map((aboutItem, key) => {
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
          <h1>Movies</h1>
        </div>

        <div className="aboutList">
          {MovieList.map((aboutItem, key) => {
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
          <h1>Shows</h1>
        </div>

        <div className="aboutList">
          {ShowsList.map((aboutItem, key) => {
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