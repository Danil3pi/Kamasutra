import styles from '../../Dialogs.module.css'

const AntonDialog = () => {

    // Пока что не получится сделать массив диалогов потому, что там же должны быть сообзения с разными классами, и если это сделать сейчас, получатся сначала сообщения друга, а потом уже

    return(
        <div className={styles.someDialog}>
            <div className={styles.sms}>
                    Привет
                </div>

                <div className={styles.sms}>
                    Как дела?
                 </div>

                <div className={styles.sms}>
                    Что делаешь?
                </div>

                <div className={styles.sms + ' ' + styles.answer}>
                    Привет
                </div>

                <div className={styles.sms + ' ' + styles.answer}>
                    Нормально
                </div>
        </div>
    )
}

export default AntonDialog;