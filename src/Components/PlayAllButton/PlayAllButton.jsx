//A button to initiate playing all songs
import React from 'react'
import { FaPlay } from "react-icons/fa";
import { Dropdown } from 'antd';
import styles from './PlayAllButton.module.css'

const items = [
  {
    key: '1',
    label: '1st item',
  },
  {
    key: '2',
    label: '2nd item',
  },
  {
    key: '3',
    label: '3rd item',
  },
];

const PlayAllButton = () => {
  return (
    <div className={styles.allPlay}>
      <Dropdown.Button
        menu={{
          items,
          //onClick: onMenuClick,
        }}
      >
        <FaPlay className={styles.play} />
        Play All
      </Dropdown.Button>
    </div>
  )
}

export default PlayAllButton