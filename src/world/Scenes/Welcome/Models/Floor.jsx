import { useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Color, RepeatWrapping, Vector2 } from "three";

export function Floor() {
    const PATH = "/assets/textures/grass/"
    const propsTexture = useTexture({
            map: PATH + 'grassDiffuse.png',
        normalMap: PATH + 'grassNormal.png',
        roughnessMap: PATH + 'grassRoughness.png',
        aoMap: PATH + 'grassAO.png',

    })

    propsTexture.repeat = new Vector2(64, 64);
    propsTexture.emissive = new Color("#228B22");
    propsTexture.emissiveIntensity = 0.1;
    
    return(
        <RigidBody type="fixed">
            <mesh position-y={-3} rotation-x={-Math.PI / 2} receiveShadow>
                    <planeGeometry attach="geometry" args={[64, 64, 100, 100]} />
                    <meshStandardMaterial { ... propsTexture} />
            </mesh>
        </RigidBody>
    )
}
