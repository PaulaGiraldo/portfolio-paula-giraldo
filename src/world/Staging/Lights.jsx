import { useHelper } from "@react-three/drei";
import * as THREE from 'three';
import { useEffect, useMemo, useRef } from "react";
import { DirectionalLightHelper, HemisphereLightHelper, PointLightHelper, SpotLightHelper } from "three";
import { useControls } from "leva";
const Lights = () => {
    const directionalLightRef = useRef();
    //useHelper(directionalLightRef, DirectionalLightHelper);

    const spotLightRef = useRef();
    //useHelper(spotLightRef,SpotLightHelper)

    const SpotlightTarget = new THREE.Object3D();
    SpotlightTarget.position.set(20, -2, 0);
    /*const options = useMemo(() => {
        return{
            intensitySL: { value: 100, min: 0, max: 1000, step: 1 },
            colorSL: {value: "white"}
           
        }
    }, [])

    const {intensitySL, colorSL} = useControls("Spot Light", options);*/


    return <>
        <ambientLight intensity={0.5} />
        <directionalLight
            ref={directionalLightRef}
            castShadow
            position={[0, 1.6, -1]}
            intensity={3}
            color={"#fad6a5"}
        />
            shadow-mapSize={[256, 256]}
            shadow-camera-far={40}
            shadow-camera-left={-4}
            shadow-camera-right={4}
            shadow-camera-top={4}
            shadow-camera-bottom={-4}
        <spotLight
            ref={spotLightRef}
            castShadow
            position={[15, 1, 1]}
            distance = {4}
            intensity={100}
            color={"#fad6a5"}
            angle={Math.PI/12}
            target={SpotlightTarget}
        />
        </>
}
export default Lights;