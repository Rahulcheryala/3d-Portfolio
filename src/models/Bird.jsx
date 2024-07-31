import React from "react";
import { useGLTF } from "@react-three/drei";
import birdScene from "../assets/3d/bird.glb";

const Bird = () => {
  const { scene, animations } = useGLTF(birdScene);

  return (
    <mesh position={[5, 1, 1]} scale={0.0015}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
