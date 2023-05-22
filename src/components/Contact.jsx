import React from 'react'
import "./styles/Contact.css"
import {useTranslation} from "react-i18next"

const Contact = ({lightMode}) => {
  const [t, i18n] = useTranslation("global")

  return (
    <div className={`formulario ${lightMode ? 'light' : ''}`}  >
      <form id='contact' action="https://formsubmit.co/miketry21@gmail.com" method="POST">
          <h2 className='form-title'> {t("contacto.contacto")}</h2>
          <div className='input-group'>
              <label htmlFor="name">{t("contacto.nombre")}</label>
              <input type="text" name='name' id='name' placeholder={t("contacto.nombre-place")} />
              <label htmlFor="phone">{t("contacto.telefono")}</label>
              <input type="tel" name='phone' id='phone' placeholder={t("contacto.telefono-place")} />
              <label htmlFor="email">{t("contacto.email")}</label>
              <input type="email" name='email' id='email' placeholder={t("contacto.email-place")} />
              <label htmlFor='message'>{t("contacto.mensaje")}</label>
              <textarea name='message' id='message' cols={30} rows={5} placeholder={t("contacto.mensaje-place")}></textarea>
              <input className='btn' type="submit" value={t("contacto.enviar")} />
              <input type="hidden" name='_next' value="https://mateoalvarez-portfolio.netlify.app/" />
              <input type="hidden" name='_captcha' value="false" />
          </div>
      </form>
    </div>
  )
}

export default Contact