import CategoryCard from "../../../components/CategoryCard"

import img1 from "../../../assets/img/cards/cards-doces/sonho.webp"
import img2 from "../../../assets/img/cards/cards-doces/banana.webp"
import img3 from "../../../assets/img/cards/cards-doces/brigadeiro.webp"
import img4 from "../../../assets/img/cards/cards-doces/rocambole.webp"

const Doces = () => {
    return (
        <ul className="row g-4 justify-content-center">
            <CategoryCard
                img={img1} 
                title="Sonho Cremoso" 
                desc="Massa fofinha e delicada com recheio doce e cobertura açucarada."  
                price="R$ 12,00"
                tag="🍬 Feito Hoje"
            />

            <CategoryCard 
                img={img2} 
                title="Éclair de Chocolate" 
                desc="Massa leve e recheio intenso finalizados com cobertura cremosa."  
                price="R$ 11,90"
                tag="🍫 Doce Especial"
            />

            <CategoryCard 
                img={img3} 
                title="Brigadeiro Gourmet" 
                desc="Chocolate cremoso e textura macia finalizados com granulado especial."  
                price="R$ 4,90"
                tag="✨ Feito Artesanalmente"
            />

            <CategoryCard 
                img={img4}
                title="Rocambole Caseiro" 
                desc="Massa macia e recheio suave com sabor delicado em cada fatia."  
                price="R$ 14,90"
                tag="🍰 Receita Especial"
            />
        </ul>
    )
}

export default Doces
