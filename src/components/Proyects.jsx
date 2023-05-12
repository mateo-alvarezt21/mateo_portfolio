import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import './styles/Proyects.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Proyects = () => {
  return (
    <div>
        <h1 className='proyect'>Proyectos</h1>
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
            <h2 className='proyect__title' id='proyects'>Weather App</h2>
            <div className="proyect__img-p">
                <div className='img-container'>
                    <img className='proyect__img' src="./weather.png" alt="" />
                </div>
                <div className="proyect__p-icon">
                    <div className='p-container'>
                        <p className='proyect__p'>Web que permite al usuario saber datos con precisión del clima a en su localización, usando parámetros de geolocalización y dando la información de forma grafica y comprensible para el usuario mediante API </p>
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
            <h2 className='proyect__title'>Ecommerce</h2>
            <div className="proyect__img-p">
                <div className='img-container'>
                    <img className='proyect__img' src="./ecommerce.png" alt="" />
                </div>
                <div className="proyect__p-icon">
                    <div className='p-container'>
                        <p className='proyect__p'>Web desarrollada al 100% con metodología ágil, usando dependencias de React para paginación, cuenta con un carrito de compras 100% funcional y diseño totalmente responsive</p>
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
            <h2 className='proyect__title'>Pokedex</h2>
            <div className="proyect__img-p">
                <div className='img-container'>
                    <img className='proyect__img' src="./pokedex.png" alt="" />
                </div>
                <div className="proyect__p-icon">
                    <div className='p-container'>
                        <p className='proyect__p'>Web replica de una Pokedex en donde el usuario podra buscar todos los iconicos pokemon de la serie animada en conjunto a sus estadisticas, cuenta con diseño responsivo adaptable a cualquier tipo de dispositivo</p>
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
            <h2 className='proyect__title'>Crud de Usuarios</h2>
            <div className="proyect__img-p">
                <div className='img-container'>
                    <img className='proyect__img' src="./userscrud.png" alt="" />
                </div>
                <div className="proyect__p-icon">
                    <div className='p-container'>
                        <p className='proyect__p'>Web que permite hacer registros de usuarios. Usa metodologías ágiles, Redux, APIS y dependencias personalizadas y diseño responsivo a todo tipo de tamaño
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
            <h2 className='proyect__title'>Rick y Morty</h2>
            <div className="proyect__img-p">
                <div className='img-container'>
                    <img className='proyect__img' src="./rickymorty.png" alt="" />
                </div>
                <div className="proyect__p-icon">
                    <div className='p-container'>
                        <p className='proyect__p'>Página web la cual nos sirve para trackear los personajes y dimensiones de la popular caricatura “Rick y Morty”, Se implementaron API y uso de Custom Hooks para reducir tiempos de ejecución. Diseño responsivo a todo tipo de tamaño
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
