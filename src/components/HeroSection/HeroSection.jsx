import React, { useState } from 'react';
import './HeroSection.scss';

const HeroSection = () => {
  return (
<section className="banner">
        <div className="banner__container">
        <div className="banner__composition">
                <div className="banner__text--column">
                        <div className="banner__title">
                                <h1>Browse top quality <span>Guitars</span> online</h1>
                        </div>
                        <div className="banner__subtitle">
                                <p>Explore 50k+ latest collections of branded guitars online with Rhythm.</p>
                        </div>
                        <div className="banner__buttons--row">
        <a href="#" className="banner__button--accent">Get the App</a>
        <div className="banner__icons">
                <img src="/img/icons/03-store.svg" alt="click to download application for Android device"  width={32} height={32} loading={'eager'}/>
                                <img src="/img/icons/02-apple.svg" alt="click to download application for IOS device"  width={32} height={32} loading={'eager'}/>
        </div>
                        </div>
                </div>
                <div className="banner__decoration">
                        <div className="banner__circle--icon">
                                <img src="/img/icons/01.svg" alt="small orange batterfly icon"  width={28} height={28 } loading='eager'/>
                        </div>
                </div>
        </div>
        </div>
</section>
)
};
export default HeroSection;