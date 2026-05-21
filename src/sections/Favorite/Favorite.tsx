import styles from "./Favorite.module.css"
import FavoriteCard from "./FavoriteCard/FavoriteCard"

import img1 from "../../assets/img/favoritos-casa/paes.webp"
import img2 from "../../assets/img/favoritos-casa/sanduiche.webp"
import img3 from "../../assets/img/favoritos-casa/cafe-1.webp"

function Favorite() {
    return (
        <section id="favorite" className={`${styles.favorite_section} d-flex justify-content-center`}>
            <div className={`${styles.favorite_wrapp} position-relative`}>
                <div className={`${styles.top_background} w-100 position-absolute top-0 left-0`}></div>

                <div className={`${styles.container_content} position-relative`}>
                    <h2 className="text-center">Favoritos Da Casa</h2>

                    <ul className={`${styles.favorite_list} d-flex flex-column`}>
                        <FavoriteCard title="Combo café da manhã" img={img1} desc="Pão tradicional, Café Preto, Suco Natural e Uvas" />

                        <FavoriteCard title="Combo Artesanal" img={img2} desc="Sanduiche Artesanal, Croassant, Coxinha, Bolo" />

                        <FavoriteCard title="Momento doce" img={img3} desc="Café Expresso, Rosquinhas e Bomba de chocolate" />
                    </ul>
                </div>

                <div className={`${styles.bottom_background} w-100 position-absolute bottom-0 left-0`}></div>
            </div>
        </section>
    )
}

export default Favorite
