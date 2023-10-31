import { useState, Suspense, useEffect } from 'react';
import { useTranslation,  } from 'react-i18next';


import './App.css'


function App() {
  const { t ,i18n } = useTranslation();
  const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language); //change the language
}

  return (
    <>
          
        <select className="custom-select" style={{width: 200}} onChange={onClickLanguageChange}>
        <option value="en-UX" >English</option>
        <option value="es-MX" >Spanish</option>
        </select>
      
        <h1>{t('dashboard.title')}</h1>

      
    </>
  )
}

export default App
