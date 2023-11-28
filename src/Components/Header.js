import React from 'react'
import styles from '../styles/Header.module.scss'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.container}>
            <Link to='/account'>
                <img src="/menu.svg" alt="menu-icon"/>
            </Link>

            <div className={styles.innerContainer}>
                <div className={styles.balanceContainer}>
                    <span className={styles.title}>Баланс</span>

                    <div className={styles.valueContainer}>
                        <span className={styles.value}>650</span>
                        <span className={styles.currency}>BYN</span>
                    </div>
                </div>

                <img src="/Avatar.svg" alt="avatar" className="avatar"/>
            </div>
        </header>
    )
}

export default Header;
