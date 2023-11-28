import React from 'react'
import styles from '../styles/Search.module.scss'
import {Input} from "antd";
const { Search } = Input;


const SearchInput = () => {

    const onSearch = (value, _e, info) => console.log(info?.source, value);

    return (
        <div className={styles.container}>
            <Search placeholder="Поиск лотов" onSearch={onSearch}/>
        </div>
    )
}

export default SearchInput
