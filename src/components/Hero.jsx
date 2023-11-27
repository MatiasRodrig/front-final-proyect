

import Sofa from '../assets/hero/sofa.jpg'
import Design from '../assets/hero/design.jpg'
import Interior from '../assets/hero/interior.jpg'
import '../styles/hero.css'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <>
            <section className="hero-container">
                <div className="left-hero-container">
                    <div className='top-hero-titles'>
                    <h1 className="hero-title">Descubre las Últimas Tendencias En Muebles</h1>
                    <p className="hero-subtitle">
                        Compra la última moda en items y mantente a la cabeza del juego de estilos
                    </p>
                    </div>
                    <button className="explore-more">Explora más <span className='arrow-rigth'><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FFFFFF/right--v1.png" alt="right--v1"/></span></button>
                </div>
                <div className="right-hero-container">
                    <div className="superior-right-container">
                        <Link>
                        <div className="hero-images1">
                            <div className="new-button">Nuevo</div>
                            <img src={Design} alt="" className='img-design'/>
                            </div>
                        </Link>
                        <Link>
                        <div className="hero-images2">
                            <div className="new-button">Nuevo</div>
                            <img src={Sofa} alt="" className='img-sofa'/>
                        </div>
                </Link>
                    </div>
                    <Link>
                    <div className="bottom-right-container">
                        <div className="hero-images3">
                            <div className="new-button-bottom">Nuevo</div>
                            <img src={Interior} alt="" className='img-interior'/>
                        </div>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Hero