import React from 'react'
import styles from '../../styles/Notifications.module.scss'
import Notification from "../Notification";

const Notifications = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Уведомления</h3>

            <div className={styles.innerContainer}>
                <Notification/>
                <Notification/>
                <Notification/>
            </div>
        </div>
    )
}

export default Notifications;
