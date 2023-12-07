import { Canvas } from "@react-three/fiber"
import { OrbitControls, ScrollControls } from '@react-three/drei';
import { McLaren } from "../models/McLaren";
import { WawaOffice } from "../models/WawaOffice";

type Car3DViewProps = {
}

export const Car3DView = (props: Car3DViewProps) => {

  return <Canvas
    camera={{
      fov: 100,
      position: [2.3, 1.5, 2.3],
    }}
  >
    <ambientLight intensity={1} />
    <OrbitControls enableZoom={false} />
    {/* <ScrollControls pages={3} damping={0.25}>
      <WawaOffice />
    </ScrollControls> */}
    <McLaren />
  </Canvas>
}