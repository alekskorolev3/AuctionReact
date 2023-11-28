import React from 'react'
import styles from '../styles/Lot.module.scss'

const Lot = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src="/img1.png" alt="lot-img" className={styles.image}/>
            </div>

            <div className={styles.innerContainer}>
                <div className={styles.titleContainer}>
                    <div className={styles.titleInnerContainer}>
                        <span className={styles.title}>Apple iPhone SE 2020 128Gb</span>
                        <img src="/saved.svg" alt="heart" className={styles.icon}/>
                    </div>

                    <div className={styles.priceContainer}>
                        <span className={styles.value}>545 р. </span>
                        <span className={styles.text}> начальная цена</span>
                    </div>

                    <div className={styles.priceContainer}>
                        <span className={styles.value}>5 р. </span>
                        <span className={styles.text}> шаг</span>
                    </div>
                </div>

                <div className={styles.subInfoContainer}>
                    <span className={styles.subtext}>Дата окончания: 10 окт. 15:20</span>
                    <span className={styles.subtext}>Участники: 2</span>
                    <span className={styles.subtext}>Минск, Первомайский</span>
                </div>
            </div>
        </div>
    )
}

export default Lot
