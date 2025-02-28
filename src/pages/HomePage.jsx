import React from 'react'
import Particles from '../animated/Particles'
import RotatingText from '../animated/RotatingText'
import ScrollVelocity from '../animated/ScrollVelocity'
import FlowingMenu from '../animated/FlowingMenu'

const HomePage = () => {
    const demoItems = [
        { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
        { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
        { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
        { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
      ];
  return (
    <div className='h-screen bg-black'>
  

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>

<div className='text-white flex gap-3 justify-center text-3xl font-stretch-semi-condensed flex-wrap'>
    <div className='flex justify-center items-center'>I am a</div>
    <RotatingText
  texts={['React ⚛️', 'React Native ⚛️', 'Java ☕︎', 'Cool 😎','Full-Stack 🧑‍💻']}
  mainClassName="px-2 sm:px-2 md:px-3 bg-blue-400 text-white font-semibold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/>
    <div className='flex justify-center items-center'>Developer</div>
</div>

{/* <div style={{ height: '600px', position: 'relative'  }} className='bg-black'>
  <FlowingMenu items={demoItems} />
</div> */}


    </div>
  )
}

export default HomePage