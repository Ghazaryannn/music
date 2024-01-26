import React from 'react'
import PlayAllButton from '../PlayAllButton/PlayAllButton'
import AddAllBtn from '../AddAllBtn/AddAllBtn'
import SearchSongs from '../SearchSongs/SearchSongs'
import styles from './Header.module.css'

const Header = ({setSearchTrack}) => {
  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <PlayAllButton />
        <AddAllBtn />
      </div>
      <div className={styles.header_right}>
        <SearchSongs  setSearchTrack={setSearchTrack}/>
      </div>

    </div>
  )
}

export default Header