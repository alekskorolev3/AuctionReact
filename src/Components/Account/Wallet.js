import React from 'react'
import styles from '../../styles/Wallet.module.scss'
import {Input} from "antd";

const Wallet = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Пополнить баланс</h3>

            <div className={styles.balanceContainer}>
                <span className={styles.text}>Баланс: </span>
                <div className={styles.valueContainer}>
                    <span className={styles.value}>650</span>
                    <span className={styles.currency}>BYN</span>
                </div>
            </div>

            <div className={styles.inputContainer}>
                <span className={styles.text}>Сумма для пополнения кошелька</span>
                <Input suffix="BYN" style={{maxWidth: '150px'}}/>
            </div>

            <button className={styles.button}>Пополнить</button>
        </div>
    )
}

export default Wallet;
