import React from 'react';
import styles from './MyPosts.module.css';

import Post from './Posts/Post.jsx'

const MyPosts = (props) => {

    let postsArr = props.posts.map( post => <Post post={post}/>);

    return (
        <div className = {styles.myPosts}>
            {postsArr}
        </div>
    );
};

export default MyPosts; 