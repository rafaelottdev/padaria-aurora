import img1 from "../../assets/img/slide-home/1.webp"
import img2 from "../../assets/img/slide-home/2.jpg"
import img3 from "../../assets/img/slide-home/3.webp"
import img4 from "../../assets/img/slide-home/4.webp"
import img5 from "../../assets/img/slide-home/5.jpg"
import img6 from "../../assets/img/slide-home/6.jpg"

import coffee from "../../assets/img/Info-slide/coffee.png"
import coxinha from "../../assets/img/Info-slide/coxinha.png"
import bolo from "../../assets/img/Info-slide/bolo.png"
import croassant from "../../assets/img/Info-slide/croassant.png"
import pedacoBolo from "../../assets/img/Info-slide/pedaço de bolo.png"
import pao from "../../assets/img/Info-slide/pão.png"

import InfoSlide from "./InfoSlide/InfoSlide"

import styles from "./Home.module.css"
import { useState } from "react"

function Home() {
    const urlImgList: string[] = [coffee, coxinha, bolo,croassant, pedacoBolo, pao]

    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const prevSlide = () => {
        if(currentIndex > 0) {
            setCurrentIndex(prev => prev - 1)
        }
    }

    const nextSlide = () => {
        if(currentIndex < 5) {
            setCurrentIndex(prev => prev + 1)
        }
    }

    let containerImgWidth = (330+10) * currentIndex
    let containerInfoWidth = (240+10) * currentIndex

    // Touch

    let touchStartX = 0
    let touchEndX = 0

    const handleTouchStart = (e: any) => {
        touchStartX = e.changedTouches[0].screenX
    }

    const handleTouchEnd = (e: any) => {
        touchEndX = e.changedTouches[0].screenX

        const diff = touchStartX - touchEndX

        if(diff > 50) {
            nextSlide()
        }

        if(diff < -50) {
            prevSlide()
        }
    }

    return (
        <section className={`${styles.home_section} d-flex flex-column`} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div className="d-flex flex-column align-items-center">
                <div className={`${styles.slider_container_img} overflow-hidden position-relative`}>
                    <ul className={`${styles.slider_img} d-flex position-absolute`} style={{ transform: `translateX(-${containerImgWidth}px)` }}>
                        <li className={styles.slider_item}>
                            <img src={img1} alt="Mesa com café e outros"/>
                        </li>

                        <li className={styles.slider_item}>
                            <img src={img2} alt="salgadinhos"/>
                        </li>

                        <li className={styles.slider_item}>
                            <img src={img3} alt="bolo de chocolate"/>
                        </li>

                        <li className={styles.slider_item}>
                            <img src={img4} alt="mesa com café e outros"/>
                        </li>

                        <li className={styles.slider_item}>
                            <img src={img5} alt="vitrine de doces"/>
                        </li>

                        <li className={styles.slider_item}>
                            <img src={img6} alt="vitrine de pães"/>
                        </li>
                    </ul>
                </div>

                <div className={`${styles.slider_container_info} overflow-hidden position-relative`}>
                    <ul className={`${styles.slider_info} d-flex position-absolute`} style={{ transform: `translateX(-${containerInfoWidth}px)` }}>
                        <InfoSlide title="Cappuccino Especial" url={urlImgList[0]} price="R$12,90" quant="300ML" int="Intensidade Média" acom="Chocolate" desc="Café expresso com leite vaporizado, chocolate e canela." />

                        <InfoSlide title="Salgados Artesanais" url={urlImgList[1]} price="R$18,90" quant="6 Unidades" int="Frito na Hora" acom="Molho Especial" desc="Coxinhas e quibes dourados, crocantes por fora e recheados" />

                        <InfoSlide title="Bolo de Chocolate" url={urlImgList[2]} price="R$14,90" quant="Generosa" int="Chocolate Cremoso" acom="Café Expresso" desc="Massa fofinha com chocolate intenso e cobertura cremosa" />

                        <InfoSlide title="Café da Tarde" url={urlImgList[3]} price="R$24,90" quant="2 Pessoas" int="Café Especial" acom="Croissant" desc="Uma combinação aconchegante com café fresco e croissant" />

                        <InfoSlide title="Doces da Vitrine" url={urlImgList[4]} price="A partir de R$6,90" quant="Artesanal" int="Doces Frescos" acom="Café" desc="Uma seleção irresistível de doces preparados diariamente" />

                        <InfoSlide title="Pães Tradicionais" url={urlImgList[5]} price="A partir de R$3,90" quant="Fresquinha do Dia" int="Receita Artesanal" acom="Manteiga" desc="Pães macios e dourados, assados diariamente" />
                    </ul>
                </div>
            </div>

            <div className={`${styles.slideControl_container} d-flex justify-content-center`}>
                <button className="btn" onClick={prevSlide}>
                    <svg width="39" height="32" viewBox="0 0 39 32">
                        <path d="M17.1989 30.2074C16.6793 30.737 15.9746 31.0344 15.2398 31.0344C14.5051 31.0344 13.8004 30.737 13.2807 30.2074L0.811321 17.4971C0.291843 16.9674 1.52588e-05 16.2491 1.52588e-05 15.5002C1.52588e-05 14.7512 0.291843 14.0329 0.811321 13.5032L13.2807 0.792871C13.8033 0.27836 14.5033 -0.0063343 15.2298 0.000101089C15.9564 0.00653648 16.6514 0.303587 17.1651 0.827276C17.6789 1.35097 17.9703 2.05939 17.9766 2.79997C17.983 3.54055 17.7037 4.25403 17.1989 4.78674L9.69785 12.6756L36.0222 12.6756C36.7571 12.6756 37.4619 12.9732 37.9816 13.5029C38.5012 14.0326 38.7932 14.751 38.7932 15.5002C38.7932 16.2493 38.5012 16.9677 37.9816 17.4974C37.4619 18.0271 36.7571 18.3247 36.0222 18.3247L9.69785 18.3247L17.1989 26.2136C17.7184 26.7432 18.0102 27.4615 18.0102 28.2105C18.0102 28.9595 17.7184 29.6778 17.1989 30.2074Z"/>
                    </svg>
                </button>

                <button className="btn" onClick={nextSlide}>
                    <svg width="39" height="32" viewBox="0 0 39 32">
                        <path d="M21.5943 0.826982C22.1139 0.297465 22.8186 0 23.5533 0C24.2881 0 24.9928 0.297465 25.5124 0.826982L37.9818 13.5373C38.5013 14.067 38.7931 14.7853 38.7931 15.5343C38.7931 16.2832 38.5013 17.0015 37.9818 17.5312L25.5124 30.2416C24.9898 30.7561 24.2899 31.0408 23.5633 31.0343C22.8368 31.0279 22.1418 30.7308 21.628 30.2071C21.1142 29.6835 20.8228 28.975 20.8165 28.2345C20.8102 27.4939 21.0895 26.7804 21.5943 26.2477L29.0953 18.3588H2.77098C2.03607 18.3588 1.33126 18.0612 0.811601 17.5315C0.291942 17.0018 0 16.2834 0 15.5343C0 14.7852 0.291942 14.0667 0.811601 13.537C1.33126 13.0073 2.03607 12.7097 2.77098 12.7097H29.0953L21.5943 4.82086C21.0748 4.29118 20.7829 3.57288 20.7829 2.82392C20.7829 2.07496 21.0748 1.35666 21.5943 0.826982Z"/>
                    </svg>
                </button>
            </div>
        </section>
    )
}

export default Home
