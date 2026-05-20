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
        <li className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex justify-content-center">
            <div className={styles.card_container}>
                <div className={`${styles.img_wrapp} w-100`}>
                    <img src={img} className="w-100 h-100" />
                </div>
                <div className={`${styles.info_container} d-flex flex-column`}>
                    <div className={styles.desc_container}>
                        <h3>{title}</h3>
                        <p>{desc}</p>
                    </div>
                    <div className={`${styles.price_container} d-flex justify-content-between align-items-center`}>
                        <p>{price}</p>
                        <p>{tag}</p>
                    </div>
                
                    <button>Pedir</button>
                </div>
            </div>
        </li>
    )
}

export default CategoryCard
