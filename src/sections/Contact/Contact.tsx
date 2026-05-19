import styles from "./Contact.module.css"

import FormContact from "./FormContact/FormContact"
import Location from "./Location/Location"

function Contact() {
    return (
        <section className={`${styles.contact_section} d-flex flex-column align-items-center`}>
            <FormContact />

            <Location />
        </section>
    )
}

export default Contact

// arrumar o fundo da Category, que muda quando o conteudo tem menos itens, definir altura fixa ou outra coisa
