import React from 'react'
import styles from '../styles/Notification.module.scss'

const Notification = () => {
    return (
        <div className={styles.container}>
            <img src="/notification_ok.svg" alt="n_ok" className={styles.icon}/>
            <div className={styles.innerContainer}>
                <span className={styles.title}>Вы выиграли лот <b>Apple iPhone SE 2020 128Gb</b></span>
                <span className={styles.date}>13 ноя. 13:20</span>
            </div>
        </div>
    )
}

export default Notification
