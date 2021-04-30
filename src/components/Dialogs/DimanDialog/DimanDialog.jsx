import styles from '../Dialogs.module.css'

const DimanDialog = () => {
    return(
        <div className={styles.someDialog}>
            <div className={styles.sms}>
                    САп, нига
                </div>

                <div className={styles.sms + ' ' + styles.answer}>
                    Привет, пес
                </div>

                <div className={styles.sms}>
                    Я от зизяя съезал
                 </div>

                 <div className={styles.sms + ' ' + styles.answer}>
                    Наконечно, бля
                </div>

                <div className={styles.sms}>
                    Приезжай в пераом
                </div>

                <div className={styles.sms + ' ' + styles.answer}>
                    Я чо конч
                </div>

                <div className={styles.sms + ' ' + styles.answer}>
                    Го в мордовию
                </div>

                <div className={styles.sms}>
                    Поеду заправлять
                </div>
        </div>
    )
}

export default DimanDialog;