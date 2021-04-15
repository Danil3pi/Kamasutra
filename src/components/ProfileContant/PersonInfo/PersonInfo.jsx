import React from 'react';
import styles from './PersonInfo.module.css';


const PersonInfo = () => {
    return (
        <div className={styles.profile_contant}>
            <div className={styles.ava}>
                <img src="https://im0-tub-ru.yandex.net/i?id=954d3b7688aa8a67a5b0c8e1eecf7730&n=13" alt="" />
            </div>
            <div className={styles.profile_information}>
                <div className="name">
                    <strong>Danila</strong>
                </div>
                <div className="person_info">
                    <div>Date of birthday:</div>
                    <div>City:</div>
                    <div>Edication:</div>
                    <div>WebSite:</div>
                </div>
            </div>
        </div>
    );
};

export default PersonInfo;