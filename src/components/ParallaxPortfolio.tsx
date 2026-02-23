import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import FloatingIcon from './FloatingIcon';

// Hero Icons
import MonitorIcon from '../assets/icons/monitor.svg';
import HeadphoneIcon from '../assets/icons/headphones.svg';
import MusicIcon from '../assets/icons/musicnote.svg';
import CameraIcon from '../assets/icons/photo-camera.svg';
import TravelIcon from '../assets/icons/travelling.svg';
import PaletteIcon from '../assets/icons/paint-palette.svg';
import NotebookIcon from '../assets/icons/notebook.svg';
import BicycleIcon from '../assets/icons/bicycle.svg';
import PortfolioIcon from '../assets/icons/portfolio.svg';
import TurntableIcon from '../assets/icons/turntable.svg';
import Background from '../assets/backgrounds/garden-tree.svg';

// Projects Icons
import WrenchIcon from '../assets/icons/adjustable-wrench.svg';
import RubikIcon from '../assets/icons/Rubik.svg';
import BlueprintIcon from '../assets/icons/blueprint.svg';
import CloudIcon from '../assets/icons/computing-cloud.svg';
import FolderIcon from '../assets/icons/folders.svg';
import GearsIcon from '../assets/icons/gears.svg';
import GraphicsIcon from '../assets/icons/graphics.svg';
import NotebookIcon2 from '../assets/icons/notebook2.svg';

// About Icons
import CoffeeIcon from '../assets/icons/coffee.svg';
import ReadingIcon from '../assets/icons/reading.svg';
import SunglassesIcon from '../assets/icons/sunglasses.svg';
import WebsiteIcon from '../assets/icons/website.svg';
import WineIcon from '../assets/icons/wine.svg';
import PhotoIcon from '../assets/icons/photo.svg';
import BooksIcon from '../assets/icons/books.svg';
import PawIcon from '../assets/icons/paw-print.svg';
import DogIcon from '../assets/icons/dog.svg';
import FlowerIcon from '../assets/icons/flower.svg';

// Contact Icons
import AgendaIcon from '../assets/icons/agenda.svg';
import CheckListIcon from '../assets/icons/check-list.svg';
import EmailIcon from '../assets/icons/email.svg';
import PhoneIcon from '../assets/icons/smartphone.svg';
import MapIcon from '../assets/icons/map.svg';
import MessageIcon from '../assets/icons/message.svg';
import SendIcon from '../assets/icons/send.svg';
import PostItIcon from '../assets/icons/post-it.svg';

interface ParallaxPortfolioProps {
  hero: React.ReactNode;
  projects: React.ReactNode;
  about: React.ReactNode;
  contact: React.ReactNode;
}

const ParallaxPortfolio: React.FC<ParallaxPortfolioProps> = ({ hero, projects, about, contact }) => {
  return (
    <Parallax pages={5} style={{ top: '0', left: '0' }}>

      {/* Background Layers */}

      {/* Hero Background */}
      <ParallaxLayer offset={0} speed={0} style={{ background: `url(${typeof Background === 'string' ? Background : Background.src})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.25 }} />

      {/* Projects Background (Spanning 2 pages) */}
      <ParallaxLayer offset={1} speed={1} factor={2} style={{ background: 'linear-gradient(to right, #D585FF 0%, #00FFEE 100%)', opacity: 0.8 }} />
      <ParallaxLayer offset={1} speed={1} factor={2} style={{ background: 'linear-gradient(to bottom, #141821 0%, transparent 20%, transparent 80%, #141821 100%)' }} />

      {/* About Background */}
      <ParallaxLayer offset={3} speed={1} style={{ background: '#2D3748' }}>
        <div className="absolute inset-0 w-full h-full bg-inherit" style={{ clipPath: 'polygon(0 16%, 100% 4%, 100% 82%, 0 94%)', zIndex: 0 }}></div>
      </ParallaxLayer>

      {/* Contact Background */}
      <ParallaxLayer offset={4} speed={1} style={{ background: '#663399' }}>
          {/* Wave Animation could be added here if complex SVG, otherwise handled in CSS/SVG layer */}
          <div className="absolute bottom-0 w-full transform rotate-180 z-0 h-64 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" id="contact-wave" viewBox="0 0 800 338.05" preserveAspectRatio="none">
              <path className="fill-current text-white opacity-20">
                <animate
                  attributeName="d"
                  values={`M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;
                  M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;
                  M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z`}
                  repeatCount="indefinite"
                  dur="30s"
                />
              </path>
            </svg>
          </div>
      </ParallaxLayer>

      {/* Floating Icons */}

      {/* Hero Icons (Offset 0) */}
      <FloatingIcon src={MonitorIcon} offset={0} speed={0.2} top="70%" left="5%" width="24px" className="hidden sm:block opacity-20" />
      <FloatingIcon src={HeadphoneIcon} offset={0} speed={0.8} top="65%" left="50%" width="16px" className="hidden sm:block opacity-20" />
      <FloatingIcon src={MusicIcon} offset={0} speed={0.6} top="58%" left="19%" width="16px" className="opacity-20" />
      <FloatingIcon src={CameraIcon} offset={0} speed={0.2} top="65%" left="30%" width="16px" className="opacity-20" />
      <FloatingIcon src={TravelIcon} offset={0} speed={0.4} top="50%" left="90%" width="20px" className="opacity-20" />
      <FloatingIcon src={PaletteIcon} offset={0} speed={0.3} top="5%" left="35%" width="16px" className="opacity-20" />
      <FloatingIcon src={NotebookIcon} offset={0} speed={0.5} top="10%" left="45%" width="16px" className="hidden sm:block opacity-20" />
      <FloatingIcon src={BicycleIcon} offset={0} speed={0.7} top="8%" left="75%" width="20px" className="opacity-20" />
      <FloatingIcon src={PortfolioIcon} offset={0} speed={0.2} top="20%" left="85%" width="16px" className="opacity-20" />
      <FloatingIcon src={TurntableIcon} offset={0} speed={-0.1} top="90%" left="70%" width="48px" className="opacity-20" />

      {/* Projects Icons (Offset 1-2) */}
      <FloatingIcon src={WrenchIcon} offset={1} speed={0.2} top="75%" left="85%" width="16px" className="opacity-20" />
      <FloatingIcon src={RubikIcon} offset={1.1} speed={-0.1} top="20%" left="70%" width="16px" className="opacity-20" />
      <FloatingIcon src={BlueprintIcon} offset={1.2} speed={0.4} top="5%" left="25%" width="48px" className="opacity-20" />
      <FloatingIcon src={CloudIcon} offset={1.3} speed={-0.2} top="30%" left="90%" width="16px" className="opacity-20" />
      <FloatingIcon src={FolderIcon} offset={1.8} speed={0.4} top="90%" left="70%" width="48px" className="opacity-20" />
      <FloatingIcon src={GearsIcon} offset={1.7} speed={0.3} top="75%" left="18%" width="48px" className="opacity-20" />
      <FloatingIcon src={GraphicsIcon} offset={1.5} speed={0.8} top="10%" left="75%" width="16px" className="opacity-20" />
      <FloatingIcon src={NotebookIcon2} offset={1.4} speed={0.2} top="10%" left="45%" width="48px" className="opacity-20" />

      {/* About Icons (Offset 3) */}
      <FloatingIcon src={CoffeeIcon} offset={3} speed={0.2} top="20%" left="60%" width="32px" className="opacity-10 hidden sm:block" />
      <FloatingIcon src={ReadingIcon} offset={3} speed={0.4} top="5%" left="25%" width="16px" className="opacity-10" />
      <FloatingIcon src={SunglassesIcon} offset={3} speed={0.6} top="80%" left="80%" width="16px" className="opacity-10 hidden sm:block" />
      <FloatingIcon src={WebsiteIcon} offset={3} speed={0.2} top="70%" left="80%" width="16px" className="opacity-10" />
      <FloatingIcon src={WineIcon} offset={3} speed={0.4} top="50%" left="95%" width="16px" className="opacity-10" />
      <FloatingIcon src={PhotoIcon} offset={3} speed={0.8} top="15%" left="85%" width="16px" className="opacity-10 hidden sm:block" />
      <FloatingIcon src={BooksIcon} offset={3} speed={0.2} top="10%" left="45%" width="16px" className="opacity-10 hidden sm:block" />
      <FloatingIcon src={PawIcon} offset={3} speed={0.6} top="75%" left="50%" width="64px" className="opacity-10 hidden sm:block" />
      <FloatingIcon src={DogIcon} offset={3} speed={0.4} top="10%" left="10%" width="16px" className="opacity-10" />
      <FloatingIcon src={FlowerIcon} offset={3} speed={0.2} top="20%" left="4%" width="16px" className="opacity-10 hidden sm:block" />
      <FloatingIcon src={RubikIcon} offset={3} speed={-0.1} top="80%" left="5%" width="48px" className="opacity-10 hidden sm:block" />

      {/* Contact Icons (Offset 4) */}
      <FloatingIcon src={AgendaIcon} offset={4} speed={0.2} top="20%" left="70%" width="16px" className="opacity-20 hidden sm:block" />
      <FloatingIcon src={CheckListIcon} offset={4} speed={0.4} top="5%" left="25%" width="16px" className="opacity-20" />
      <FloatingIcon src={EmailIcon} offset={4} speed={0.6} top="50%" left="95%" width="16px" className="opacity-20" />
      <FloatingIcon src={PhoneIcon} offset={4} speed={0.8} top="15%" left="85%" width="16px" className="opacity-20" />
      <FloatingIcon src={MapIcon} offset={4} speed={0.2} top="20%" left="4%" width="16px" className="opacity-20" />
      <FloatingIcon src={MessageIcon} offset={4} speed={0.4} top="60%" left="70%" width="16px" className="opacity-20" />
      <FloatingIcon src={SendIcon} offset={4} speed={0.6} top="25%" left="20%" width="16px" className="opacity-20" />
      <FloatingIcon src={PostItIcon} offset={4} speed={0.8} top="70%" left="80%" width="16px" className="opacity-20" />

      {/* Content Layers */}

      <ParallaxLayer offset={0} speed={0.5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
         <div className="w-full h-full flex flex-col justify-center items-center">
             {hero}
         </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.5} factor={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
         <div className="container mx-auto px-6 py-20 relative z-10 text-white">
             {projects}
         </div>
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0.5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="container mx-auto px-6 py-20 relative z-10 text-white">
             {about}
          </div>
      </ParallaxLayer>

      <ParallaxLayer offset={4} speed={0.5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="container mx-auto px-6 py-20 relative z-10 text-white w-full">
             {contact}
          </div>
      </ParallaxLayer>

    </Parallax>
  );
};

export default ParallaxPortfolio;
