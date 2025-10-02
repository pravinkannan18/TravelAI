import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const Plane3D = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 3;
      groupRef.current.position.y = Math.cos(state.clock.getElapsedTime() * 0.3) * 0.5;
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <coneGeometry args={[0.15, 0.6, 8]} />
        <meshStandardMaterial color="#7dd3fc" emissive="#0ea5e9" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[0.5, 0.08, 0.08]} />
        <meshStandardMaterial color="#38bdf8" emissive="#0ea5e9" emissiveIntensity={0.3} />
      </mesh>
    </group>
  );
};
