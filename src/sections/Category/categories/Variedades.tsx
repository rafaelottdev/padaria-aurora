import CategoryCard from "../../../components/CategoryCard"

import img1 from "../../../assets/img/cards/cards-variedades/pao.webp"
import img2 from "../../../assets/img/cards/cards-variedades/pao-chapa.webp"
import img3 from "../../../assets/img/cards/cards-variedades/cookies.webp"

const Variedades = () => {
    return (
        <ul className="d-flex flex-column gap-2">
            <CategoryCard
                img={img1} 
                title="Pães Tradicionais" 
                desc="Casquinha crocante e miolo macio assados diariamente"  
                price="R$ 1,20 un"
                tag="🥖 Saindo do Forno"
            />

            <CategoryCard 
                img={img2} 
                title="Pão na Chapa" 
                desc="Pão dourado na manteiga com aroma irresistível e sabor caseiro."  
                price="R$ 6,90"
                tag="🧈 Feito na Hora"
            />

            <CategoryCard 
                img={img3} 
                title="Cookies" 
                desc="Massa macia por dentro com gotas de chocolate e bordas crocantes."  
                price="R$ 8,90"
                tag="🍪 Assado Hoje"
            />
        </ul>
    )
}

export default Variedades
