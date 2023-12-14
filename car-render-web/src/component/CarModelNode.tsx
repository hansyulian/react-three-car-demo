import { ObjectMap } from "@react-three/fiber"
import { type GLTF } from 'three-stdlib';
import { Group, Mesh, Object3D, Object3DEventMap } from "three"
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from 'gsap';
import { Model3DMetadata } from "../models/Model3D";


type CarModelNodeProps = {
  gltf: GLTF & ObjectMap; // probably unecessary
  metadata: Model3DMetadata;
  node: Object3D<Object3DEventMap>;
}

export const CarModelNode = (props: CarModelNodeProps) => {
  const { gltf, node, metadata } = props;
  const groupRef = useRef<Group<Object3DEventMap> | null>(null);
  const animationTimelineRef = useRef<gsap.core.Timeline>();
  const [animated, setAnimated] = useState(false);

  const nodeMetadata = useMemo(() => {
    return metadata.components[node.name];
  }, [metadata.components, node.name])

  const handleClickAnimation = () => {
    if (animationTimelineRef.current) {
      if (animated) {
        animationTimelineRef.current.reverse();
      } else {
        animationTimelineRef.current.play();
      }
      setAnimated(!animated);
    }
  }

  const onClick = () => {
    handleClickAnimation();
  }

  useLayoutEffect(() => {
    if (!nodeMetadata) {
      return;
    }
    if (nodeMetadata.animation && groupRef.current) {
      animationTimelineRef.current = gsap.timeline({ paused: true });
      const { duration, x, y, z } = nodeMetadata.animation.rotation;
      animationTimelineRef.current.to(groupRef.current.rotation, {
        duration,
        x: Math.PI * x,
        y: Math.PI * y,
        z: Math.PI * z,
      })
    }
  }, [nodeMetadata])

  switch (node.type) {
    case 'Mesh':
      const meshNode = node as Mesh;
      return <mesh
        name={meshNode.name}
        position={meshNode.position}
        rotation={meshNode.rotation}
        scale={meshNode.scale}
        geometry={meshNode.geometry}
        material={meshNode.material}
      />
    case 'Group':
      return <group
        name={node.name}
        position={node.position}
        rotation={node.rotation}
        scale={node.scale}
        ref={groupRef}
        onClick={onClick}
      >
        {node.children.map(childNode => <CarModelNode
          key={`node-${childNode.uuid}`}
          gltf={gltf}
          node={childNode}
          metadata={metadata}
        />)}
      </group>
  }

  return null;

}