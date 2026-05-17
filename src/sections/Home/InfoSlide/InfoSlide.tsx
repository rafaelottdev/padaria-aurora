import styles from "./InfoSlide.module.css"

type info = {
    title: string,
    url: string,
    price: string,
    quant: string,
    int: string,
    acom: string,
    desc: string
}

function InfoSlide({ title, url, price, quant, int, acom, desc }: info) {
    return (
        <li className={styles.infoCardSlide}>
            <div className={`${styles.title_container} d-flex align-items-center justify-content-between`}>
                <h3>{title}</h3>

                <img src={url} />
            </div>

            <div className={styles.infoCard_info_container}>
                <ul className={`${styles.infoCard_list} d-flex flex-column`}>
                    <li className="d-flex justify-content-between">
                        <p>Valor:</p>

                        <p className="fw-bold">{price}</p>
                    </li>
                    
                    <li className="d-flex justify-content-between">
                        <p>Quantidade:</p>

                        <p>{quant}</p>
                    </li>
                    
                    <li className="d-flex justify-content-between">
                        <p>Destaque:</p>

                        <p>{int}</p>
                    </li>
                    
                    <li className="d-flex justify-content-between">
                        <p>Acompanha:</p>

                        <p>{acom}</p>
                    </li>
                </ul>
            </div>

            <p className={`${styles.description} text-center`}>{desc}</p>
        </li>
    )
}

export default InfoSlide
