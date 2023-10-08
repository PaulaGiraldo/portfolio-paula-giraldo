import { useTexture } from "@react-three/drei";

export function Floor() {
    const PATH = "/assets/textures/grass/"
    const propsTexture = useTexture({
            map: PATH + 'grassDiffuse.png',
        normalMap: PATH + 'grassNormal.png',
        roughnessMap: PATH + 'grassRoughness.png',
        aoMap: PATH + 'grassAO.png',

    })
    
    return(
        <mesh position-y={-3} rotation-x={-Math.PI / 2} >
                <planeGeometry attach="geometry" args={[12, 12]} />
                <meshStandardMaterial { ... propsTexture} />
        </mesh>
    )
}
