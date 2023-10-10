import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Signs(props) {
  const { nodes, materials } = useGLTF("/assets/models/stylized_wood_signs.glb");
  
  const handleSign = (type) => {
    alert(type);
  };


  return (
    <group {...props} dispose={null}>
      <group scale={0.02}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sign1__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[900, -150, 0]}
          rotation={[-Math.PI / 2, 0, -0.5]}
          scale={100}
          onClick={() => handleSign("About Me: I love tomatoes")}
        />
        {/*
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sign2__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[700, -150, 10]}
          rotation={[-Math.PI / 2, 0, -0.5]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sign3__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[500, -150, 0]}
          rotation={[-Math.PI / 2, 0, -0.5]}
          scale={100}
        />
  */}
      </group>
    </group>
  );
}

useGLTF.preload("/stylized_wood_signs.glb");