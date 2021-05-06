import styles from '../../Dialogs.module.css'

import allDialogs from '../../../../redux/AllDialogs';

const DimanDialog = () => {
    const dimaDialog = allDialogs.Diman.map( item => <div className={styles.sms + ' ' + styles[item.class]}>{item.text}</div>)

    return(
        <div className={styles.someDialog}>
            {dimaDialog}
        </div>
    )
}

export default DimanDialog;