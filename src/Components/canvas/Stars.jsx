import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
      {Array.from({ length: sphere.length / 3 }, (_, i) => {
        const index = i * 3;
        return (
          <mesh
            key={i}
            position={[sphere[index], sphere[index + 1], sphere[index + 2]]}
            {...props}
          >
            <boxGeometry args={[0.002, 0.002, 0.002]} />
            <meshBasicMaterial color="#f272c*" transparent depthWrite={false} />
          </mesh>
        );
      })}
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
