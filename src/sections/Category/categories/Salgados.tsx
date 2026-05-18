import CategoryCard from "../../../components/CategoryCard"

import img1 from "../../../assets/img/cards/cards-salgados/coxinha.webp"
import img2 from "../../../assets/img/cards/cards-salgados/pastel.webp"
import img3 from "../../../assets/img/cards/cards-salgados/risoles.webp"
import img4 from "../../../assets/img/cards/cards-salgados/esfirra.jpg"

const Salgados = () => {
    return (
        <ul className="d-flex flex-column gap-2">
            <CategoryCard 
                img={img1} 
                title="Coxinha Cremosa" 
                desc="Massa leve e crocante com recheio de frango e catupiry."  
                price="R$ 8,90"
                tag="🔥 Mais Pedido"
            />

            <CategoryCard 
                img={img2} 
                title="Pastel Crocante" 
                desc="Massa leve e dourada com recheio cremoso e sabor caseiro."  
                price="R$ 10,90"
                tag="🌿 Fresquinho"
            />

            <CategoryCard 
                img={img3} 
                title="Risóles Especial" 
                desc="Casquinha dourada e crocante com recheio suave feito na hora."  
                price="R$ 7,90"
                tag="🥟 Fresquinho"
            />

            <CategoryCard 
                img={img4}
                title="Esfirra Artesanal" 
                desc="Massa macia e assada na hora com recheio temperado."  
                price="R$ 8,90"
                tag="🔥 Quentinha"
            />
        </ul>
    )
}

export default Salgados
