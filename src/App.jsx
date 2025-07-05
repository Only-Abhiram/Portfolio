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
    <div className="absolute inset-0 -z-10 h-full w-full">
        <Lightning
          hue={220}
          xOffset={0}
          speed={1}
          intensity={1}
          size={1}
        />
      </div>
      <div className='relative h-full w-full overflow-x-hidden' >
        <PortfolioGrid/>
      </div>
      
    </>
  )
}

export default App
