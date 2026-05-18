import styles from "./CategoryCard.module.css"

type cardInfo = {
    img: string,
    title: string,
    desc: string,
    price: string,
    tag: string
}

function CategoryCard({ img, title, desc, price, tag }: cardInfo) {
    return (
        <li className={styles.card_container}>
            <div className={styles.img_wrapp}>
                <img src={img} />
            </div>

            <div className={styles.info_container}>
                <div className={styles.desc_container}>
                    <h3>{title}</h3>

                    <p>{desc}</p>
                </div>

                <div className={styles.price_container}>
                    <p>{price}</p>

                    <p>{tag}</p>
                </div>
                
                <button>Pedir</button>
            </div>
        </li>
    )
}

export default CategoryCard
