import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Particles from './components/Particles';
import Lightning from './components/lightning';
import PortfolioGrid from './components/grids';
function App() {

  return (
    <>
      {/* <div className="absolute  h-full w-full bg-black">
        <Lightning
          hue={220}
          xOffset={0}
          speed={1}
          intensity={1}
          size={1}
        />
      </div> */}
      <div className='relative h-full w-full overflow-x-hidden bg-black' >
        <PortfolioGrid />
        {/* <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        /> */}
      </div>
      

    </>
  )
}

export default App
