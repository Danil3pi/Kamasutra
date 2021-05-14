import React from 'react';

import styled from 'styled-components';

import HeaderImage from '../../images/Header.png'
import MyAva from '../../images/MyAva.jpg'
import Button from '../Button';

import {IoHeart} from 'react-icons/io5'

import {addPostActionCreator, updatePostTextActionCreator} from '../../redux/profile-reducer'

const ProfileContainer = styled.div`
    
`;

const ProfileHeader = styled.img`
    object-fit: cover;

    max-width: 860px;  //????????????????????????????????????
`;

const InfoSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;

    background-color: #7fd285;

    position: relative;
`;

const Ava = styled.img`
    width: 100px;

    border-radius: 50%;

    position: absolute;
    top: 5px;
    left: 20px;
`;

const PersonInfo = styled.div`
    margin: 0 100px;
`;

const PostSection = styled.div`

`;

const Post = styled.div`
    padding: 20px 40px;
    margin: 5px;

    background-color: #bde8ae;

    border-radius: 50px;

    font-size: 20px;
`;

const Like = styled(IoHeart)`
    display: block;
    font-size : 30px;
    cursor: pointer;
`

const Container = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 1fr;
`;

const ColumnLeft = styled.div``;
const Friends = styled.div``;
const Presents = styled.div``;

const NewProfile = (props) => {

    const typingPost = (event) => {
        const postText = event.target.value;

        return props.dispatch(updatePostTextActionCreator(postText));
    }

    const addPost = () => {
        return props.dispatch(addPostActionCreator())
    }

    return (
        <ProfileContainer>
            <ProfileHeader src={HeaderImage} alt="Header"/>

            <InfoSection>
                <Ava src={MyAva} alt="AVA"/>
                <PersonInfo >
                <ul>
                    <li>DAN</li>
                    <li>Pisatew</li>
                    <li>sdfsadf</li>
                    <li>sdfsdf</li>
                </ul>
                </PersonInfo>

                <textarea value={props.state.newPostText} onChange={typingPost}></textarea>
                <Button onClick={addPost}>Add Post</Button>
            </InfoSection>

            <Container>
                <ColumnLeft>
                    <Friends>Friends</Friends>
                    <Presents>Presents</Presents>                
                </ColumnLeft>
                <PostSection>
                {props.state.posts.map((item, index) => (
                    <Post >
                        {item.message}
                        <Like />
                        {item.likes_count}
                    </Post>
                ))}
            </PostSection>
            </Container>
        </ProfileContainer>
    )
}

export default NewProfile
