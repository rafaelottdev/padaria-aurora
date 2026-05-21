import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className="w-100 py-3 bg-black d-flex align-items-center justify-content-center">
            <p className={`${styles.footer_p} text-light`}>Feito por @Rafaelottdev. Todos os direitos reservados</p>
        </footer>
    )
}

export default Footer
