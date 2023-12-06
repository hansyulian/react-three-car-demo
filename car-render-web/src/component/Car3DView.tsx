import { Canvas } from "@react-three/fiber"
import { OrbitControls, ScrollControls } from '@react-three/drei';
import { WawaOffice } from "../models/WawaOffice";

export const Car3DView = () => {


  return <Canvas camera={{
    fov: 64,
    position: [2.3, 1.5, 2.3],
  }}>
    <ambientLight intensity={1} />
    <OrbitControls enableZoom={false} />
    <ScrollControls pages={3} damping={0.25}>
      <WawaOffice />
    </ScrollControls>
  </Canvas>
}