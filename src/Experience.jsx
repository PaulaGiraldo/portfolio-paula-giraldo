import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Flower } from "./world/models/Flower";
import { Floor } from "./world/models/Floor";
import { Fox } from "./world/models/Fox";

const Experience = () => {
    const boxRef = useRef();
    const coneRef = useRef();
    const torusRef = useRef();
    const sphereRef = useRef();

    useFrame((state, delta) => {
        boxRef.current.rotation.x += 1 * delta;
        torusRef.current.position.y = Math.sin(state.clock.getElapsedTime());
        coneRef.current.position.y = Math.sin(state.clock.getElapsedTime());
        coneRef.current.rotation.x = Math.cos(state.clock.getElapsedTime());
        sphereRef.current.position.x = Math.sin(state.clock.getElapsedTime()) + 2;
    });

    return <>
        <OrbitControls makeDefault />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <mesh ref={boxRef} position-x={-3}>
            <boxGeometry args={[1, 1, 1]} />
            <meshLambertMaterial color={"#472836"} />
        </mesh>
        <mesh castShadow ref={coneRef} position-x={-1}>
            <coneGeometry args={[1, 1.6, 40]} />
            <meshPhysicalMaterial color={"#15616d"} roughness={0} />
        </mesh>
        <mesh ref={sphereRef} position-x={2} >
            <sphereGeometry args={[1, 32, 64]} />
            <meshPhongMaterial color={"#ffecd1"} />
        </mesh>
        <mesh ref={torusRef} position-x={6} >
            <torusGeometry />
            <meshToonMaterial color={"#ff7d00"} />
        </mesh>
        <Floor/>
        <Flower/>
        <Fox/>
    </>
}
export default Experience;