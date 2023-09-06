import { createRoot } from "react-dom/client";
import Experience from "./Experience";
import "./styles.css"
import { Canvas } from "@react-three/fiber";
import Info from "./info";

const root = createRoot(document.getElementById('root'));
root.render(
    <>
        <Info
            name = {"Paula Giraldo"}
            bio = {"2022411"}
        />
        <Canvas
            camera={{ position: [1, 0, 9] }}
        >
            <Experience />
        </Canvas>
    </>
);
