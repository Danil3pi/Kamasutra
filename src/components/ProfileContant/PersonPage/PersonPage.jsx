import React from 'react';
import styles from './PersonPage.module.css';

import PersonInfo from './PersonInfo/PersonInfo.jsx'
import MyPosts from './MyPosts/MyPosts.jsx';

import {addPostActionCreator, updatePostTextActionCreator} from '../../../redux/profile-reducer';
 
const PersonPage = (props) => {
    let newPost = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let changeAreaText = () => { 
        let newPostText = newPost.current.value;
        props.dispatch(updatePostTextActionCreator(newPostText));
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