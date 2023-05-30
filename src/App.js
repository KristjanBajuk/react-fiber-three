import { Canvas } from '@react-three/fiber';
import React from "react";
import { OrbitControls, Stage} from "@react-three/drei";
import { Suspense } from "react";
import Robot from "./models/Robot";
import './App.css';

function App() {
    const ref = React.useRef()
    return (
      <div className="App">
          <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
              <Suspense fallback={null}>
                  <Stage controls={ref} preset="rembrandt" intensity={1}  environment="city">
                      false
                      <Robot  />
                      false
                  </Stage>
              </Suspense>
              <OrbitControls ref={ref} autoRotate />
          </Canvas>
      </div>
  );
}

export default App;
