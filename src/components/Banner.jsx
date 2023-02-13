import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./DayLight/Model";

export const Banner = () => {
  return (
    <Canvas camera={{ position: [5, 5, 5] }}>
      <Suspense>
        <ambientLight />
        <Model position={[0, -3, 0]} />
        <OrbitControls autoRotate autoRotateSpeed={1} />
      </Suspense>
    </Canvas>
  );
};
