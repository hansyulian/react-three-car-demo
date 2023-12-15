import { Canvas, useThree } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Stage, } from '@react-three/drei';
import { CarModel, } from "./CarModel";
import { availableModels } from "../data/carData";
import { useLayoutEffect } from "react";

const usedModel = availableModels.mclaren;

export const Car3DView = () => {
  const { metadata, modelPath } = usedModel;

  return <Canvas
    gl={{ preserveDrawingBuffer: true }}
    shadows
    dpr={[1, 1.5]}
    camera={{ position: [5, 5, 5], fov: 50 }}
  >
    <group dispose={null}>
      <ambientLight intensity={0.25} />
      <OrbitControls enablePan={true} />
      <Stage
        shadows
        adjustCamera
      >
        <CarModel gltfPath={modelPath} metadata={metadata} />
      </Stage>
    </group>
  </Canvas>
}
