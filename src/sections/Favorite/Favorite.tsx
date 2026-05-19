import styles from "./Favorite.module.css"
import FavoriteCard from "./FavoriteCard/FavoriteCard"

function Favorite() {
    return (
        <section>
            <div>
                <div></div>

                <div>
                    <h2>
                        Favoritos Da Casa
                    </h2>

                    <ul>
                        <FavoriteCard />

                        <FavoriteCard />

                        <FavoriteCard />
                    </ul>
                </div>

                <div></div>
            </div>
        </section>
    )
}

export default Favorite
