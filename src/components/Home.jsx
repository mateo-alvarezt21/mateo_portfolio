import React from 'react'
import "./styles/Home.css"

const Home = ({ lightMode, toggleLightMode }) => {

    const handleToggle = () => {
        toggleLightMode();
    };


    return (
        <section className={`home ${lightMode ? 'light' : ''}`} id='home'>
            <div className='colorMode'>
                <label className="switch">
                    <input type="checkbox" checked={lightMode} onChange={handleToggle} />
                    <span className="slider"></span>
                </label>
            </div>
            
            <div className={`home__presentation ${lightMode ? 'light' : ''}`}>
                <h4>Hola, mi nombre es</h4>
                <h2>Mateo Álvarez</h2>
                <h3>Frontend Dev & UX | UI Designer</h3>
            </div>
            <div className='home__content'>
                <div className='home__images'>
                    <img className='home__images-eclipse' src="./Ellipse.png" alt="" />
                    <img className='home__images-mateo' src="./mateo3.png" alt="" />
                </div>
                <div className={`home__text-experience ${lightMode ? 'light' : ''}`}>
                    <h3 className='home__text'><span>+2 años</span> de experiencia desarrollando webs</h3>
                    <div className={`home__icons ${lightMode ? 'light' : ''}`}>
                        <a href="https://github.com/mateo-alvarezt21"><i className={`bx bxl-github home__github ${lightMode ? 'light' : ''}`} ></i></a>
                        <a href="https://www.instagram.com/mateo_alvarezt/"><img className='home__instagram' src="./instagram.svg" alt="" /></a>
                        <a href="https://www.linkedin.com/in/mateo-alvarez21/"><img className='home__linkedin' src="./linkedin.svg" alt="" /></a>
                    </div>
                </div>
                <div className='componente'>
                    <div className='component-imgs'>
                        <img className='component-img1' src="./component1.png" alt="" />
                        <img className='component-img2' src="./mateocard.png" alt="" />
                    </div>

                    <div className={`textos ${lightMode ? 'light' : ''}`}>
                        <h2><span>+100</span> proyectos</h2>
                        <h2><span>Top</span> UI Design</h2>
                        <h2>Constante<span> Innovación</span></h2>
                    </div>

                </div>
                <div>
                    <img className='fondo-elipse' src="./Ellipse3.png" alt="" />
                </div>
            </div>

        </section>
    )
}

export default Home