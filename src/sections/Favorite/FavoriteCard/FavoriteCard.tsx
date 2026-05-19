import styles from "./FavoriteCard.module.css"

type CardInfo = {
    title: string,
    img: string,
    desc: string
}

function FavoriteCard({ title, img, desc }: CardInfo) {
    return (
        <li className={`${styles.card} d-flex flex-column align-items-center`}>
            <p className={`${styles.titulo} text-capitalize`}>{title}</p>

            <div className={`${styles.img_wrapp} position-relative`}>
                <img src={img} className="w-100 h-100" />
                <button className="position-absolute top-50 start-50 translate-middle">Pedir</button>
            </div>

            <p className={`${styles.desc} text-center`}>{desc}</p>
        </li>
    )
}

export default FavoriteCard
