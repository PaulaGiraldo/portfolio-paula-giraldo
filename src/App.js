import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import Info from "./info"

const App = () => {
    // Camera settings
    const cameraSettings = {
        position:[ 3, 0, 13],
        fov: 60
    }

    return (
        <>
        <Info
            name = {"Paula Giraldo"}
            bio = {"2022411"}
        />
        <Canvas
            camera={cameraSettings}
        >
            <Experience />
        </Canvas>
        </>

    )
}
export default App