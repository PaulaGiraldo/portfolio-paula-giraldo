import { Center, Float, Html, Text, Text3D } from "@react-three/drei"
import { useEffect } from "react";
import { Color } from "three";

const WelcomeText = ({text}) => {
    return (
        /*<Html position={[0,3,0]} center distanceFactor = {40} occlude>
            <h2 className="welcome-text"> Welcome </h2>
        </Html>*/

        <Float
            speed={3} // Animation speed
            rotationIntensity={1} // XYZ rotation intensity
            floatIntensity={2} // Up/down float intensity
        >

            <Center position-y={3}>
                <Text3D
                    font="/assets/fonts/LilitaOne_Regular.json">
                    {text}
                    <meshNormalMaterial/>
                </Text3D>
            </Center>
        </Float>

    )
}
export default WelcomeText;
