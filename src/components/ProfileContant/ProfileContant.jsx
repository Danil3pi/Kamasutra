import React from 'react';
import styles from './ProfileContant.module.css';

import PersonPage from './PersonPage/PersonPage.jsx'

//Интересно можно ли обойтись без PesonPage и просто здесь разместить все компоненты
const ProfileContant = (props) => {
    
    return (
        <div className={styles.contant}>
            <div className={styles.contant_header}></div>
            <PersonPage profileData={props.profileData} 
                        addPost={props.addPost} 
                        updatePostText={props.updatePostText}/>
        </div>
    );
};

export default ProfileContant;