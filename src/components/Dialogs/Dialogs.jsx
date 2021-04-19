
import styles from './Dialogs.module.css'


const Dialogs = (props) => {
    return (
        <div className={styles.mainDialogWindow}>
            <div className={styles.dialogList}>
                <div className={styles.dialogWith}>
                    <img src="https://clck.ru/UNMiH" />
                    Anton
                </div>
                <div className={styles.dialogWith}>
                <img src="https://clck.ru/UNMiX" />
                    Diman
                </div>
                <div className={styles.dialogWith}>
                    <img src="https://clck.ru/UNMio"/>
                    Max
                </div>
                <div className={styles.dialogWith}>
                    <img src="https://clck.ru/UNMjL"/>
                    Travov
                </div>
                <div className={styles.dialogWith}>
                    Vova
                </div>
            </div>


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
        </div>
    )
}

export default Dialogs;