import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  OrbitControls, 
  Stars, 
  Cloud, 
  Text, 
  Float, 
  useTexture,
  Sphere,
  Box,
  Cylinder
} from '@react-three/drei';
import * as THREE from 'three';

// Floating Landmark Component
const FloatingLandmark = ({ position, landmark }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef} position={position}>
        {landmark === 'eiffel' && (
          <Cylinder args={[0.05, 0.2, 2, 8]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#8B4513" />
          </Cylinder>
        )}
        {landmark === 'building' && (
          <Box args={[0.3, 1, 0.3]}>
            <meshStandardMaterial color="#666" />
          </Box>
        )}
        {landmark === 'monument' && (
          <Sphere args={[0.2, 16, 16]}>
            <meshStandardMaterial color="#DAA520" />
          </Sphere>
        )}
      </group>
    </Float>
  );
};

// Flying Plane Component
const FlyingPlane = () => {
  const planeRef = useRef();
  const pathRef = useRef(0);

  useFrame((state) => {
    if (planeRef.current) {
      pathRef.current += 0.005;
      const radius = 8;
      planeRef.current.position.x = Math.cos(pathRef.current) * radius;
      planeRef.current.position.z = Math.sin(pathRef.current) * radius;
      planeRef.current.position.y = 2 + Math.sin(pathRef.current * 2) * 0.5;
      planeRef.current.rotation.y = pathRef.current + Math.PI / 2;
    }
  });

  return (
    <group ref={planeRef}>
      <Box args={[0.4, 0.1, 0.1]}>
        <meshStandardMaterial color="#1E90FF" />
      </Box>
      <Box args={[0.8, 0.05, 0.3]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#87CEEB" />
      </Box>
    </group>
  );
};

// Rotating Globe Component
const RotatingGlobe = () => {
  const globeRef = useRef();

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={globeRef} position={[0, 0, -5]}>
      <Sphere args={[1.5, 32, 32]}>
        <meshStandardMaterial
          color="#4169E1"
          transparent
          opacity={0.3}
          wireframe
        />
      </Sphere>
      <Sphere args={[1.45, 32, 32]}>
        <meshStandardMaterial
          color="#228B22"
          transparent
          opacity={0.2}
        />
      </Sphere>
    </group>
  );
};

// Floating Clouds Component
const FloatingClouds = () => {
  const clouds = useMemo(() => {
    const cloudArray = [];
    for (let i = 0; i < 20; i++) {
      cloudArray.push({
        position: [
          (Math.random() - 0.5) * 20,
          Math.random() * 10 + 5,
          (Math.random() - 0.5) * 20
        ],
        scale: Math.random() * 0.5 + 0.3,
        speed: Math.random() * 0.002 + 0.001
      });
    }
    return cloudArray;
  }, []);

  return (
    <>
      {clouds.map((cloud, index) => (
        <Cloud
          key={index}
          position={cloud.position}
          scale={cloud.scale}
          opacity={0.4}
          speed={cloud.speed}
          color="#ffffff"
        />
      ))}
    </>
  );
};

// Parallax Camera Controller
const ParallaxController = ({ mousePosition }) => {
  const { camera } = useThree();

  useFrame(() => {
    if (mousePosition.current) {
      camera.position.x += (mousePosition.current.x * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (-mousePosition.current.y * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);
    }
  });

  return null;
};

// Main 3D Scene Component
const TravelScene = ({ mousePosition }) => {
  const landmarks = [
    { position: [-3, 1, 2], type: 'eiffel' },
    { position: [4, 2, -1], type: 'building' },
    { position: [-2, 3, -3], type: 'monument' },
    { position: [3, 1.5, 3], type: 'building' },
    { position: [-4, 2.5, 0], type: 'monument' }
  ];

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#4169E1" />

      {/* Background Elements */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      <FloatingClouds />
      <RotatingGlobe />

      {/* Interactive Elements */}
      <FlyingPlane />
      {landmarks.map((landmark, index) => (
        <FloatingLandmark
          key={index}
          position={landmark.position}
          landmark={landmark.type}
        />
      ))}

      {/* Parallax Controller */}
      <ParallaxController mousePosition={mousePosition} />
    </>
  );
};

// Main 3D Background Component
export const Enhanced3DBackground = () => {
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <TravelScene mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
};