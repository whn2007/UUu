import React from 'react'
import Footer from "../components/Footer";
import "../styles/Shoutouts.scss"
import ShoutOutItem from '../components/ShoutOutItem';
import YoutubeItem from '../components/YoutubeItem';
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
//Youtube Videos
import { AnimeVideoList } from '../helpers/AnimeVideos';
import { AsianList } from '../helpers/AsianVideos';
import { CuteList } from '../helpers/CuteVideos';
import { DanceList } from '../helpers/DanceVideos';
import { FlexList } from '../helpers/FlexVideos';
import { GamingList } from '../helpers/GamingVideos';
import { GunsList } from '../helpers/GunsVideos';
import { InformationalList } from '../helpers/InformationalVideos';
import { InstrumentalList } from '../helpers/InstrumentalVideos';
import { InterviewList } from '../helpers/InterviewVideos';
import { MagicList } from '../helpers/MagicVideos';
import { MartialArtsList } from '../helpers/MartialArtsVideos';
import { MotivationalList } from '../helpers/MotivationalVideos';
import { MovieVideoList } from '../helpers/MovieVideos';
import { PodcastList } from '../helpers/PodcastVideos';
import { PoliticalList } from '../helpers/PoliticalVideos';
import { SportsList } from '../helpers/SportsVideos';
import { TvList } from '../helpers/TvVideos';
import { VlogsList } from '../helpers/VlogsVideos';
import {ShortsList} from '../helpers/ShortsVideos'
import { MangaList } from '../helpers/MangaList'
import { VideoGameList } from '../helpers/VideoGameList'


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
          <h1>Manga</h1>
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
          <h1>Video Games</h1>
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

        <div className='header'>
          <h1>Youtube Shorts</h1>
        </div>

        <div className="youtubeList">
          {ShortsList.map((aboutItem, key) => {
            return (
              <YoutubeItem
                key={key}
                link={aboutItem.link}
              />
            );
          })}
        </div>

        <div className='header'>
          <h1>Anime & Cartoons</h1>
        </div>

        <div className="youtubeList">
          {AnimeVideoList.map((aboutItem, key) => {
            return (
              <YoutubeItem
                key={key}
                link={aboutItem.link}
              />
            );
          })}
        </div>

        <div className='header'>
          <h1>Asian Media</h1>
        </div>

        <div className="youtubeList">
          {AsianList.map((aboutItem, key) => {
            return (
              <YoutubeItem
                key={key}
                link={aboutItem.link}
              />
            );
          })}
        </div>

        <div className='header'>
          <h1>Cute Videos</h1>
        </div>

        <div className="youtubeList">
          {CuteList.map((aboutItem, key) => {
            return (
              <YoutubeItem
                key={key}
                link={aboutItem.link}
              />
            );
          })}
        </div>

        <div className='header'>
          <h1>Dance Videos</h1>
        </div>

        <div className="youtubeList">
          {DanceList.map((aboutItem, key) => {
            return (
              <YoutubeItem
                key={key}
                link={aboutItem.link}
              />
            );
          })}
        </div>

        <div className='header'>
          <h1>Flex Videos</h1>
        </div>

        <div className="youtubeList">
          {FlexList.map((aboutItem, key) => {
            return (
              <YoutubeItem
                key={key}
                link={aboutItem.link}
              />
            );
          })}
        </div>


        <div className='header'>
          <h1>Gaming Videos</h1>
        </div>

        <div className="youtubeList">
          {GamingList.map((aboutItem, key) => {
            return (
              <YoutubeItem
                key={key}
                link={aboutItem.link}
              />
            );
          })}
        </div>

        <div className='header'>
          <h1>Gun Videos</h1>
        </div>

        <div className="youtubeList">
          {GunsList.map((aboutItem, key) => {
            return (
              <YoutubeItem
                key={key}
                link={aboutItem.link}
              />
            );
          })}
        </div>

        <div className='header'>
          <h1>Informationals</h1>
        </div>

        <div className="youtubeList">
          {InformationalList.map((aboutItem, key) => {
            return (
              <YoutubeItem
                key={key}
                link={aboutItem.link}
              />
            );
          })}
        </div>

        <div className='header'>
          <h1>Singing & Instrumental Videos</h1>
        </div>

        <div className="youtubeList">
          {InstrumentalList.map((aboutItem, key) => {
            return (
              <YoutubeItem
                key={key}
                link={aboutItem.link}
              />
            );
          })}
        </div>

        <div className='header'>
          <h1>Interviews</h1>
        </div>

        <div className="youtubeList">
          {InterviewList.map((aboutItem, key) => {
            return (
              <YoutubeItem
                key={key}
                link={aboutItem.link}
              />
            );
          })}
        </div>

        <div className='header'>
          <h1>Magic Videos</h1>
        </div>

        <div className="youtubeList">
          {MagicList.map((aboutItem, key) => {
            return (
              <YoutubeItem
                key={key}
                link={aboutItem.link}
              />
            );
          })}
        </div>

        <div className='header'>
          <h1>Martial Arts</h1>
        </div>

        <div className="youtubeList">
          {MartialArtsList.map((aboutItem, key) => {
            return (
              <YoutubeItem
                key={key}
                link={aboutItem.link}
              />
            );
          })}
        </div>

        <div className='header'>
          <h1>Motivational Videos</h1>
        </div>

        <div className="youtubeList">
          {MotivationalList.map((aboutItem, key) => {
            return (
              <YoutubeItem
                key={key}
                link={aboutItem.link}
              />
            );
          })}
        </div>

        <div className='header'>
          <h1>Movies & Skits</h1>
        </div>

        <div className="youtubeList">
          {MovieVideoList.map((aboutItem, key) => {
            return (
              <YoutubeItem
                key={key}
                link={aboutItem.link}
              />
            );
          })}
        </div>

        <div className='header'>
          <h1>Podcasts</h1>
        </div>

        <div className="youtubeList">
          {PodcastList.map((aboutItem, key) => {
            return (
              <YoutubeItem
                key={key}
                link={aboutItem.link}
              />
            );
          })}
        </div>

        <div className='header'>
          <h1>Political Videos</h1>
        </div>

        <div className="youtubeList">
          {PoliticalList.map((aboutItem, key) => {
            return (
              <YoutubeItem
                key={key}
                link={aboutItem.link}
              />
            );
          })}
        </div>

        <div className='header'>
          <h1>Sports Videos</h1>
        </div>

        <div className="youtubeList">
          {SportsList.map((aboutItem, key) => {
            return (
              <YoutubeItem
                key={key}
                link={aboutItem.link}
              />
            );
          })}
        </div>

        <div className='header'>
          <h1>Television Videos</h1>
        </div>

        <div className="youtubeList">
          {TvList.map((aboutItem, key) => {
            return (
              <YoutubeItem
                key={key}
                link={aboutItem.link}
              />
            );
          })}
        </div>

        <div className='header'>
          <h1>Video Logs</h1>
        </div>

        <div className="youtubeList">
          {VlogsList.map((aboutItem, key) => {
            return (
              <YoutubeItem
                key={key}
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