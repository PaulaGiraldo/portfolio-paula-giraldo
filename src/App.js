import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import Info from "./info"

const App = () => {
    // Camera settings
    const cameraSettings = {
        position:[ 0, 2, 13],
        fov: 80
    }

    return (
        <>
        <Info
            name = {"Paula Giraldo"}
            bio = {"2022411"}
        />
        <Canvas
            shadows
            camera={cameraSettings}
        >
            <Experience />
        </Canvas>
        </>

    )
}
export default App