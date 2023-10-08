import React, { useEffect } from "react";
import { useRef } from "react";
const { useGLTF, useAnimations } = require("@react-three/drei")

export function Fox() {
    const foxModel = useGLTF('/assets/models/fox/scene.gltf')
    const foxRef = useRef();
    const {animations} = foxModel;

    const { actions } = useAnimations(animations, foxRef);
    useEffect(()=>{
        const action = actions["Survey"]
        action.play()
    })

    return (
        <mesh  ref={foxRef} position-x={4} position-y={-2.7} position-z={4} rotation-y={-Math.PI * 0.15} scale={0.04}>
            <primitive object={foxModel.scene} />
        </mesh>
    )

}

useGLTF.preload("/assets/models/fox/scene.gltf");
