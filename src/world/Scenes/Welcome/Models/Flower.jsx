import React from "react";
import { useGLTF } from "@react-three/drei";

export function Flower(props) {
  const { nodes, materials } = useGLTF("/assets/models/Flower.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[-2, -3, 3]}
        rotation={[1.096, 1.264, -1.299]}
        scale={0.018}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003_1.geometry}
          material={materials.texture3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003_2.geometry}
          material={materials.texture}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003_3.geometry}
          material={materials["texture 2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003_4.geometry}
          material={materials.leef}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003_5.geometry}
          material={materials.green}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003_6.geometry}
          material={materials["dark red"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003_7.geometry}
          material={materials["dark green"]}
        />
      </group>
      <group position={[0, -3, 3]} scale={0.02}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle008_1.geometry}
          material={materials.texture3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle008_2.geometry}
          material={materials.white}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle008_3.geometry}
          material={materials["texture 2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle008_4.geometry}
          material={materials.leef}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle008_5.geometry}
          material={materials.green}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle008_6.geometry}
          material={materials["dark green"]}
        />
      </group>
      <group
        position={[2, -3, 3]}
        rotation={[1.096, 1.264, -1.299]}
        scale={0.018}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle015_1.geometry}
          material={materials.texture3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle015_2.geometry}
          material={materials.blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle015_3.geometry}
          material={materials["texture 2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle015_4.geometry}
          material={materials.leef}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle015_5.geometry}
          material={materials.green}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle015_6.geometry}
          material={materials.white}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle015_7.geometry}
          material={materials["dark green"]}
        />
      </group>
      {props.children}
    </group>
  );
}

useGLTF.preload("/assets/models/Flower.glb");