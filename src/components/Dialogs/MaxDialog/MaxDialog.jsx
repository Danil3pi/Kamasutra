import styles from '../Dialogs.module.css'

const MaxDialog = () => {
    return(
        <div className={styles.someDialog}>
            <div className={styles.sms}>
                    Привет, Данила!
                </div>

                <div className={styles.sms}>
                    Я мотоцикл купил!
                 </div>

                <div className={styles.sms}>
                    Такой клевый!
                </div>

                <div className={styles.sms + ' ' + styles.answer}>
                    Привет
                </div>

                <div className={styles.sms + ' ' + styles.answer}>
                    Отлично!
                </div>

                <div className={styles.sms}>
                    Поеду заправлять
                </div>
        </div>
    )
}

export default MaxDialog;