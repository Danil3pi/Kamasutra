import React from 'react';
import styles from './PersonPage.module.css';

import PersonInfo from '../PersonInfo/PersonInfo.jsx'
import MyPosts from '../MyPosts/MyPosts.jsx';

const PersonPage = (props) => {
    let newPost = React.createRef();

    let addPost = () => {
        props.addPost();
        props.updatePostText('');
    };

    let changeAreaText = () => { 
        let postText = newPost.current.value;
        //debugger;
        props.updatePostText(postText);
    };

    return (
        <div className={styles.contant_main}>

            <PersonInfo />
            {/* Метод onchange срабатывает каждый раз при попытке изменить содержисое textarea */}
            <textarea onChange={changeAreaText} ref={newPost} value={props.profileData.newPostText}/>
            <button onClick={ addPost } className={styles.submit}>Add Post</button>
            <MyPosts posts={props.profileData.posts}/>
        </div>
    );
};

export default PersonPage; 