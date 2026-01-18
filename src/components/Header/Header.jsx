import React, { useState } from 'react';
import './Header.scss';

const Header = ( ) => { // вызов функции
 return (// тело разметки (моя вёрстка идет сюда)
  <header className="header">
       <div className="header__container">
               <div className="header__navigation">
                 <div className="header__logo">
                         <img src="/img/icons/01.svg" alt="rytm shop orange butterfly icon"  loading='lazy' width={20} height={20} />
                         <h3>Rhythm</h3>
                 </div>
                 <nav className="header__links">
                        <a href="#" className="header__link--active">Store</a>
                        <a href="#" className="header__link">Collection</a>
                        <a href="#" className="header__link">Support</a>
                 </nav>
                </div>
         </div>

  </header>

);
};


export default Header;