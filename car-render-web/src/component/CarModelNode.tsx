import { ObjectMap, useFrame } from "@react-three/fiber"
import { type GLTF } from 'three-stdlib';
import { Group, Mesh, Object3D, Object3DEventMap } from "three"
import { useEffect, useMemo, useRef } from "react";
import { Model3DMetadata } from "../models/Model3D";
import { useAnimations } from "@react-three/drei";


type CarModelNodeProps = {
  gltf: GLTF & ObjectMap; // probably unecessary
  metadata: Model3DMetadata;
  node: Object3D<Object3DEventMap>;
}

export const CarModelNode = (props: CarModelNodeProps) => {
  const { gltf, node, metadata } = props;
  const groupRef = useRef<Group<Object3DEventMap> | null>(null);
  const animationRef = useRef<Record<string, {
    animated: boolean,
    reverse: boolean,
  }>>({});

  const nodeMetadata = useMemo(() => {
    return metadata.components[node.name];
  }, [metadata.components, node.name])
  const filteredOnClickActions = useMemo(() => {
    if (!nodeMetadata?.onClickActions) {
      return [];
    }
    const onClickActionNames = nodeMetadata.onClickActions.map(record => record.name);
    return gltf.animations.filter(record => onClickActionNames.includes(record.name));
  }, [gltf.animations, nodeMetadata])
  const { actions } = useAnimations(filteredOnClickActions, node);

  useEffect(() => {
    if (!actions) {
      return;
    }
    for (const actionKey in actions) {
      const action = actions[actionKey];
      if (!action) {
        continue;
      }
      action.repetitions = 1;
      animationRef.current[actionKey] = {
        animated: true,
        reverse: true,
      }
      action.clampWhenFinished = true;
    }
  }, [actions])

  const onClick = () => {
    for (const actionKey in actions) {
      animationRef.current[actionKey].animated = false;
      animationRef.current[actionKey].reverse = !animationRef.current[actionKey].reverse;
    }
  }

  useFrame((state, delta) => {
    for (const actionKey in actions) {
      const action = actions[actionKey];
      if (!action) {
        continue;
      }
      if (!animationRef.current[actionKey].animated) {
        action.paused = false;
        action.play();
        animationRef.current[actionKey].animated = true;
        if (animationRef.current[actionKey].reverse) {
          action.timeScale = -1;
        } else {
          action.timeScale = 1;
        }
      }
      if (animationRef.current[actionKey].reverse) {
        if (action.time <= 0.01) {  // hack, just wait until less than 0.01 time left for the animation, then just pause the animation because sometimes the frame can't get into the perfect 0
          action.paused = true;
        }
      }
    }
  });

  if (filteredOnClickActions.length > 0) {
    return <primitive object={node} onClick={onClick} />
  }

  switch (node.type) {
    case 'Mesh':
      const meshNode = node as Mesh;
      return <mesh
        castShadow
        receiveShadow
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