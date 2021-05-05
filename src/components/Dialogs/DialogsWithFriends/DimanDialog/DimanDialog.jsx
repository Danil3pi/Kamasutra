import styles from '../../Dialogs.module.css'

import Dialogs from '../../DislogsDB/AllDialogs';

const DimanDialog = () => {
    const dimaDialog = Dialogs.Diman.map( item => <div className={styles.sms + ' ' + styles[item.class]}>{item.text}</div>)

    return(
        <div className={styles.someDialog}>
            {dimaDialog}
        </div>
    )
}

export default DimanDialog;