import { Canvas, useThree } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Stage, } from '@react-three/drei';
import { CarModel, } from "./CarModel";
import { availableModels } from "../data/carData";
import { config } from "../config/config";

const usedModel = availableModels.mclaren;

export const Car3DView = () => {
  const { metadata, modelName } = usedModel;

  const calculatedModelPath = `${config.baseModelPath}/${modelName}`;
  console.log(calculatedModelPath);

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
        <CarModel gltfPath={calculatedModelPath} metadata={metadata} />
      </Stage>
    </group>
  </Canvas>
}
