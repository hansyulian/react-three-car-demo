import { useGLTF } from "@react-three/drei";
import { CarModelNode } from "./CarModelNode";
import { Model3DMetadata } from "../models/Model3D";

type CarModelProps = {
  gltfPath: string;
  metadata: Model3DMetadata;
}

export const CarModel = (props: CarModelProps) => {
  const { gltfPath, metadata } = props;
  const gltf = useGLTF(gltfPath);
  const { scene } = gltf;
  console.log(scene);

  return <CarModelNode gltf={gltf} metadata={metadata} node={scene} />
}