//A component to display the list of songs

import React, {useState} from 'react'
import Header from '../Header/Header'
import styles from './SongList.module.css'
import SongsTitle from '../SongsTitle/SongsTitle'
import SongRow from '../SongRow/SongRow'
import { track } from '../../assets/db'


const SongList = () => {
  const [searchTrack, setSearchTrack] = useState('')
  const filteredTrack = track.filter(track => {
    return track.title.toLocaleLowerCase().includes(searchTrack.toLowerCase())
  })
  return (
    <div className={styles.main}>
      <Header setSearchTrack={setSearchTrack}/>
      <SongsTitle/>
      <div className={styles.list}>
        {
          filteredTrack.map((track) => (
            <SongRow {...track}  key={track.id}/>
          ))
        }
      </div>
    </div>
  )
}

export default SongList