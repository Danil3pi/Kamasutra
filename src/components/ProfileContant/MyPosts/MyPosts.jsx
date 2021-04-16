import React from 'react';
import styles from './MyPosts.module.css';

import Post from './Posts/Post.jsx'

const MyPosts = (props) => {

    return (
        <div className = {styles.myPosts}>
            <Post message="How are you?" likes_count="12"/>
            <Post message="Hello, world!" likes_count="12"/>
        </div>
    );
};

export default MyPosts; 