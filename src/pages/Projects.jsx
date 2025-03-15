import React from 'react'
import FlowingMenu from '../animated/FlowingMenu'

function Projects() {
    const demoItems = [
        { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
        { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
        { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
        { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
      ];
  return (
    <div className='bg-black'>
        {/* import FlowingMenu from './FlowingMenu' */}



<div style={{ height: '100vh', width:'', position: 'relative' }}>
  <FlowingMenu items={demoItems} />
</div>
    </div>
  )
}

export default Projects