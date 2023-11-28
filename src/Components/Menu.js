import React from 'react'
import styles from '../styles/Menu.module.scss'
import {Link} from "react-router-dom";

const Menu = () => {

    return (
        <section className={styles.container}>
            <Link to='/' className={styles.buttonContainer}>
                <img src="/home.svg" alt="home" className={styles.icon}/>
                <span className={styles.title}>Главная</span>
            </Link>

            <Link to='/account/saved' className={styles.buttonContainer}>
                <img src="/saved.svg" alt="saved" className={styles.icon}/>
                <span className={styles.title}>Избранное</span>
            </Link>

            <Link to='/account/cart' className={styles.buttonContainer}>
                <img src="/cart.svg" alt="cart" className={styles.icon}/>
                <span className={styles.title}>Корзина</span>
            </Link>

            <Link to='/account/notifications' className={styles.buttonContainer}>
                <img src="/notification.svg" alt="notifications" className={styles.icon}/>
                <span className={styles.title}>Уведомления</span>
            </Link>

            <Link to='/account' className={styles.buttonContainer}>
                <img src="/profile.svg" alt="account" className={styles.icon}/>
                <span className={styles.title}>Профиль</span>
            </Link>
        </section>
    )
}

export default Menu
