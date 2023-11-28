import React from 'react'
import styles from '../styles/Home.module.scss'
import Lot from "./Lot";
import SearchInput from "./SearchInput";

const Home = () => {
    return (
        <section className={styles.container}>

            <div className={styles.searchContainer}>
                <SearchInput/>

                <div className={styles.categoryContainer}>
                    <span>Все категории</span>
                </div>
            </div>

            <div className={styles.innerContainer}>
                <div className={styles.titleContainer}>
                    <span className={styles.title}>Последние лоты</span>

                    <div className={styles.filterContainer}>
                        <span>Время до завершения: по возрастанию</span>
                    </div>
                </div>

                <div className={styles.lotContainer}>
                    <Lot/>
                    <Lot/>
                    <Lot/>
                    <Lot/>
                </div>
            </div>

        </section>
    )
}

export default Home
