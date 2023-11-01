import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Mush(props) {
  const { nodes, materials } = useGLTF("/assets/models/Mush.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[-5, -2.8, 3]}
        rotation={[0, -0.132, 0.023]}
        scale={0.3}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.piel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials.copa}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Mush.glb");

