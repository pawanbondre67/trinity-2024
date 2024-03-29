// Code: Main App component
import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { OrbitControls } from "@react-three/drei";

const App = () => {
  return (
    <>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [2.5, 4, 6],
        }}
      >
        <OrbitControls makeDefault />
        <Perf />
        <Experience />
      </Canvas>
    </>
  );
};

export default App;
