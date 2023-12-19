import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stage, } from '@react-three/drei';
import { CarModel, } from "./CarModel";
import { availableModels } from "../data/carData";
import { config } from "../config/config";

type Car3DViewProps = {
  modelName: string,
}

export const Car3DView = (props: Car3DViewProps) => {
  const { modelName } = props;
  const model = availableModels[modelName];
  if (!model) {
    return null;
  }

  const calculatedModelPath = `${config.baseModelPath}/${model.modelName}`;
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
        <CarModel gltfPath={calculatedModelPath} metadata={model.metadata} />
      </Stage>
    </group>
  </Canvas>
}
