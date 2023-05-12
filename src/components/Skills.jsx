import React from 'react'
import "./styles/Skills.css"

const Skills = () => {
  return (
    <div className='skills' id='skills'>
        <h1 className='skils__title'>Tech Skills</h1>
            <div className='skills__list'>
                <div className='skill__icon-img'>
                    <img className='img-icon' src="./public/javascript-icon.png" alt="" />
                    <h2 className='skills__name'>Javascript</h2>
                </div>
                <div className='skill__icon-img'>
                    <img className='img-icon' src="./public/html-icon.png" alt="" />
                    <h2 className='skills__name'>Html</h2>
                </div>
                <div className='skill__icon-img'>
                    <img className='img-icon' src="./public/css-icon.png" alt="" />
                    <h2 className='skills__name'>CSS</h2>
                </div>
                <div className='skill__icon-img'>
                    <img className='img-icon' src="./public/react-icon.png" alt="" />
                    <h2 className='skills__name'>React</h2>
                </div>
                <div className='skill__icon-img'>
                    <i className='img-icon bx bxl-github home__github' ></i>
                    <h2 className='skills__name'>Github</h2>
                </div>
                <div className='skill__icon-img'>
                    <img className='img-icon' src="./public/node-icon.png" alt="" />
                    <h2 className='skills__name'>NodeJS</h2>
                </div>
                <div className='skill__icon-img'>
                    <img className='img-icon' src="./public/git-icon.png" alt="" />
                    <h2 className='skills__name'>GIT</h2>
                </div>
                <div className='skill__icon-img'>
                    <img className='img-icon' src="./public/figma-icon.png" alt="" />
                    <h2 className='skills__name'>Figma</h2>
                </div>
            </div>
    </div>
  )
}

export default Skills