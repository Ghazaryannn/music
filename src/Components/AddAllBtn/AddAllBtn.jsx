// A button to add all songs to a queue
import React from 'react'
import { FaPlus } from "react-icons/fa";
import { Dropdown } from 'antd';
import styles from './AddAllBtn.module.css'


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

const AddAllBtn = () => {

  return (
    <div className={styles.addall}>
      <Dropdown.Button
      menu={{
        items
      }}
    >
      <FaPlus />
      Add All
    </Dropdown.Button>
    </div>
  )
}

export default AddAllBtn