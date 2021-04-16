import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {

    return (
        <div className = {styles.post}>
            <div>{props.message}</div>
            <div >
                <button><img class="icone" src='https://www.flaticon.com/svg/vstatic/svg/833/833472.svg?token=exp=1618545127~hmac=b27be2fea04c4dc4ac7d225f6ad71aa5' /></button>
                {props.likes_count}
            </div>
        </div>
    );
};

export default Post; 