import React from 'react'
import "./styles/Home.css"

const Home = () => {
  return (
    <section className='home' id='home'>
        <div className='home__presentation'>
            <h4>Hola, mi nombre es</h4>
            <h2>Mateo Álvarez</h2>
            <h3>Frontend Dev & UX | UI Designer</h3>
        </div>
        <div className='home__content'>
            <div className='home__images'>
                <img className='home__images-eclipse' src="./public/Ellipse.png" alt="" />
                <img className='home__images-mateo' src="./public/mateo3.png" alt="" />
            </div>
            <div className='home__text-experience'>
                <h3 className='home__text'><span>+2 años</span> de experiencia desarrollando webs</h3>
                <div className='home__icons'>
                    <a href="https://github.com/mateo-alvarezt21"><i className='bx bxl-github home__github' ></i></a>
                    <a href="https://www.instagram.com/mateo_alvarezt/"><img className='home__instagram' src="./instagram.svg" alt="" /></a>
                    <a href="https://www.linkedin.com/in/mateo-alvarez21/"><img className='home__linkedin' src="./linkedin.svg" alt="" /></a>
                </div>
            </div>
            <div className='componente'>
                <div className='component-imgs'>
                    <img className='component-img1' src="./component1.png" alt="" />
                    <img className='component-img2' src="./mateocard.png" alt="" />
                </div>
                
                <div className='textos'>
                    <h2><span>+100</span> proyectos</h2>
                    <h2><span>Top</span> UI Design</h2>
                    <h2>Constante<span> Innovación</span></h2>
                </div>
                
            </div>
            <div>
                <img className='fondo-elipse'  src="./public/Ellipse3.png" alt="" />
            </div>
        </div>
        
    </section>
  )
}

export default Home