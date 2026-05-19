import logo from "../../assets/img/logo/logo.webp"
import styles from "./Header.module.css"

function Header() {
    return (
        <header className={`${styles.header} px-3 pt-3`}>
            <nav className="navbar">
                <div>
                    <a href="#" className="navbar-brand">
                        <img src={logo} alt="Logo do site" className={styles.logo} />
                    </a>
                </div>

                <div>
                    <button className={`navbar-toggler ${styles.menu_button} bg-text-light`} type="button" data-bs-toggle="offcanvas" data-bs-target="#painel">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className={`offcanvas offcanvas-end ${styles.menu_container}`} id="painel" data-bs-scroll="true" data-bs-backdrop="false">
                    <div className="offcanvas-header">
                        <button className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
                    </div>

                    <div className="offcanvas-body p-0 mt-4">
                        <ul className={`navbar-nav gap-4 ${styles.castoro_regular_italic}`}>
                            <li className="nav-item">
                                <a href="#" className={`${styles.link_menu} nav-link ps-3`}>Categorias</a>
                            </li>

                            <li className="nav-item">
                                <a href="#" className={`${styles.link_menu} nav-link ps-3`}>Favoritos</a>
                            </li>

                            <li className="nav-item">
                                <a href="#" className={`${styles.link_menu} nav-link ps-3`}>Sobre</a>
                            </li>

                            <li className="nav-item">
                                <a href="#" className={`${styles.link_menu} nav-link ps-3`}>Contato</a>
                            </li>
                        </ul>

                        <button className={`btn ${styles.julius_sans_one_regular} ${styles.menu_btn} text-light d-block mx-auto mt-5 rounded-0`}>Ver Cardapio</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
