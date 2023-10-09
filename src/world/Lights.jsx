import { useHelper } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import { DirectionalLightHelper, HemisphereLightHelper, PointLightHelper, SpotLightHelper } from "three";
const Lights = () => {
    const directionalLightRef = useRef();
    //useHelper(directionalLightRef, DirectionalLightHelper);

    const spotLightRef = useRef();
    //useHelper(spotLightRef,SpotLightHelper)

    return <>
            <ambientLight intensity={1} />
            <directionalLight ref={directionalLightRef} position={[8, 8, 3]} intensity={2}  color={"#fad6a5"}/>
            <spotLight
                ref={spotLightRef}
                position={[3, 4, 2]}
                angle={Math.PI / 12}
                intensity={100}
                color={"#e99e3f"}
                penumbra={1}
                distance={6}
            />
        </>
}
export default Lights;