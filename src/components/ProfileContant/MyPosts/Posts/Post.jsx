import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {

    return (
        <div className = {styles.post}>
            <div>{props.message}</div>
            <div >
                <button><img src='https://im0-tub-ru.yandex.net/i?id=aa6332ad06608319e37ec717fd8d35f7&n=13' /></button>
                {props.likes_count}
            </div>
        </div>
    );
};

export default Post; 