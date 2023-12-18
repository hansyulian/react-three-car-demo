import { useGLTF } from "@react-three/drei";
import { CarModelNode } from "./CarModelNode";
import { Model3DMetadata } from "../models/Model3D";
import { useLayoutEffect } from "react";

type CarModelProps = {
  gltfPath: string;
  metadata: Model3DMetadata;
}

export const CarModel = (props: CarModelProps) => {
  const { gltfPath, metadata } = props;
  const gltf = useGLTF(gltfPath);
  const { scene } = gltf;

  useLayoutEffect(() => {
    scene.traverse((obj: any) => {
      if (obj.isMesh) {
        obj.castShadow = obj.receiveShadow = true
        obj.material.envMapIntensity = 0.8
      }
    })
  }, [scene])

  return <CarModelNode gltf={gltf} metadata={metadata} node={scene} />
}