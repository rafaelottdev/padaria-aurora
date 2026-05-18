import CategoryCard from "../../../components/CategoryCard"

import img1 from "../../../assets/img/cards/cards-bebidas/expresso.webp"
import img2 from "../../../assets/img/cards/cards-bebidas/latte.webp"
import img3 from "../../../assets/img/cards/cards-bebidas/coca.webp"

const Bebidas = () => {
    return (
        <ul className="d-flex flex-column gap-2">
            <CategoryCard 
                img={img1} 
                title="Café Expresso" 
                desc="Sabor intenso e aroma marcante extraídos na medida perfeita."  
                price="R$ 5,90"
                tag="☕ Extração Especial"
            />

            <CategoryCard 
                img={img2} 
                title="Mocha Cremoso" 
                desc="Café encorpado com chocolate e leite vaporizado"  
                price="R$ 13,90"
                tag="🍫 Receita Premium"
            />

            <CategoryCard 
                img={img3} 
                title="Coca-Cola Gelada" 
                desc="Refrescância intensa e sabor clássico para acompanhar qualquer momento."  
                price="R$ 6,90"
                tag="🧊 Bem Gelada"
            />
        </ul>
    )
}

export default Bebidas
