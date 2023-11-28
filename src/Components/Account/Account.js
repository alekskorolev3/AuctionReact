import React from 'react'
import styles from '../../styles/Account.module.scss'
import {Rate} from "antd";
import {Link} from "react-router-dom";

const Account = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Мой профиль</h3>

            <div className={styles.profileContainer}>
                <img src="/Avatar.svg" alt="avatar" className={styles.avatar}/>

                <div className={styles.innerProfileContainer}>
                    <span className={styles.name}>Владислав Андреевич</span>
                    <Rate allowHalf defaultValue={2.5} />
                </div>
            </div>


            <div className={styles.buttonContainer}>
                <Link to='/account/create' className={styles.profileLink}>
                    <div className={styles.profileButtonContainer}>
                        <img src="/button_icon_1.svg" alt="btn_icon" className="buttonIcon"/>
                        <span className={styles.text}>Создать лот</span>
                    </div>
                </Link>

                <Link to='/account/my_ads' className={styles.profileLink}>
                    <div className={styles.profileButtonContainer}>
                        <img src="/button_icon_1.svg" alt="btn_icon" className="buttonIcon"/>
                        <span className={styles.text}>Мои объявления</span>
                    </div>
                </Link>

                <Link to='/account/wallet' className={styles.profileLink}>
                    <div className={styles.profileButtonContainer}>
                        <img src="/button_icon_1.svg" alt="btn_icon" className="buttonIcon"/>
                        <span className={styles.text}>Пополнить баланс</span>
                    </div>
                </Link>

                <Link to='/logout' className={styles.profileLink}>
                    <div className={styles.profileButtonContainer}>
                        <img src="/button_icon_1.svg" alt="btn_icon" className="buttonIcon"/>
                        <span className={styles.text}>Выход</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Account
