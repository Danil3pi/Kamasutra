import React from 'react';
import styles from './Post.module.css';

import {useState} from 'react'

const Post = (props) => {

    let [count, IncrementLikes] = useState(props.post.likes_count)

    

    return (
        <div className = {styles.post}>
            <div>{props.post.message}</div>
            <div >
                <button onClick={() => IncrementLikes(++count)}> {/* Даня привыкай это другой язык не нунжно сравнивать его с другими*/}
                    <img alt="ava" src='https://im0-tub-ru.yandex.net/i?id=aa6332ad06608319e37ec717fd8d35f7&n=13' />
                </button>
                {count}
            </div>
        </div>
    );
};

export default Post; 