import React from 'react'
import styles from '../../styles/Saved.module.scss'
import Lot from "../Lot";

const Saved = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h3 className={styles.title}>Избранное</h3>
                <span className={styles.count}>Объявлений: 3</span>
            </div>

            <div className={styles.lotContainer}>
                <Lot/>
                <Lot/>
                <Lot/>
            </div>
        </div>
    )
}

export default Saved
