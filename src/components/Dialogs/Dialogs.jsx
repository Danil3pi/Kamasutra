
import styles from './Dialogs.module.css';


import { Link, Route, BrowserRouter } from 'react-router-dom';

import styled from 'styled-components'

//Если прописать BrowserRouter перед Route, то смены е будет и будет просто отображать пустая страница
// А ткак нормаьно!

const DialogItem = (props) => {
    return (
        <div className={styles.dialogList}>
            <Link to={"/dialogs/" + props.to} className={styles.dialogWith}>
                <img src={props.ava} />
                {props.name}
            </Link>
        </div>
    );
};

const Message = styled.div`
    font-size: 30px;
    width: 50%;

    border-radius: 10px;
    background-color: #fff;

    margin: 20px;
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

const SectionSentingMessage = styled.div`
    display: flex;
`;

const Dialogs = (props) => {

    let DialogItems = props.state.dialogs.map(dialog => (<DialogItem to={dialog.id}
        name={dialog.name} ava={dialog.ava}></DialogItem>));

    //     debugger;
    // let Routs = Object.keys(props.dialogs);
    //     alert(Routs);
    let Routers = Object.keys(props.dialogs).map((item) => (
        < Route path={`/dialogs/${item}`} component={() => (
            props.dialogs[item].map((mess) => (
                <Message messageType={mess.type}>{mess.text}</Message>
            ))
        )} />
    ))

    // const lastSlash = window.location.pathname.lastIndexOf('/');
    // //alert(window.location.pathname, lastSlash);

    // const pathName = window.location.pathname
    // const name = pathName.split('').splice(lastSlash + 1, window.location.pathname.length).join('');
    // alert(name);

    return (
        <div className={styles.mainDialogWindow}>
            <BrowserRouter>
                <div className={styles.dialogList}>
                    {DialogItems}
                </div>

                {/* < Route path="/dialogs/Anton" render={() => <Anton />} />
                < Route path="/dialogs/Max" component={Max} />
                < Route path="/dialogs/Diman" component={(allDialogs) => (
                    <Message></Message>
                )} /> */}
                <DialogColumn>
                    {Routers}
                    <SectionSentingMessage>
                        <textarea></textarea>
                        <button>Send</button>
                    </SectionSentingMessage>
                </DialogColumn>

            </BrowserRouter>
        </div>
    )
}

export default Dialogs;