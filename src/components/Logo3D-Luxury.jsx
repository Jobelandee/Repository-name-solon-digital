import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function LuxuryLogo() {
  const groupRef = useRef(null);
  const { camera } = useThree();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const rect = event.target.getBoundingClientRect?.() || {};
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.0003;
      groupRef.current.rotation.x = mouseRef.current.y * 0.15;
      groupRef.current.rotation.y = mouseRef.current.x * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <planeGeometry args={[3.2, 2.4]} />
        <meshStandardMaterial
          map={new THREE.TextureLoader().load('/solon-logo.png')}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

function LightSetup() {
  return (
    <>
      {/* Key light - front top */}
      <pointLight
        position={[15, 15, 15]}
        intensity={1.5}
        color="#FFFFFF"
      />

      {/* Rim light - back for depth */}
      <pointLight
        position={[-10, -10, -10]}
        intensity={0.6}
        color="#D4A565"
      />

      {/* Ambient light - soft base */}
      <ambientLight intensity={0.8} color="#FFFFFF" />
    </>
  );
}

export default function Logo3DLuxury() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas
        camera={{
          position: [0, 0, 2.5],
          fov: 50,
          near: 0.1,
          far: 1000,
        }}
        style={{
          background: 'transparent',
          width: '100%',
          height: '100%',
        }}
      >
        <LightSetup />
        <LuxuryLogo />
      </Canvas>
    </div>
  );
}
