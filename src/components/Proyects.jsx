import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import './styles/Proyects.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useTranslation} from "react-i18next"



const Proyects = ({lightMode}) => {

    const [t, i18n] = useTranslation("global")

  return (
    <div className={`proyects ${lightMode ? 'light' : ''}`}>
        <h1 className='proyect'>{t("proyects.proyectos")}</h1>
        <div>
            <img className='fondo-elipse2'  src="./Ellipse3.png" alt="" />
        </div>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
        // breakpoints={{
        //     770: {
        //         width: 770,
        //         slidesPerView: 2,
        //     },
        // }}
        >
        <SwiperSlide  >
            <h2 className={`proyect__title ${lightMode ? 'light' : ''}`} id='proyects'>Weather App</h2>
            <div className="proyect__img-p">
                <div className='img-container'>
                    <img className='proyect__img' src="./weather.png" alt="" />
                </div>
                <div className="proyect__p-icon">
                    <div className='p-container'>
                        <p className={`proyect__p ${lightMode ? 'light' : ''}`} >{t("proyects.descripcion1")} </p>
                    </div>
                    <div className='proyect__icons-container'>
                        <img className='icon' src="./css-icon.png" alt="" />
                        <img className='icon' src="./html-icon.png" alt="" />
                        <img className='icon' src="./react-icon.png" alt="" />
                        <img className='icon' src="./javascript-icon.png" alt="" />
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <h2 className={`proyect__title ${lightMode ? 'light' : ''}`}>Ecommerce</h2>
            <div className="proyect__img-p">
                <div className='img-container'>
                    <img className='proyect__img' src="./ecommerce.png" alt="" />
                </div>
                <div className="proyect__p-icon">
                    <div className='p-container'>
                        <p className={`proyect__p ${lightMode ? 'light' : ''}`}>{t("proyects.descripcion2")}</p>
                    </div>
                    <div className='proyect__icons-container'>
                        <img className='icon' src="./css-icon.png" alt="" />
                        <img className='icon' src="./html-icon.png" alt="" />
                        <img className='icon' src="./react-icon.png" alt="" />
                        <img className='icon' src="./javascript-icon.png" alt="" />
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <h2 className={`proyect__title ${lightMode ? 'light' : ''}`}>Pokedex</h2>
            <div className="proyect__img-p">
                <div className='img-container'>
                    <img className='proyect__img' src="./pokedex.png" alt="" />
                </div>
                <div className="proyect__p-icon">
                    <div className='p-container'>
                        <p className={`proyect__p ${lightMode ? 'light' : ''}`}>{t("proyects.descripcion3")}</p>
                    </div>
                    <div className='proyect__icons-container'>
                        <img className='icon' src="./css-icon.png" alt="" />
                        <img className='icon' src="./html-icon.png" alt="" />
                        <img className='icon' src="./react-icon.png" alt="" />
                        <img className='icon' src="./javascript-icon.png" alt="" />
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <h2 className={`proyect__title ${lightMode ? 'light' : ''}`}>{t("proyects.crud")}</h2>
            <div className="proyect__img-p">
                <div className='img-container'>
                    <img className='proyect__img' src="./userscrud.png" alt="" />
                </div>
                <div className="proyect__p-icon">
                    <div className='p-container'>
                        <p className={`proyect__p ${lightMode ? 'light' : ''}`}>{t("proyects.descripcion4")}
                    </p>
                    </div>
                    <div className='proyect__icons-container'>
                        <img className='icon' src="./css-icon.png" alt="" />
                        <img className='icon' src="./html-icon.png" alt="" />
                        <img className='icon' src="./react-icon.png" alt="" />
                        <img className='icon' src="./javascript-icon.png" alt="" />
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <h2 className={`proyect__title ${lightMode ? 'light' : ''}`}>Rick & Morty</h2>
            <div className="proyect__img-p">
                <div className='img-container'>
                    <img className='proyect__img' src="./rickymorty.png" alt="" />
                </div>
                <div className="proyect__p-icon">
                    <div className='p-container'>
                        <p className={`proyect__p ${lightMode ? 'light' : ''}`}>{t("proyects.descripcion5")}
                    </p>
                    </div>
                    <div className='proyect__icons-container'>
                        <img className='icon' src="./css-icon.png" alt="" />
                        <img className='icon' src="./html-icon.png" alt="" />
                        <img className='icon' src="./react-icon.png" alt="" />
                        <img className='icon' src="./javascript-icon.png" alt="" />
                    </div>
                </div>
            </div>
        </SwiperSlide>
        
        ...
        </Swiper>
    </div>
   
  )
}

export default Proyects
