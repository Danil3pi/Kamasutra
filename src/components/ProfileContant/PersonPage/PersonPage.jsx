import React from 'react';
import styles from './PersonPage.module.css';

import PersonInfo from '../PersonInfo/PersonInfo.jsx'
import MyPosts from '../MyPosts/MyPosts.jsx';

const PersonPage = () => {
    return (
        <div className={styles.contant_main}>

            <PersonInfo />
            <textarea></textarea>
            <button className={styles.button}>Add Post</button>
            <MyPosts />
        </div>
    );
};

export default PersonPage; 