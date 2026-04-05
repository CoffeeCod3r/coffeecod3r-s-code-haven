import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const WireframeSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(2, 1), []);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshBasicMaterial color="#c87941" wireframe transparent opacity={0.6} />
    </mesh>
  );
};

const CoffeeScene = () => (
  <div className="w-full h-full min-h-[300px]">
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ background: "transparent" }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} color="#c87941" intensity={1} />
      <WireframeSphere />
    </Canvas>
  </div>
);

export default CoffeeScene;
