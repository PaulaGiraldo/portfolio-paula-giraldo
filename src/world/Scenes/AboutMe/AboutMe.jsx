import { BallCollider, CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";

const AboutMe = () => {
    const ballBodyRef = useRef();

    const onHandleSphere = () => {
        ballBodyRef.current.applyImpulse({
            x:0,
            y:2,
            z:0
        }, true)
        // ballBodyRef.current.addTorque({
        //     x:0,
        //     y:0.1,
        //     z:0
        // }, true)

        // ballBodyRef.current.applyTorqueImpulse({
        //     x:2,
        //     y:2,
        //     z:2
        // }, true)


        ballBodyRef.current.addForce({
            x: 1,
            y: 0,
            z: 0
        }, true)
    }
        
    const [play, setPlay] = useState(false)
    const [hitSound] = useState(()=>new Audio("assets/sounds/boing.wav"))

    useEffect(()=>{
        if(play){
            hitSound.currentTime = 0;
            hitSound.volume = Math.random();
            hitSound.play();
        }
    }, [play])

    useEffect(()=>{
        ballBodyRef.current.sleep()
    }, [])

    return (
        <>
            <RigidBody 
                ref={ballBodyRef}
                colliders={"ball"} 
                position={[10, 4, -5]} 
                friction={0} 
                restitution={5}
                onCollisionEnter={()=>setPlay(true)}
                onCollisionExit={()=>setPlay(false)}
                >
                <mesh scale={0.5} onClick={onHandleSphere} >
                    <sphereGeometry />
                    <meshStandardMaterial color="blue" />
                </mesh>
            </RigidBody>
        </>

    )
}

export default AboutMe;