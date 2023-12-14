import { Canvas } from "@react-three/fiber"
import { OrbitControls, } from '@react-three/drei';
import { CarModel, } from "./CarModel";
import { availableModels } from "../data/carData";

export const Car3DView = () => {
  const { metadata, modelPath } = availableModels.mclaren;

  return <><Canvas
    camera={{
      fov: 100,
      position: [2.3, 1.5, 2.3],
    }}
  >
    <ambientLight intensity={5} />

    {/* <pointLight position={[1, 1, 1]} intensity={5} /> */}
    <OrbitControls enablePan={true} />
    <directionalLight position={[5, 5, 5]} intensity={10} />
    <CarModel gltfPath={modelPath} metadata={metadata} />
  </Canvas>
  </>
}