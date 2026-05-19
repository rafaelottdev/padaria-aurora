import styles from "./Menu.module.css"

import cardapio from "../../assets/img/cardapio/cardapio-vertical.webp"

function Menu() {
    return (
        <section className={styles.menu_section}>
            <img src={cardapio} alt="Cardapio" />
        </section>
    )
}

export default Menu
