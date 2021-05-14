import React from 'react';
import styles from './Profile.module.css';

import PersonPage from './PersonPage/PersonPage.jsx'

//Интересно можно ли обойтись без PesonPage и просто здесь разместить все компоненты
const Profile = (props) => {
    
    return (
        <div className={styles.contant}>
            <div className={styles.contant_header}></div>
            <PersonPage profileData={props.profileData} 
                        dispatch={props.dispatch}/> 
        </div>
    );
};

export default Profile;