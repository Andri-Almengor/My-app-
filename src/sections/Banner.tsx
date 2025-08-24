import React from 'react';
import '../styles/Banner.css'
import Navbar from '../components/NavBar';
import TypingEffect from '../components/TypingEffect';
const Banner: React.FC = () => {

  return (
   <>
      <Navbar />
      <div id="home"className="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Mi nombre es</div>
            <div className="text-2">Andrick Almengor</div>
            <div className="text-3">y Soy un <TypingEffect strings={["Desarrollador", "ServiceDesk", "IT Support"]} /></div>
            <a href="https://github.com/Andri-Almengor">Ir a Githup</a>
          </div>
        </div>
      </div>
    </>

  );
};

export default Banner;
