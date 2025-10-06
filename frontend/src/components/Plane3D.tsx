import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SinglePlane = ({ offset = 0, scale = 1, color = "#7dd3fc", speed = 1, flightPath = "international" }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime() * speed + offset;
      
      if (flightPath === "international") {
        // Realistic international flight following great circle route
        const flightSpeed = 0.15; // Realistic commercial airliner speed
        const altitude = 3.8; // Cruising altitude around Earth
        const angle = time * flightSpeed;
        
        // Great circle route with Earth curvature
        const lat = Math.sin(angle * 0.3) * 0.6; // Latitude variation
        const lon = angle; // Longitude progression
        
        // Convert spherical to cartesian coordinates
        const earthRadius = altitude;
        groupRef.current.position.x = earthRadius * Math.cos(lat) * Math.cos(lon);
        groupRef.current.position.y = earthRadius * Math.sin(lat);
        groupRef.current.position.z = earthRadius * Math.cos(lat) * Math.sin(lon);
        
        // Calculate forward direction for realistic orientation
        const nextAngle = angle + 0.01;
        const nextLat = Math.sin(nextAngle * 0.3) * 0.6;
        const nextLon = nextAngle;
        const nextX = earthRadius * Math.cos(nextLat) * Math.cos(nextLon);
        const nextY = earthRadius * Math.sin(nextLat);
        const nextZ = earthRadius * Math.cos(nextLat) * Math.sin(nextLon);
        
        // Calculate direction vector
        const dirX = nextX - groupRef.current.position.x;
        const dirY = nextY - groupRef.current.position.y;
        const dirZ = nextZ - groupRef.current.position.z;
        
        // Set realistic aircraft orientation
        groupRef.current.lookAt(
          groupRef.current.position.x + dirX * 10,
          groupRef.current.position.y + dirY * 10,
          groupRef.current.position.z + dirZ * 10
        );
        
        // Add realistic banking for turns
        const bankAngle = Math.sin(angle * 0.3) * 0.12; // 7 degree max bank
        groupRef.current.rotation.z += bankAngle;
        
        // Slight pitch adjustments for altitude changes
        groupRef.current.rotation.x += Math.sin(angle * 0.2) * 0.03;
        
        // Minor turbulence simulation
        groupRef.current.position.x += Math.sin(time * 5) * 0.002;
        groupRef.current.position.y += Math.cos(time * 7) * 0.001;
        groupRef.current.position.z += Math.sin(time * 6) * 0.002;
        
      } else if (flightPath === "domestic") {
        // Domestic flight with shorter route and different altitude
        const flightSpeed = 0.25;
        const altitude = 3.3;
        const angle = time * flightSpeed;
        
        // Shorter arc route
        const routeProgress = (angle % (Math.PI)) / Math.PI;
        const arcX = (routeProgress - 0.5) * 6;
        const arcY = Math.sin(routeProgress * Math.PI) * 0.8;
        const arcZ = Math.cos(routeProgress * Math.PI) * 1.2;
        
        groupRef.current.position.x = arcX;
        groupRef.current.position.y = arcY + altitude - 2.5;
        groupRef.current.position.z = arcZ;
        
        // Realistic flight path orientation
        const courseAngle = Math.atan2(Math.sin(routeProgress * Math.PI), (routeProgress - 0.5) * 6);
        groupRef.current.rotation.y = courseAngle;
        groupRef.current.rotation.z = Math.sin(routeProgress * Math.PI * 2) * 0.08;
        
      } else if (flightPath === "vacation") {
        // Vacation flight with scenic coastal route
        const flightSpeed = 0.12;
        const altitude = 3.5;
        const angle = time * flightSpeed;
        
        // Scenic coastal route
        const coastalX = Math.cos(angle) * 4;
        const coastalZ = Math.sin(angle) * 2.5;
        const coastalY = Math.sin(angle * 2) * 0.3;
        
        groupRef.current.position.x = coastalX;
        groupRef.current.position.y = coastalY + altitude - 2.5;
        groupRef.current.position.z = coastalZ;
        
        // Relaxed banking for scenic viewing
        groupRef.current.rotation.y = angle + Math.PI / 2;
        groupRef.current.rotation.z = Math.sin(angle * 2) * 0.06;
        groupRef.current.rotation.x = Math.sin(angle) * 0.02;
        
      } else if (flightPath === "business") {
        // Business flight - direct, efficient routing
        const flightSpeed = 0.22;
        const altitude = 4.1; // Higher altitude for efficiency
        const angle = time * flightSpeed;
        
        // Direct point-to-point route
        const directProgress = (angle % (Math.PI * 1.5)) / (Math.PI * 1.5);
        groupRef.current.position.x = (directProgress - 0.5) * 8;
        groupRef.current.position.y = Math.sin(directProgress * Math.PI) * 0.2 + altitude - 2.5;
        groupRef.current.position.z = Math.cos(directProgress * Math.PI * 0.5) * 0.8;
        
        // Minimal banking, efficient flight
        groupRef.current.rotation.y = directProgress * 0.3;
        groupRef.current.rotation.z = Math.sin(directProgress * Math.PI * 3) * 0.03;
        groupRef.current.rotation.x = 0.01;
        
      } else if (flightPath === "connecting") {
        // Hub connection flight with realistic approach patterns
        const flightSpeed = 0.18;
        const altitude = 3.2;
        const angle = time * flightSpeed;
        
        // Hub approach pattern
        const hubRadius = 3;
        const approachAngle = angle % (Math.PI * 2);
        
        if (approachAngle < Math.PI) {
          // Approach phase
          const approachProgress = approachAngle / Math.PI;
          groupRef.current.position.x = Math.cos(approachAngle) * (hubRadius + approachProgress);
          groupRef.current.position.z = Math.sin(approachAngle) * (hubRadius + approachProgress);
          groupRef.current.position.y = altitude - 2.5 - approachProgress * 0.5;
          
          // Descent attitude
          groupRef.current.rotation.x = -approachProgress * 0.1;
        } else {
          // Departure phase
          const departProgress = (approachAngle - Math.PI) / Math.PI;
          groupRef.current.position.x = Math.cos(approachAngle) * (hubRadius - departProgress);
          groupRef.current.position.z = Math.sin(approachAngle) * (hubRadius - departProgress);
          groupRef.current.position.y = altitude - 2.5 + departProgress * 0.5;
          
          // Climb attitude
          groupRef.current.rotation.x = departProgress * 0.08;
        }
        
        groupRef.current.rotation.y = approachAngle + Math.PI / 2;
        groupRef.current.rotation.z = Math.sin(approachAngle * 2) * 0.05;
        
      } else if (flightPath === "redeye") {
        // Red-eye flight - smooth, stable for sleeping passengers
        const flightSpeed = 0.08;
        const altitude = 4.2; // High and stable
        const angle = time * flightSpeed;
        
        // Ultra-stable transcontinental route
        groupRef.current.position.x = Math.cos(angle) * altitude;
        groupRef.current.position.z = Math.sin(angle) * altitude;
        groupRef.current.position.y = Math.sin(angle * 0.2) * 0.05; // Minimal altitude variation
        
        // Extremely stable orientation
        groupRef.current.rotation.y = angle + Math.PI / 2;
        groupRef.current.rotation.z = Math.sin(angle) * 0.01; // Minimal banking
        groupRef.current.rotation.x = 0; // No pitch changes
      }
    }
  });

  return (
    <group ref={groupRef} scale={scale}>
      {/* Wide-body commercial airliner fuselage */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.1, 0.15, 1.8, 24]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.15}
          metalness={0.95}
          roughness={0.05}
        />
      </mesh>
      
      {/* Nose cone for aerodynamics */}
      <mesh position={[0, 0, 0.9]} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[0.1, 0.3, 16]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      
      {/* Main wings with realistic sweep and dihedral */}
      <mesh position={[0, -0.03, 0.1]} rotation={[0, -0.15, 0.02]}>
        <boxGeometry args={[2.8, 0.06, 0.45]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.1}
          metalness={0.85}
          roughness={0.15}
        />
      </mesh>
      
      {/* Wing root fairings */}
      <mesh position={[0.6, -0.05, 0.1]} rotation={[0, -0.1, 0.05]}>
        <boxGeometry args={[0.4, 0.04, 0.2]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-0.6, -0.05, 0.1]} rotation={[0, 0.1, -0.05]}>
        <boxGeometry args={[0.4, 0.04, 0.2]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Modern winglets for fuel efficiency */}
      <mesh position={[1.4, 0.15, 0.1]} rotation={[0, -0.1, Math.PI / 5]}>
        <boxGeometry args={[0.04, 0.3, 0.12]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={0.1}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      <mesh position={[-1.4, 0.15, 0.1]} rotation={[0, 0.1, -Math.PI / 5]}>
        <boxGeometry args={[0.04, 0.3, 0.12]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={0.1}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      
      {/* Horizontal stabilizer with proper sweep */}
      <mesh position={[0, 0.02, -0.8]} rotation={[0, 0.08, 0]}>
        <boxGeometry args={[1.0, 0.04, 0.22]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.08}
          metalness={0.8}
          roughness={0.25}
        />
      </mesh>
      
      {/* Vertical stabilizer with airline-style rake */}
      <mesh position={[0, 0.22, -0.75]} rotation={[0.12, 0, 0]}>
        <boxGeometry args={[0.04, 0.44, 0.32]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.12}
          metalness={0.8}
          roughness={0.25}
        />
      </mesh>
      
      {/* Cockpit windows with realistic curvature */}
      <mesh position={[0, 0.1, 0.75]} rotation={[0.15, 0, 0]}>
        <boxGeometry args={[0.18, 0.1, 0.15]} />
        <meshStandardMaterial 
          color="#1e3a8a" 
          emissive="#1e3a8a" 
          emissiveIntensity={0.4}
          metalness={0.95}
          roughness={0.05}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Passenger window strips */}
      <mesh position={[0, 0.06, 0.3]}>
        <boxGeometry args={[0.14, 0.05, 0.8]} />
        <meshStandardMaterial 
          color="#3730a3" 
          emissive="#3730a3" 
          emissiveIntensity={0.25}
          transparent
          opacity={0.7}
        />
      </mesh>
      
      {/* Modern high-bypass turbofan engines */}
      <mesh position={[0.8, -0.2, 0.15]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.12, 0.14, 0.7, 16]} />
        <meshStandardMaterial 
          color="#1f2937" 
          metalness={0.98}
          roughness={0.02}
        />
      </mesh>
      <mesh position={[-0.8, -0.2, 0.15]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.12, 0.14, 0.7, 16]} />
        <meshStandardMaterial 
          color="#1f2937" 
          metalness={0.98}
          roughness={0.02}
        />
      </mesh>
      
      {/* Engine inlet fans */}
      <mesh position={[0.8, -0.2, 0.5]}>
        <cylinderGeometry args={[0.09, 0.09, 0.02, 16]} />
        <meshStandardMaterial 
          color="#374151" 
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      <mesh position={[-0.8, -0.2, 0.5]}>
        <cylinderGeometry args={[0.09, 0.09, 0.02, 16]} />
        <meshStandardMaterial 
          color="#374151" 
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      
      {/* FAA-compliant navigation lights */}
      <mesh position={[1.4, 0, 0.1]}>
        <sphereGeometry args={[0.03, 12, 12]} />
        <meshStandardMaterial 
          color="#dc2626" 
          emissive="#dc2626" 
          emissiveIntensity={4}
        />
      </mesh>
      <mesh position={[-1.4, 0, 0.1]}>
        <sphereGeometry args={[0.03, 12, 12]} />
        <meshStandardMaterial 
          color="#16a34a" 
          emissive="#16a34a" 
          emissiveIntensity={4}
        />
      </mesh>
      
      {/* Anti-collision beacon (red strobe) */}
      <mesh position={[0, 0.25, -0.75]}>
        <sphereGeometry args={[0.025, 12, 12]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ffffff" 
          emissiveIntensity={5}
        />
      </mesh>
      
      {/* Landing lights */}
      <mesh position={[0.4, -0.08, 0.1]}>
        <sphereGeometry args={[0.015, 8, 8]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ffffff" 
          emissiveIntensity={3}
        />
      </mesh>
      <mesh position={[-0.4, -0.08, 0.1]}>
        <sphereGeometry args={[0.015, 8, 8]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ffffff" 
          emissiveIntensity={3}
        />
      </mesh>
    </group>
  );
};

export const Plane3D = () => {
  return (
    <>
      {/* Single international flight with reduced size */}
      <SinglePlane 
        offset={0} 
        scale={0.6} 
        color="#dc2626" 
        speed={1} 
        flightPath="international" 
      />
    </>
  );
};
