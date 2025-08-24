import React from 'react';
import '../styles/About.css';
import Wombat from '../img/Wombat.png';
import TypingEffect from '../components/TypingEffect';

const Profile: React.FC = () => {
  return (
    <div>
      <div className="about" id="about">
        <div className="max-width">
          <h2 className="title">Sobre mi</h2>
          <div className="about-content">
            <div className="column left">
              <img src={Wombat} alt="Wombat" />
            </div>
            <div className="column right">
              <div className="text">
                Soy un apasionado <TypingEffect strings={["Desarrollador", "ServiceDesk", "IT Support"]} />
              </div>
              <p>
                Con experiencia en programación web y soporte técnico. Proactivo y orientado a resultados, con
                conocimiento en JavaScript, CSS, Node.js y React. Capaz de trabajar tanto de forma independiente como en equipo, con
                fuertes habilidades de comunicación, atención al detalle y facilidad para aprender nuevas tecnologías rápidamente.
              </p>
              {/* Botón de descarga del CV */}
              <a 
                href="/CV_Andrick_Almengor_Quiros.pdf" // Reemplaza con la ruta correcta si tu archivo está en una ubicación diferente
                download="CV_Andrick_Almengor_Quiros.pdf" 
                className="download-btn"
              >
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
