import React from 'react'
import "./styles/Skills.css"

const Skills = ({lightMode}) => {
  return (
    <div className={`skills ${lightMode ? 'light' : ''}`} id='skills'>
        <h1 className='skils__title'>Tech Skills</h1>
            <div className='skills__list'>
                <div className='skill__icon-img'>
                    <img className='img-icon' src="./javascript-icon.png" alt="" />
                    <h2 className={`skills__name ${lightMode ? 'light' : ''}`}>Javascript</h2>
                </div>
                <div className='skill__icon-img'>
                    <img className='img-icon' src="./html-icon.png" alt="" />
                    <h2 className={`skills__name ${lightMode ? 'light' : ''}`}>Html</h2>
                </div>
                <div className='skill__icon-img'>
                    <img className='img-icon' src="./css-icon.png" alt="" />
                    <h2 className={`skills__name ${lightMode ? 'light' : ''}`}>CSS</h2>
                </div>
                <div className='skill__icon-img'>
                    <img className='img-icon' src="./react-icon.png" alt="" />
                    <h2 className={`skills__name ${lightMode ? 'light' : ''}`}>React</h2>
                </div>
                <div className='skill__icon-img'>
                    <i className={`img-icon bx bxl-github home__github ${lightMode ? 'light' : ''}`} ></i>
                    <h2 className={`skills__name ${lightMode ? 'light' : ''}`}>Github</h2>
                </div>
                <div className='skill__icon-img'>
                    <img className='img-icon' src="./node-icon.png" alt="" />
                    <h2 className={`skills__name ${lightMode ? 'light' : ''}`}>NodeJS</h2>
                </div>
                <div className='skill__icon-img'>
                    <img className='img-icon' src="./git-icon.png" alt="" />
                    <h2 className={`skills__name ${lightMode ? 'light' : ''}`}>GIT</h2>
                </div>
                <div className='skill__icon-img'>
                    <img className='img-icon' src="./figma-icon.png" alt="" />
                    <h2 className={`skills__name ${lightMode ? 'light' : ''}`}>Figma</h2>
                </div>
            </div>
    </div>
  )
}

export default Skills