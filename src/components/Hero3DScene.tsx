import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import { Globe3D } from './Globe3D';
import { Plane3D } from './Plane3D';

export const Hero3DScene = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        {/* Enhanced lighting setup */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} color="#a855f7" intensity={0.8} />
        <pointLight position={[0, 10, 0]} color="#34d399" intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} color="#7dd3fc" />
        
        {/* Enhanced stars with more depth and increased white intensity */}
        <Stars radius={150} depth={80} count={8000} factor={8} saturation={0} fade={false} speed={2} />
        
        {/* Floating globe for subtle movement */}
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
          <Globe3D />
        </Float>
        
        {/* Enhanced plane animations */}
        <Plane3D />
        
        {/* Enhanced orbit controls */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.3}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};
