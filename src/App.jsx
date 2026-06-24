import React from 'react';
import './App.css';

// 1. Importaciones de imágenes principales y de fondo
import toby from './assets/toby.jpg';
import candelabroBackground from './assets/candelabro.jpg'; 
import ponyBackground from './assets/pony.jpg';
import miAvatar from './assets/XD.jpg'; 
import mellonBackground from './assets/mellon.png'; 

// 2. Importación del logo de la universidad
import ucsspLogo from './assets/UCSSP.png';

// 3. Importaciones de las insignias (Medallas)
import dotaBadge from './assets/dota.png';
import minecraftBadge from './assets/minecraft.png';
import pythonBadge from './assets/python.png';
import jsBadge from './assets/JS.png';           
import typeBadge from './assets/TYPE.png';       
import noscriptBadge from './assets/noscript.png'; 

// 4. Importaciones para la sección de Hobbies
import baquetasIcon from './assets/baquetas.png'; 
import musicIcon from './assets/music.png';       
import devIcon from './assets/dev.png';           

// 5. Importaciones de OS y Redes Sociales
import appleIcon from './assets/apple.png';
import linuxIcon from './assets/linux.png'; 
import discordIcon from './assets/discord.png';
import gitIcon from './assets/git.png';
import igIcon from './assets/ig.png';

// 6. Importaciones del Squad de Compañeros y Nueva Imagen SOAD
import companero1 from './assets/companero1.jpg';
import companero2 from './assets/companero2.png';
import companero3 from './assets/companero3.png';
import companero4 from './assets/companero4.png';
import fotoperro from './assets/fotoperro.png';
import soadImg from './assets/SOAD.png'; // <- Nueva importación de System of a Down

function App() {
  return (
    <div className="steam-profile-container">
      {/* Capa de la animación cuántica de fondo */}
      <div className="starfield"></div>

      {/* Elementos decorativos flotantes del fondo */}
      <img src={toby} className="floating-dog" alt="Toby Fox" />
      <img src={mellonBackground} className="floating-mellon-left" alt="Mellon Colgante" />
      <img src={ponyBackground} className="floating-background-left" alt="Pony Background" />
      <img src={candelabroBackground} className="floating-background-right-lower" alt="Candelabro Background" /> 
      
      {/* Insignia NoScript flotando en el lado derecho abajo del candelabro */}
      <img src={noscriptBadge} className="floating-noscript-corner" alt="NoScript Corner" />

      {/* ENCABEZADO DEL PERFIL */}
      <header className="profile-header">
        <div className="avatar-holder">
          {/* Contenedor del marco dinámico Mellon Amarillo con foto integrada en negro */}
          <div className="avatar-frame-container monochrome-frame">
            <img src={miAvatar} alt="Avatar Alexwont" className="profile-avatar" />
          </div>
        </div>
        
        <div className="profile-info">
          <h1 className="profile-name">Alexwont <span className="arrow-down">▼</span></h1>
          <p className="profile-summary">Arequipa, Peru 🇵🇪</p>
          
          <div className="custom-status">
            <span className="status-text">Dev </span>
            <div className="status-icon"></div>
          </div>
          
          <p className="profile-detailed-summary">
            Estudiante de Ciencias de la Computacion en la Universidad Catolica San Pablo con habilidades "Goood"
          </p>
        </div>

        {/* SECCIÓN DEL NIVEL Y LA INSIGNIA DESTACADA */}
        <div className="profile-level-badge">
          <div className="level-container">
            Edad <span className="level-number">17</span>
          </div>
          
          <div className="badge-featured">
            <div className="badge-icon-holder">
              <img src={ucsspLogo} className="badge-icon-img" alt="Insignia UCSSP" />
            </div>
            
            <div className="badge-details">
              <span className="badge-title">Estudiante de CCOMP</span>
              <span className="badge-xp">67 EXP</span>
            </div>
          </div>
          
          <button className="edit-profile-btn"></button>
        </div>
      </header>

      {/* CUERPO PRINCIPAL DEL PERFIL */}
      <main className="profile-body">
        
        {/* COLUMNA IZQUIERDA: EXPOSITORES */}
        <section className="main-content-column">
          
          {/* EXPOSITOR DE DESTACADOS: SQUAD DE COMPAÑEROS */}
          <div className="showcase-container unique-squad-showcase">
            <h3 className="showcase-title">Expositor de destacados (CCOMP Squad)</h3>
            <div className="showcase-grid">
              
              {/* Compañero principal en grande (Ocupa el recuadro de la izquierda) */}
              <div className="showcase-main-item">
                <img src={companero2} alt="Compañero Principal" className="squad-img-large" />
                <div className="squad-tag-overlay">EVERYONE ZZZ</div>
              </div>
              
              {/* Barra lateral derecha con los otros integrantes del equipo */}
              <div className="showcase-sidebar-pics">
                
                <div className="sidebar-pic-wrapper squad-member">
                  <img src={companero1} alt="Miembro 1" />
                  <span className="member-tooltip">Dev 1</span>
                </div>
                
                <div className="sidebar-pic-wrapper squad-member">
                  <img src={companero3} alt="Miembro 2" />
                  <span className="member-tooltip">Dev 2</span>
                </div>
                
                <div className="sidebar-pic-wrapper squad-member">
                  <img src={companero4} alt="Miembro 3" />
                  <span className="member-tooltip">Design</span>
                </div>
                
                {/* Último espacio reservado para la mascota con el contador superior */}
                <div className="sidebar-pic-wrapper more-showcase-container squad-member mascot-holder">
                  <img src={fotoperro} alt="Mascota del grupo" className="squad-mascot-img" />
                  <div className="more-showcase-overlay squad-overlay-yellow">+ 1</div>
                </div>

              </div>
            </div>
          </div>

          {/* NUEVO EXPOSITOR ARTÍSTICO SOAD: UBICADO EXACTAMENTE DEBAJO DE LA SQUAD */}
          <div className="showcase-container soad-art-showcase">
            <h3 className="showcase-title"></h3>
            <div className="soad-display-frame">
              <img src={soadImg} alt="System of a Down Artwork" className="soad-main-image" />
            </div>
          </div>

        </section>

        {/* COLUMNA DERECHA: BARRA LATERAL */}
        <aside className="sidebar-column">
          <div className="online-status">En línea</div>

          {/* SECCIÓN DE MEDALLAS */}
          <div className="sidebar-block">
            <h4>Insignias <span className="count"></span></h4>
            <div className="badges-row-custom">
              <img src={dotaBadge} className="profile-mini-badge" alt="Dota 2" />
              <img src={minecraftBadge} className="profile-mini-badge" alt="Minecraft" />
              <img src={pythonBadge} className="profile-mini-badge" alt="Python" />
              <img src={jsBadge} className="profile-mini-badge" alt="JavaScript" />
              <img src={typeBadge} className="profile-mini-badge" alt="HTML5" />
            </div>
          </div>

          {/* SECCIÓN DE CURSOS */}
          <div className="sidebar-block">
            <h4>Cursos</h4>
            <div className="courses-list-simple">
              <div className="course-text-item">Fundamentos de Programación</div>
              <div className="course-text-item">Introducción a la Computación</div>
              <div className="course-text-item">Matemática I</div>
              <div className="course-text-item">Logica I</div>
              <div className="course-text-item">Comunicación I</div>
            </div>
          </div>

          {/* SECCIÓN DE HOBBIES */}
          <div className="sidebar-block">
            <h4>Hobbies <span className="count"></span></h4>
            <div className="hobbies-grid-custom">
              <div className="hobby-item-icon"><span className="gamepad-emoji">🎮</span></div>
              <div className="hobby-item-icon"><img src={baquetasIcon} alt="Batería" /></div>
              <div className="hobby-item-icon"><img src={musicIcon} alt="Música" /></div>
              <div className="hobby-item-icon"><img src={devIcon} alt="Programación" /></div>
            </div>
          </div>

          {/* SECCIÓN OS */}
          <div className="sidebar-block">
            <h4>OS</h4>
            <div className="hobbies-grid-custom">
              <div className="hobby-item-icon">
                <img src={appleIcon} alt="macOS" />
              </div>
              <div className="hobby-item-icon">
                <img src={linuxIcon} alt="Linux" />
              </div>
            </div>
          </div>

          {/* SECCIÓN DE REDES SOCIALES */}
          <div className="sidebar-block">
            <h4>Redes <span className="count"></span></h4>
            <div className="hobbies-grid-custom">
              <a href="https://discord.gg/Vjem232W" target="_blank" rel="noopener noreferrer" className="hobby-item-icon">
                <img src={discordIcon} alt="Discord" />
              </a>
              <a href="https://github.com/Alexwont" target="_blank" rel="noopener noreferrer" className="hobby-item-icon">
                <img src={gitIcon} alt="GitHub" />
              </a>
              <a href="https://www.instagram.com/alexwonnt?igsh=ODA3MzVtbjFsZGpl&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hobby-item-icon">
                <img src={igIcon} alt="Instagram" />
              </a>
            </div>
          </div>

        </aside>
      </main>
    </div>
  );
}

export default App;