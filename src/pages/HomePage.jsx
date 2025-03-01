import React from 'react'
import Particles from '../animated/Particles'
import Dock from '../animated/Dock'
import { GoHome } from "react-icons/go";
import { BsFolder } from "react-icons/bs";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { LuMessageSquareDot } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate= useNavigate();

      const items = [
        { icon: <GoHome color='white' />, label: 'Home', onClick: () => alert('Home!') },
        { icon: <BsFolder color='white'/>, label: 'My Projects', onClick: () => alert('Archive!') },
        { icon: <LuMessageSquareDot color='white'/>, label: 'Reach Me', onClick: () => navigate('/contact') },
        { icon: <HiOutlineDocumentArrowDown color='white' />, label: 'Download Resume', onClick: () => alert('Settings!') },
      ];

  return (
    <div className='h-screen bg-black'>
  

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={500}
    particleSpread={10}
    speed={0.3}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>

<Dock 
    items={items}
    panelHeight={68}
    baseItemSize={50}
    magnification={70}
  />



    </div>
  )
}

export default HomePage