import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";

const WireframeShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { size } = useThree();

  const geometry = useMemo(() => new THREE.TorusKnotGeometry(1.5, 0.5, 100, 16), []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / size.width - 0.5) * 2;
      mouseRef.current.y = (e.clientY / size.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [size]);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x += delta * 0.1;
      // Mouse parallax tilt
      meshRef.current.rotation.z = THREE.MathUtils.lerp(
        meshRef.current.rotation.z,
        mouseRef.current.x * 0.15,
        0.05
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        -mouseRef.current.y * 0.3,
        0.05
      );
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshBasicMaterial color="#c87941" wireframe transparent opacity={0.5} />
    </mesh>
  );
};

const CoffeeScene = () => (
  <div className="w-full h-full min-h-[300px]">
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} style={{ background: "transparent" }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} color="#c87941" intensity={1.5} />
      <pointLight position={[-4, -3, 3]} color="#4ade80" intensity={0.6} />
      <WireframeShape />
    </Canvas>
  </div>
);

export default CoffeeScene;
