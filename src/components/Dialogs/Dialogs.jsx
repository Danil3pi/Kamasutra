
import styles from './Dialogs.module.css';
import Anton from './DialogsWithFriends/AntonDialog/AntonDialog.jsx';
import Max from './DialogsWithFriends/MaxDialog/MaxDialog.jsx';
import Diman from './DialogsWithFriends/DimanDialog/DimanDialog.jsx';

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


const Dialogs = (props) => {

    let DialogItems = props.state.dialogs.map(dialog => (<DialogItem to={dialog.id} 
        name={dialog.name} ava={dialog.ava}></DialogItem>));


    const lastSlash = window.location.pathname.lastIndexOf('/');
    //alert(window.location.pathname, lastSlash);

    const pathName = window.location.pathname
    const name = pathName.split('').splice(lastSlash + 1, window.location.pathname.length).join('');
    alert(name);

    return (
        <div className={styles.mainDialogWindow}>
            <BrowserRouter>
                <div className={styles.dialogList}>
                    {DialogItems}
                </div>

                < Route path="/dialogs/Anton" render={() => <Anton />} />
                < Route path="/dialogs/Max" component={Max} />
                {/* < Route path="/dialogs/Diman" component={(allDialogs) => (
                    <Message></Message>
                )} /> */}

            </BrowserRouter>
        </div>
    )
}

export default Dialogs;