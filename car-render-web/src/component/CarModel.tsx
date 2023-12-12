import { useGLTF } from "@react-three/drei";
import { CarModelNode } from "./CarModelNode";

type CarModelProps = {
  gltfPath: string;
  metadata: ModelMetadata;
}

export type ModelMetadata = {
  components: Record<string, ComponentMetadata>
}

type ComponentMetadata = {
  animation?: AnimationMetadata;
}

type AnimationMetadata = {
  eventType?: 'onClick',
  rotation: {
    x: number, // magnitude in Math.PI, 360 degree = 2Pi, thus inputting 0.6 means 60% of 180 degree
    y: number,
    z: number,
    duration: number,
  },
}


export const CarModel = (props: CarModelProps) => {
  const { gltfPath, metadata } = props;
  const gltf = useGLTF(gltfPath);
  const { scene } = gltf;
  console.log(scene);

  return <CarModelNode gltf={gltf} metadata={metadata} node={scene} />
}