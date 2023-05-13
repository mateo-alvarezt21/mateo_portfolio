import React from 'react'
import "./styles/Contact.css"

const Contact = () => {
  return (
    <form id='contact' action="https://formsubmit.co/miketry21@gmail.com" method="POST">
        <h2 className='form-title'> Contacto</h2>

        <div className='input-group'>
            <label htmlFor="name">Nombre</label>
            <input type="text" name='name' id='name' placeholder='Nombre' />

            <label htmlFor="phone">Telefono</label>
            <input type="tel" name='phone' id='phone' placeholder='Telefono' />

            <label htmlFor="email">Email</label>
            <input type="email" name='email' id='email' placeholder='Email' />

            <label htmlFor='message'>Mensaje</label>
            <textarea name='message' id='message' cols={30} rows={5} placeholder='Mensaje'></textarea>

            <input className='btn' type="submit" value="Enviar" />

            <input type="hidden" name='_next' value="https://mateoalvarez-portfolio.netlify.app/" />
            <input type="hidden" name='_captcha' value="false" />
        </div>
    </form>
  )
}

export default Contact