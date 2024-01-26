//A new component below the song list for users to upload music files.
import React, { useState } from 'react';
import { FaCaretDown } from "react-icons/fa";
import { Button} from 'antd';
import styles from './MusicUploadForm.module.css'


const MusicUploadForm = () => {

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [loadings, setLoadings] = useState([])

  const toggleButton = () => {
    setIsButtonDisabled(!isButtonDisabled);
  };

  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    })

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  }

  return (
    <div className={styles.upload}>
      <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)} className={styles.btn} disabled={isButtonDisabled}>
        Download
      </Button>
      <div className={styles.dropdown}>
        <button className={styles.down}><FaCaretDown /></button>
        <div className={styles.down_content}>
          <p onClick={toggleButton}>.mp3</p>
          <p onClick={toggleButton}>.wav</p>
        </div>
      </div>
    </div>
  )

}

export default MusicUploadForm