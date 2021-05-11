import React from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';

import styled from 'styled-components';

import { createActionTyping, createActionSendingMessage } from '../../redux/dialogs-reducer'

//Если прописать BrowserRouter перед Route, то смены е будет и будет просто отображать пустая страница
// А ткак нормаьно!

const DialigWithSmb = styled(Link)`
    overflow: hidden;
    
    width: 55%;
    height: 60px;
    margin: 10px auto;
    padding: 10px;
    font-size: 30px;

    border: solid black 1px;
    border-radius: 9px;


    display: grid;
    grid-template-columns: 2fr 3fr;

    background-color: #fff;

    text-decoration: none;
    color: black;

    transition: .3s;

    &:hover{
        color: white;
        background-color: rgb(230, 212, 56);
    }

    img{
        width: 50px;
        border-radius: 50%;
    }
`;

const DialogItem = (props) => {
    return (
        <div>
            <DialigWithSmb to={"/dialogs/" + props.to}>
                <img src={props.ava} alt="ava"/>
                {props.name}
            </DialigWithSmb>
        </div>
    );
};

const Message = styled.div`
    font-size: 30px;
    width: 50%;

    border-radius: 10px;
    background-color: #fff;

    margin: 10px;
    display: flex;
    align-items: center;
    padding: 10px;

    align-self: ${({ messageType }) => messageType === 'incoming' ?
        'flex-start' : 'flex-end'};
`;

const DialogColumn = styled.div`
    display: flex;
    flex-direction: column;

    background-color: rgb(87, 27, 27);
`;

const MessageSentingSection = styled.div`
    display: flex;
    width: 100%;
`;

const MainDialogWindow = styled.div`
    background-color: blanchedalmond;
    height: 100vh;

    display: grid;
    grid-template-columns: 2fr 4fr; 
`;

const DialogList = styled.div`
    background-color: blueviolet;
`;


const Dialogs = (props) => {

    let DialogItems = props.state.dialogs.map(dialog => (<DialogItem to={dialog.id}
        name={dialog.name} ava={dialog.ava}></DialogItem>));

    let Routs = props.state.dialogs.map((item, index) => (
        <Route key={index} path={`/dialogs/${item.name}`} render={() =>(
                item.messages.map((message) => (
                    <Message messageType={message.type}>{message.text}</Message>))
                )
             } 
        />
    )); 

    const getGeter = () => {
        //Если на страниуе сообщений можно будет переходить еще на другие страницы, то это уже будет индекс не последненго слеша.
        //И имя пользователя будет уже другое
        let path = window.location.pathname;
        const lastIndexSlash = path.lastIndexOf('/');

        const friendName = path.split('').splice(lastIndexSlash + 1).join('');

        return friendName;
    };

    const typingMessage = (event) => {
        let newTextMessage = event.target.value;
        props.dispatch(createActionTyping(newTextMessage));
    };

    const sendMessage = () => {
        const friend = getGeter();
        props.dispatch(createActionSendingMessage(friend))
    };
    
    return (
        <MainDialogWindow>
            <BrowserRouter>
                <DialogList>
                    {DialogItems}
                </DialogList>

                <DialogColumn>
                {Routs}
                    <MessageSentingSection>
                        <textarea   onChange={typingMessage} 
                                    value={props.state.contantMessage} 
                                    placeholder="Enter your message:" />
                        <button onClick={sendMessage}>Send</button>
                    </MessageSentingSection>
                </DialogColumn>

            </BrowserRouter>
        </MainDialogWindow>
    )
}

export default Dialogs;