import React from 'react'
import Squares from '../animated/Sqaures'
import { useNavigate } from 'react-router-dom';
import { GoHome } from "react-icons/go";
import { BsFolder } from "react-icons/bs";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { LuMessageSquareDot } from "react-icons/lu";
import Dock from '../animated/Dock';

export const Details = () => {
    const navigate= useNavigate();
     const items = [
            { icon: <GoHome color='white' />, label: 'Home', onClick: () => alert('Home!') },
            { icon: <BsFolder color='white'/>, label: 'My Projects', onClick: () => alert('Archive!') },
            { icon: <LuMessageSquareDot color='white'/>, label: 'Reach Me', onClick: () => navigate('/contact') },
            { icon: <HiOutlineDocumentArrowDown color='white' />, label: 'Download Resume', onClick: () => alert('Settings!') },
          ];
  return (
    <div className='h-screen bg-black relative'>
    
    <p className='absolute bottom-0 bg-transparent text-white'>hooooo</p>
  
  <Squares 
  speed={0.3} 
  squareSize={40}
  direction='diagonal' // up, down, left, right, diagonal
  borderColor='#fff'
  hoverFillColor='#222'
  />
  <Dock 
      items={items}
      panelHeight={68}
      baseItemSize={50}
      magnification={70}
    />
  
    </div>
  )
}
