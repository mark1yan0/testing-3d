import './App.css'
import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import Configurator from './components/Configurator'

function App() {

  return (
    <div className='App '>
      <Canvas>
        <color attach="background" args={["#010101"]}/>
        <fog attach='fog' args={['#010101', 10, 20]} />
        <Experience />
      </Canvas>
      <Configurator />
    </div>
  )
}



export default App
