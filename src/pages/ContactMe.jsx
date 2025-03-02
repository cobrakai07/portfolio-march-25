import React from 'react'
import Particles from '../animated/Particles'
import RotatingText from '../animated/RotatingText'
import ScrollVelocity from '../animated/ScrollVelocity'
import FlowingMenu from '../animated/FlowingMenu'
import Dock from '../animated/Dock'
import { GoHome } from "react-icons/go";
import { BsFolder } from "react-icons/bs";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { LuMessageSquareDot } from "react-icons/lu";
import ParticlesContactPage from '../animated/ParticlesContactPage'
import { useNavigate } from 'react-router-dom'

const ContactMe = () => {
 
      const navigate=useNavigate();
      const items = [
        { icon: <GoHome color='white' />, label: 'Home', onClick: () => navigate('/profile') },
        { icon: <BsFolder color='white'/>, label: 'My Projects', onClick: () => alert('Archive!') },
        { icon: <LuMessageSquareDot color='white'/>, label: 'Reach Me', onClick: () => alert('Profile!') },
        { icon: <HiOutlineDocumentArrowDown color='white' />, label: 'Download Resume', onClick: () =>  navigate('/skills') },
      ];

  return (
    <div className='h-screen bg-black overflow-hidden'>
  

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <ParticlesContactPage
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

export default ContactMe