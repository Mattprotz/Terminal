import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function WelcomeText(props) {
  const { nodes, materials } = useGLTF('/text.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials['Material.001']}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
    </group>
  )
}

useGLTF.preload('/text.gltf')