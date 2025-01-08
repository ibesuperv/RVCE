import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import Intro from './Intro';

export default function Home() {
  const today = new Date();
  const formattedDate = `${today.getDate().toString().padStart(2, "0")}/${(today.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${today.getFullYear()}`;

  return (
    <>
    <div style={{position:'relative'}} className="w-full h-screen overflow-hidden">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars />
    </Canvas>
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <a href="https://rvce.edu.in/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px',color:'burlywood' }}>
        RVCE
        <br />
        Autonomous Institution 
      </a>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>
        <h1 className='h1text' style={{ margin: 0, padding: 0, fontSize: '15em', fontWeight: 500, letterSpacing: '1rem' }}>RVCE</h1>
      </div>
      <div style={{ position: "absolute", bottom: 40, right: 40, fontSize: "13px" }}>
      {formattedDate}
    </div> </div>
    </div>
    <Intro/>
    </>
  )
}

function Stars(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}
