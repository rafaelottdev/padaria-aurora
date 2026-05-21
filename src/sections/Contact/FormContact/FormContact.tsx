import styles from "./FormContact.module.css"

function FormContact() {
    return (
        <section className={`${styles.FormContact_section} d-flex flex-column align-items-center`}>
            <div className={`${styles.FormContact_title_container} d-flex align-items-center`}>
                <svg viewBox="0 0 104 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M104 10.375C104 4.66875 99.32 0 93.6 0H10.4C4.68 0 0 4.66875 0 10.375V72.625C0 78.3313 4.68 83 10.4 83H93.6C99.32 83 104 78.3313 104 72.625V10.375ZM93.6 10.375L52 36.3125L10.4 10.375H93.6ZM93.6 72.625H10.4V20.75L52 46.6875L93.6 20.75V72.625Z" fill="#F1A459"/>
                </svg>

                <h2 className="m-0 p-0">Entre em Contato</h2>
            </div>

            <form className={`${styles.form} d-flex flex-column`}>
                <div className={`${styles.name_email_container}`}>
                    <div className="d-flex flex-column">
                        <label htmlFor="name" className={styles.desc_input}>Nome</label>
                        <input type="text" id="name" maxLength={30} className={styles.input} />
                    </div>
                    
                    <div className="d-flex flex-column">
                        <label htmlFor="email" className={styles.desc_input}>Email</label>
                        <input type="email" id="email" maxLength={40} className={styles.input} />
                    </div>
                </div>

                <div className="d-flex flex-column">
                    <label htmlFor="title" className={styles.desc_input}>Titulo</label>
                    <input type="text" id="title" maxLength={30} className={styles.input} />
                </div>

                <div className="d-flex flex-column">
                    <label htmlFor="request" className={styles.desc_input}>Pedido</label>
                    <textarea id="request" maxLength={95} className={`${styles.input} ${styles.textarea_input}`}></textarea>
                </div>

                <button>Enviar</button>
            </form>
        </section>
    )
}

export default FormContact
