
import styles from './Dialogs.module.css';
import Anton from './AntonDialog/AntonDialog.jsx';
import Max from './MaxDialog/MaxDialog.jsx';
import Diman from './DimanDialog/DimanDialog.jsx';

import { Link, Route, BrowserRouter } from 'react-router-dom';


//Если прописать BrowserRouter перед Route, то смены е будет и будет просто отображать пустая страница
// А ткак нормаьно!

const DialogItem = (props) => {
    return (
        <div className={styles.dialogList}>
            <Link to={"/dialogs" + props.to} className={styles.dialogWith}>
                <img src={props.ava} />
                {props.name}
            </Link>
        </div>
    );
}

const Dialogs = (props) => {

    let DialogItems = props.state.dialogs.map(dialog => (<DialogItem to={dialog.id} name={dialog.name} ava={dialog.ava}></DialogItem>))

    return (
        <div className={styles.mainDialogWindow}>
            <BrowserRouter>
                <div className={styles.dialogList}>
                    {DialogItems}
                </div>

                < Route path="/dialogs/Anton" component={Anton} />
                < Route path="/dialogs/Max" component={Max} />
                < Route path="/dialogs/Diman" component={Diman} />

            </BrowserRouter>
        </div>
    )
}

export default Dialogs;