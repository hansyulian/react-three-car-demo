import { Canvas } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei';
import { McLaren } from "../models/McLaren";

type Car3DViewProps = {
  value: number;
}

export const Car3DView = (props: Car3DViewProps) => {
  const { value } = props;

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
    <McLaren value={value} />
  </Canvas>
}