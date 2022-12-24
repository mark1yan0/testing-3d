import './App.css';
import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import Configurator from './components/Configurator';
import { useState } from 'react';
import SidebarToggle from './components/Configurator/Toggle';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className='App'>
      <Canvas>
        <color attach='background' args={['#010101']} />
        <fog attach='fog' args={['#010101', 10, 20]} />
        <Experience />
      </Canvas>
      {!open && <SidebarToggle toggle={() => setOpen(!open)} />}
      {open && <Configurator close={() => setOpen(false)} />}
    </div>
  );
}

export default App;
