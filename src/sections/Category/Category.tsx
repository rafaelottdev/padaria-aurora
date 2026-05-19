import styles from "./Category.module.css"

import { NavLink, Outlet } from "react-router-dom"

function Category() {
    return (
        <section className={styles.category_section}>
            <div className={styles.category_header}>
                <ul className={`${styles.category_list} d-flex justify-content-center`}>
                    <li>
                        <NavLink to="/" className="d-flex align-items-center justify-content-center text-decoration-none">Salgados</NavLink>
                    </li>

                    <li>
                        <NavLink to="doces" className="d-flex align-items-center justify-content-center text-decoration-none">Doces</NavLink>
                    </li>

                    <li>
                        <NavLink to="bebidas" className="d-flex align-items-center justify-content-center text-decoration-none">Bebidas</NavLink>
                    </li>

                    <li>
                        <NavLink to="variedades" className="d-flex align-items-center justify-content-center text-decoration-none">Variedades</NavLink>
                    </li>
                </ul>
            </div>

            <div className={`${styles.category_body} d-flex flex-column align-items-center`}>
                <Outlet />
            </div>
        </section>
    )
}

export default Category
