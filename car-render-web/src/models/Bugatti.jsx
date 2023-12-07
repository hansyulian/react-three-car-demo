/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 .\public\models\bugatti.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Bugatti(props) {
  const { nodes, materials } = useGLTF('./models/bugatti.glb')
  const ref = useRef();
  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh geometry={nodes.Duplicate_reflection_plane.geometry} material={nodes.Duplicate_reflection_plane.material} position={[0.039, -3.928, 0.299]} rotation={[0.001, 0.168, -0.004]} scale={0.572} />
      <group position={[-0.203, 2.306, -7.191]} rotation={[-0.469, 0.152, 0.072]} scale={0.048}>
        <mesh geometry={nodes.Cylinder126_1.geometry} material={materials.aluminiumm} />
        <mesh geometry={nodes.Cylinder126_2.geometry} material={materials.glossy} />
        <mesh geometry={nodes.Cylinder126_3.geometry} material={materials['white holders']} />
      </group>
      <mesh geometry={nodes.Plane026.geometry} material={materials['silver door strip.004']} position={[1.241, 0.935, 5.31]} rotation={[0.001, 0.168, -0.004]} scale={0.999} />
      <group position={[0.054, -0.008, 0.302]} rotation={[0.001, 0.168, -0.004]}>
        <mesh geometry={nodes.Plane028_1.geometry} material={materials['BLUE.002']} />
        <mesh geometry={nodes.Plane028_2.geometry} material={materials['silver door strip.004']} />
        <mesh geometry={nodes.Plane028_3.geometry} material={materials.NAVY} />
        <mesh geometry={nodes.Plane028_4.geometry} material={materials['front window.004']} />
        <mesh geometry={nodes.Plane028_5.geometry} material={materials['black fuel_tank.004']} />
        <mesh geometry={nodes.Plane028_6.geometry} material={materials['black strip.004']} />
        <mesh geometry={nodes.Plane028_7.geometry} material={materials['WHEEL CURB.004']} />
        <mesh geometry={nodes.Plane028_8.geometry} material={materials['black vent.004']} />
        <mesh geometry={nodes.Plane028_9.geometry} material={materials['black side vent']} />
        <mesh geometry={nodes.Plane028_10.geometry} material={materials.exhaust} />
        <mesh geometry={nodes.Plane028_11.geometry} material={materials.black} />
      </group>
      <group position={[2.327, 1.485, 4.35]} rotation={[-0.001, 0.237, 0.039]} scale={[0.085, 0.085, 0.079]}>
        <mesh geometry={nodes.Cube042_1.geometry} material={materials['headlight glass.004']} />
        <mesh geometry={nodes.Cube042_2.geometry} material={materials['headlight_square.004']} />
      </group>
      <group position={[2.69, 1.534, 4.063]} rotation={[-0.136, 0.193, 0.061]} scale={1.03}>
        <mesh geometry={nodes.Plane027_1.geometry} material={materials['reflective coat.004']} />
        <mesh geometry={nodes.Plane027_2.geometry} material={materials['glass front.004']} />
        <mesh geometry={nodes.Plane027_3.geometry} material={materials['Trim.004']} />
      </group>
      <mesh geometry={nodes.Plane024.geometry} material={materials['Studio Lights.004']} position={[5.497, 32.888, 12.682]} rotation={[-3.13, 0.279, -2.764]} scale={[14.141, 7.574, 3.168]} />
      <mesh geometry={nodes.Cube029.geometry} material={materials['breaks ']} position={[0.957, 1.73, -7.529]} rotation={[0.001, 0.168, -0.004]} scale={[1.796, 0.08, 0.08]} />
      <mesh geometry={nodes.Cube036.geometry} material={materials['GRILL.004']} position={[0.931, 0.158, 5.047]} rotation={[0.001, 0.168, -0.004]} scale={[0.021, 0.014, 0.002]} />
      <mesh geometry={nodes.Cube043.geometry} material={materials['GRILL.004']} position={[0.118, 2.149, -6.782]} rotation={[0.003, 0.128, 0.037]} scale={[0.021, 0.014, 0.002]} />
      <mesh geometry={nodes.Cube044.geometry} material={materials['GRILL.004']} position={[2.24, 1.036, 4.774]} rotation={[0.003, 0.128, 0.037]} scale={[0.021, 0.014, 0.002]} />
      <mesh geometry={nodes.Cube028.geometry} material={materials['silver door strip.004']} position={[-1.194, 1.988, -7.116]} rotation={[-0.651, 0.588, 1.687]} scale={[0.085, 0.201, 0.019]} />
      <mesh geometry={nodes.Cube027.geometry} material={materials['silver door strip.004']} position={[-1.214, 1.583, -7.22]} rotation={[-2.095, 0.373, 1.741]} scale={[0.139, 0.328, 0.031]} />
      <group position={[3.008, 0.907, 2.312]} rotation={[-1.119, 0, -0.007]} scale={[0.035, 0.143, 0.015]}>
        <mesh geometry={nodes.Cube080_1.geometry} material={materials['tyre.004']} />
        <mesh geometry={nodes.Cube080_2.geometry} material={materials['rim_silver.004']} />
        <mesh geometry={nodes.Cube080_3.geometry} material={materials['rim blue.004']} />
        <mesh geometry={nodes.Cube080_4.geometry} material={materials['Nut.004']} />
        <mesh geometry={nodes.Cube080_5.geometry} material={materials['brake disk.004']} />
        <mesh geometry={nodes.Cube080_6.geometry} material={materials['wheel joint.004']} />
        <mesh geometry={nodes.Cube080_7.geometry} material={materials['cALLIPERS.004']} />
        <mesh geometry={nodes.Cube080_8.geometry} material={materials['silver door strip.004']} />
      </group>
      <group position={[-1.957, 0.931, 3.239]} rotation={[-1.119, 0, -0.007]} scale={[0.035, 0.143, 0.015]}>
        <mesh geometry={nodes.Cube063_1.geometry} material={materials['tyre.004']} />
        <mesh geometry={nodes.Cube063_2.geometry} material={materials['rim_silver.004']} />
        <mesh geometry={nodes.Cube063_3.geometry} material={materials['rim blue.004']} />
        <mesh geometry={nodes.Cube063_4.geometry} material={materials['Nut.004']} />
        <mesh geometry={nodes.Cube063_5.geometry} material={materials['brake disk.004']} />
        <mesh geometry={nodes.Cube063_6.geometry} material={materials['wheel joint.004']} />
        <mesh geometry={nodes.Cube063_7.geometry} material={materials['cALLIPERS.004']} />
        <mesh geometry={nodes.Cube063_8.geometry} material={materials['silver door strip.004']} />
      </group>
      <group position={[1.988, 0.938, -5.298]} rotation={[-1.126, 0.076, 0.15]} scale={[0.036, 0.151, 0.015]}>
        <mesh geometry={nodes.Cube039_1.geometry} material={materials['tyre.004']} />
        <mesh geometry={nodes.Cube039_2.geometry} material={materials['rim_silver.004']} />
        <mesh geometry={nodes.Cube039_3.geometry} material={materials['rim blue.004']} />
        <mesh geometry={nodes.Cube039_4.geometry} material={materials['Nut.004']} />
        <mesh geometry={nodes.Cube039_5.geometry} material={materials['brake disk.004']} />
        <mesh geometry={nodes.Cube039_6.geometry} material={materials['wheel joint.004']} />
        <mesh geometry={nodes.Cube039_7.geometry} material={materials['cALLIPERS.004']} />
        <mesh geometry={nodes.Cube039_8.geometry} material={materials['silver door strip.004']} />
      </group>
      <mesh geometry={nodes.Cylinder034.geometry} material={materials.NAVY} position={[-1.107, 2.789, -6.708]} rotation={[0.172, 0.165, -0.032]} scale={[2.477, 0.025, 1.114]} />
      <mesh geometry={nodes.Icosphere001.geometry} material={materials['red glass']} position={[-1.089, 1.725, -7.402]} rotation={[0.001, 0.168, -0.004]} scale={0.008} />
      <mesh geometry={nodes.Plane013.geometry} material={nodes.Plane013.material} position={[-0.499, 2.623, -2.987]} rotation={[3.12, 1.403, -1.548]} scale={[-0.405, -0.405, -1.677]} />
      <mesh geometry={nodes.Icosphere.geometry} material={materials['breaks ']} position={[-1.087, 1.725, -7.387]} rotation={[0.001, 0.168, -0.004]} scale={0.008} />
      <mesh geometry={nodes.Text001.geometry} material={materials['WHITE.002']} position={[0.839, 1.208, 5.489]} rotation={[1.244, 0.051, -0.16]} scale={0.06} />
      <group position={[0.958, 1.226, 5.453]} rotation={[1.293, 0.043, -0.162]} scale={[0.163, 0.018, 0.078]}>
        <mesh geometry={nodes.Cylinder025_1.geometry} material={materials['red.002']} />
        <mesh geometry={nodes.Cylinder025_2.geometry} material={materials['silver door strip.004']} />
      </group>
      <group position={[0.81, 1.731, -7.622]} rotation={[0.001, 0.168, -0.004]}>
        <mesh geometry={nodes.Plane020_1.geometry} material={materials['red glass']} />
        <mesh geometry={nodes.Plane020_2.geometry} material={materials['silver trim']} />
      </group>
      {/* <mesh geometry={nodes.Cube026.geometry} material={materials.ENGINE} position={[1.64, 2.346, -4.036]} rotation={[-0.359, 0.158, 0.055]} scale={[1, 0.324, 1.073]}>
        <mesh geometry={nodes.Text002_1.geometry} material={materials['WHITE.002']} position={[-1.496, 0.834, 0.585]} rotation={[1.586, 1.538, -1.59]} scale={[0.307, 1.018, 0.33]} />
      </mesh> */}
      {/* <mesh geometry={nodes.Cylinder027.geometry} material={materials['back drop.004']} position={[-0.802, 7.234, -0.82]} rotation={[Math.PI, -0.685, Math.PI / 2]} scale={[7.349, 55.646, 7.349]} /> */}
      {/* <mesh geometry={nodes.Plane047.geometry} material={materials.sun} position={[-28.893, 11.252, -1.175]} rotation={[0.008, 0.112, 0.847]} scale={-9.113} /> */}
      {/* <mesh geometry={nodes.Plane036.geometry} material={materials.sun} position={[2.726, 32.029, -1.175]} rotation={[0.001, 0.168, -0.004]} scale={-34.698} /> */}
      {/* <mesh geometry={nodes.alights001.geometry} material={materials['Studio Lights.004']} position={[1.761, 9.412, -15.868]} rotation={[0.553, -1.341, 1.567]} scale={[5.905, 6.65, 0.514]} /> */}
      <group position={[0.054, -0.008, 0.302]} rotation={[0.001, 0.168, -0.004]}>
        <mesh geometry={nodes.Plane052_1.geometry} material={materials['BLUE.002']} />
        <mesh geometry={nodes.Plane052_2.geometry} material={materials.NAVY} />
        <mesh geometry={nodes.Plane052_3.geometry} material={materials['front window.004']} />
        <mesh geometry={nodes.Plane052_4.geometry} material={materials['black strip.004']} />
        <mesh geometry={nodes.Plane052_5.geometry} material={materials.Mirrors} />
      </group>
      {/* <mesh geometry={nodes.alights014.geometry} material={materials['Studio Lights.005']} position={[-1.219, 3.237, -26.951]} rotation={[2.219, 1.452, 2.594]} scale={[-1.939, -13.405, -4.689]} /> */}
      {/* <mesh geometry={nodes.alights000.geometry} material={materials['Studio Lights.005']} position={[-15.619, 2.648, -8.749]} rotation={[3.019, 0.69, 1.753]} scale={[-1.939, -13.405, -4.689]} /> */}
      {/* <mesh geometry={nodes.alights015.geometry} material={materials['Studio Lights.005']} position={[19.248, 9.311, 20.118]} rotation={[-0.765, -1.207, 1.1]} scale={[1.875, 9.719, 0.511]} /> */}
    </group>
  )
}

useGLTF.preload('/bugatti.glb')