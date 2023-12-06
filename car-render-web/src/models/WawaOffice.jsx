/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 .\public\models\WawaOffice.glb 
*/

import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';

const FLOOR_HEIGHT = 2.3;
const NB_FLOORS = 3;


export function WawaOffice(props) {
  const { nodes, materials } = useGLTF('./models/WawaOffice.glb')
  const ref = useRef();
  const tl = useRef();
  const libraryRef = useRef();
  const atticRef = useRef();

  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  })

  useLayoutEffect(() => {
    tl.current = gsap.timeline();
    tl.current.to(ref.current.position,
      {
        duration: 2,
        y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
      })

    tl.current.from(libraryRef.current.position, {
      duration: 0.5, x: -2,
    }, 0.5);
    tl.current.from(libraryRef.current.rotation, {
      duration: 0.5, y: -Math.PI / 2,
    }, 0);
    tl.current.from(atticRef.current.position, {
      duration: 0.5, y: 2,
    }, 0);
    tl.current.from(atticRef.current.position, {
      duration: 0.5, z: -2,
    }, 1.5);
    tl.current.from(atticRef.current.rotation, {
      duration: 0.5, y: Math.PI / 2,
    }, 1);
  }, [])

  return (
    <group {...props} dispose={null} ref={ref}>
      <group>
        <mesh geometry={nodes['01_office'].geometry} material={materials['01']} />
      </group>
      <group position={[0, 2.114, -2.23]} >
        <group ref={libraryRef}>
          <mesh geometry={nodes['02_library'].geometry} material={materials['02']} />
        </group>
      </group>
      <group position={[-1.97, 4.227, -2.199]} >
        <group ref={atticRef}>
          <mesh geometry={nodes['03_attic'].geometry} material={materials['03']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/WawaOffice.glb')
