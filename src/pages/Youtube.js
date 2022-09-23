import React from 'react'
import Footer from "../components/Footer";
import "../styles/Shoutouts.scss"
import YoutubeItem from '../components/YoutubeItem';
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


function Youtube() {
  return (
    <div className='shoutouts'>
        
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

    </div>
  )
}

export default Youtube