import React from 'react'
import { FaPlay, FaHeart, FaCheck, FaShare, FaCaretDown, FaPause } from "react-icons/fa";
import styles from './SongRow.module.css'
import second from '../../utils/seconds';
import { useContext } from 'react';
import { AudiaoContext } from '../../context/AudioContext';
import cn from 'classnames'
import MusicUploadForm from '../MusicUploadForm/MusicUploadForm';

const SongRow = (track) => {
  const { id, preview, title, artists, duration } = track
  const { handleAudio, currentTrack, isPlaying } = useContext(AudiaoContext)
  const icCurrentTrack = currentTrack.id === track.id
  const secoundMMSS = second(duration)
  return (
    <div className={cn(styles.track, icCurrentTrack && styles.playing)}>

      <div className={styles.play}>
        {
          icCurrentTrack && isPlaying ? <FaPause onClick={() => handleAudio(track)}/> : <FaPlay onClick={() => handleAudio(track)} />
        }
        <img className={styles.preview} src={preview} alt="img" />
      </div>

      <div className={styles.title}>
        <b>{title}</b>
      </div>

      <div className={styles.artists}>
        <p>{artists}</p>
      </div>

      <div className={styles.id}>
        <b>{id}</b>
      </div>

      <div className={styles.time}>
        <p>{secoundMMSS}</p>
      </div>

      <div className={styles.download}>
        <MusicUploadForm />
      </div>

      <div className={styles.action}>
        <ul>
          <li><FaHeart /></li>
          <li><FaCheck /></li>
          <li><FaShare /></li>
          <li><FaCaretDown /></li>
        </ul>
      </div>

    </div>
  )
}

export default SongRow