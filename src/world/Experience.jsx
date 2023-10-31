//import { Physics } from "@react-three/rapier";
//import Controls from "./Controls/Controls";
//import AboutMe from "./Scenes/AboutMe/AboutMe";
import { OrbitControls } from "@react-three/drei";
import { BakeShadows } from "@react-three/drei";
import Welcome from "./Scenes/Welcome/Welcome";
import Environments from "./Staging/Environment";
import Lights from "./Staging/Lights";

const Experience = () => {
    return <>
        <OrbitControls makeDefault />
        <Lights/>
        <BakeShadows />
        <Environments/>
        <Welcome/>
    </>
}
export default Experience;