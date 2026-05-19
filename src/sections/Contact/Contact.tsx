import styles from "./Contact.module.css"

import FormContact from "./FormContact/FormContact"
import Location from "./Location/Location"

function Contact() {
    return (
        <section className={styles.contact_section}>
            <FormContact />

            <Location />
        </section>
    )
}

export default Contact
