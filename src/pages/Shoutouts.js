import React from 'react'
import Footer from "../components/Footer";
import "../styles/Shoutouts.scss"
import ShoutOutItem from '../components/ShoutOutItem';
import { ProjectsList } from "../helpers/ProjectsList";
import { BallersList } from "../helpers/Ballers"
import { AnimeList } from "../helpers/Anime"
import { MovieList } from "../helpers/Movie"
import { ShowsList } from '../helpers/Shows';
import { NovelsList } from '../helpers/Novels';
import { PlaysList } from '../helpers/Plays';
import { RestaurantsList } from '../helpers/Restaurants';
import { BooksList } from '../helpers/Books';
import { MangaList } from '../helpers/MangaList'
import { VideoGameList } from '../helpers/VideoGameList'
import { Link } from 'react-router-dom';
import YoutubeIcon from '../assets/youtube.png'
import { VillainList } from '../helpers/VillainList';
import { PodcastsList } from '../helpers/PodcastsList';

function Shoutouts() {
  return (
    <div className='shoutouts'>

        <div className='header'>
          <h1>Ballers 🏀</h1>
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
          <h1>Restaurants 🥩</h1>
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
          <h1>Novels 📚</h1>
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
          <h1>Books 📖</h1>
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
          <h1>Podcasts 📻</h1>
        </div>

        <div className="aboutList">
          {PodcastsList.map((aboutItem, key) => {
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
          <h1>Plays 🎥</h1>
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
          <h1>Anime 👺</h1>
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
          <h1>Manga 📕</h1>
        </div>

        <div className="aboutList">
          {MangaList.map((aboutItem, key) => {
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
          <h1>Games 🎮</h1>
        </div>

        <div className="aboutList">
          {VideoGameList.map((aboutItem, key) => {
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
          <h1>Movies 🎬</h1>
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
          <h1>Shows 📺</h1>
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
            <h1>Projects 🎁</h1>
        </div>

        <div className="aboutList">
          {ProjectsList.map((aboutItem, key) => {
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
            <h1>Videos 📹</h1>
        </div>

        <a className='youtubeButton' href='https://youtube.uuu.vip/'>
          <img src={YoutubeIcon}/>
        </a>

        <hr/>

        <div className='header'>
            <h1>Villains ☠️</h1>
            <h2>I forgive quickly but I never forget</h2>
            <p>Become a <a href='https://merch.uuu.vip/collections/uuu-merch' target='none'>patron</a> of UUu LLC to be forgiven</p>
        </div>

        <div className="aboutList">
          {VillainList.map((aboutItem, key) => {
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