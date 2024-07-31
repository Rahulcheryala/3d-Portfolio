import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import planeScene from "../assets/3d/plane2.glb";

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    // if (isRotating) {
    actions["Take 001"].play();
    // } else {
    // actions["Take 001"].stop();
    // }
  }, [isRotating, actions]);

  return (
    <mesh
      {...props}
      ref={ref}
      // position={[0, -0.8, 2]}
      rotation={[0, 1.745, 0]}
      // scale={0.9}
    >
      <ambientLight intensity={0.1} />
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
