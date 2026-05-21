import styles from "./About.module.css"

function About() {
    return (
        <section id="about" className={`${styles.about_section} d-flex flex-column align-items-center`}>
            <div className={styles.about_container}>
                <div className={`${styles.about_title_wrapp} d-flex align-items-center`}>
                    <svg viewBox="0 0 128 128" fill="none">
                        <path d="M57.6 44.8H70.4V32H57.6M64 115.2C35.776 115.2 12.8 92.224 12.8 64C12.8 35.776 35.776 12.8 64 12.8C92.224 12.8 115.2 35.776 115.2 64C115.2 92.224 92.224 115.2 64 115.2ZM64 0C55.5954 0 47.2731 1.65541 39.5083 4.87171C31.7434 8.08801 24.6881 12.8022 18.7452 18.7452C6.74284 30.7475 0 47.0261 0 64C0 80.9739 6.74284 97.2525 18.7452 109.255C24.6881 115.198 31.7434 119.912 39.5083 123.128C47.2731 126.345 55.5954 128 64 128C80.9739 128 97.2525 121.257 109.255 109.255C121.257 97.2525 128 80.9739 128 64C128 55.5954 126.345 47.2731 123.128 39.5083C119.912 31.7434 115.198 24.6881 109.255 18.7452C103.312 12.8022 96.2566 8.08801 88.4917 4.87171C80.7269 1.65541 72.4046 0 64 0ZM57.6 96H70.4V57.6H57.6V96Z" fill="#F1A459"/>
                    </svg>

                    <h2 className="p-0 m-0">Sobre</h2>
                </div>

                <div className={styles.about_text_wrapp}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typeLorem Ipsum is simply dummy text of</p>
                </div>
            </div>

            <div className={styles.about_container}>
                <div className={`${styles.about_title_wrapp} d-flex align-items-center`}>
                    <svg viewBox="0 0 139 139" fill="none">
                        <path d="M69.5 0C107.885 0 139 31.1152 139 69.5C139 107.885 107.885 139 69.5 139C31.1152 139 0 107.885 0 69.5C0 31.1152 31.1152 0 69.5 0ZM69.5 13.9C54.754 13.9 40.6119 19.7578 30.1849 30.1849C19.7578 40.6119 13.9 54.754 13.9 69.5C13.9 84.246 19.7578 98.3881 30.1849 108.815C40.6119 119.242 54.754 125.1 69.5 125.1C84.246 125.1 98.3881 119.242 108.815 108.815C119.242 98.3881 125.1 84.246 125.1 69.5C125.1 54.754 119.242 40.6119 108.815 30.1849C98.3881 19.7578 84.246 13.9 69.5 13.9ZM69.5 27.8C71.2023 27.8002 72.8453 28.4252 74.1174 29.5564C75.3895 30.6875 76.2022 32.2463 76.4013 33.9368L76.45 34.75V66.6227L95.2636 85.4363C96.5101 86.6871 97.2338 88.3653 97.2877 90.1303C97.3416 91.8952 96.7217 93.6145 95.5538 94.9389C94.386 96.2634 92.7578 97.0936 91 97.2611C89.2422 97.4285 87.4865 96.9206 86.0896 95.8405L85.4363 95.2636L64.5863 74.4136C63.5062 73.3326 62.8125 71.9256 62.6125 70.4104L62.55 69.5V34.75C62.55 32.9067 63.2822 31.139 64.5856 29.8356C65.889 28.5322 67.6567 27.8 69.5 27.8Z" fill="#F1A459"/>
                    </svg>

                    <h2 className="p-0 m-0">Atendimento</h2>
                </div>

                <ul className={`${styles.opening_list} d-grid`}>
                    <li className="d-flex flex-column align-items-center">
                        <p>Seg</p>
                        <p>07:00 às 20:00</p>
                    </li>

                    <li className="d-flex flex-column align-items-center">
                        <p>Ter</p>
                        <p>07:00 às 20:00</p>
                    </li>

                    <li className="d-flex flex-column align-items-center">
                        <p>Qua</p>
                        <p>07:00 às 20:00</p>
                    </li>

                    <li className="d-flex flex-column align-items-center">
                        <p>Qui</p>
                        <p>07:00 às 20:00</p>
                    </li>

                    <li className="d-flex flex-column align-items-center">
                        <p>Sex</p>
                        <p>07:00 às 20:00</p>
                    </li>

                    <li className="d-flex flex-column align-items-center">
                        <p>Sab</p>
                        <p>07:00 às 12:00</p>
                    </li>

                    <li className="d-flex flex-column align-items-center">
                        <p>Dom</p>
                        <p>Fechado</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About
