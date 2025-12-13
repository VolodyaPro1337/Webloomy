import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedShape = () => {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={meshRef} position={[0, 0, 0]} scale={2.5}>
                <icosahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color="#00f3ff"
                    wireframe
                    emissive="#a855f7"
                    emissiveIntensity={0.5}
                    roughness={0}
                    metalness={1}
                />
            </mesh>
        </Float>
    );
};

const Scene: React.FC = () => {
    return (
        <div className="absolute inset-0 -z-0">
            <Canvas camera={{ position: [0, 0, 8] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} color="#a855f7" intensity={2} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <AnimatedShape />
            </Canvas>
        </div>
    );
};

export default Scene;
