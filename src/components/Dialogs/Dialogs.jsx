import React from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';

import styled from 'styled-components';

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
                <img src={props.ava} alt="ava" />
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

    let DialogItems = props.dialogs.map(dialog => (<DialogItem to={dialog.id}
        name={dialog.name} ava={dialog.ava}></DialogItem>));

    let Routs = props.dialogs.map((item, index) => (
        <Route key={index} path={`/dialogs/${item.name}`} render={() => (
            item.messages.map((message) => (
                <Message messageType={message.type}>{message.text}</Message>))
        )
        }
        />
    ));

    const onMessageTyping = (event) => {
        let newTextMessage = event.target.value;
        props.supdateText(newTextMessage);
    };

    const onMessageSend = () => {
        props.sendMessage();
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
                        <textarea onChange={onMessageTyping}
                            value={props.contantMessage}
                            placeholder="Enter your message:" />
                        <button onClick={onMessageSend}>Send</button>
                    </MessageSentingSection>
                </DialogColumn>

            </BrowserRouter>
        </MainDialogWindow>
    )
}

export default Dialogs;