import styles from "./Contact.module.css"

import FormContact from "./FormContact/FormContact"
import Location from "./Location/Location"

function Contact() {
    return (
        <section className={`${styles.contact_section} d-flex flex-column flex-lg-row justify-content-lg-between align-items-center align-items-lg-start`}>
            <FormContact />

            <Location />
        </section>
    )
}

export default Contact
