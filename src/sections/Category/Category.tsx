import styles from "./Category.module.css"

import { NavLink, Outlet } from "react-router-dom"

function Category() {
    return (
        <section className={styles.category_section}>
            <div className={styles.category_header}>
                <ul className={styles.category_list}>
                    <li>
                        <NavLink to="/">Salgados</NavLink>
                    </li>

                    <li>
                        <NavLink to="doces">Doces</NavLink>
                    </li>

                    <li>
                        <NavLink to="bebidas">Bebidas</NavLink>
                    </li>

                    <li>
                        <NavLink to="variedades">Variedades</NavLink>
                    </li>
                </ul>
            </div>

            <div className={styles.category_body}>
                <Outlet />
            </div>
        </section>
    )
}

export default Category

// Adicionar o bootstrap e deixar as imagens menos pesadas
