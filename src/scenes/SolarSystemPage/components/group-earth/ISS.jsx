/* eslint-disable react-hooks/rules-of-hooks */
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useMemo, useRef, useCallback } from 'react';
import * as THREE from 'three';

const ISS = React.memo(() => {
	const issRef = useRef();
	const clockRef = useRef(new THREE.Clock()); // Create a reference to the clock
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const memoizedISS = useMemo(() => {
		return useGLTF('/ISSModel/ISS_stationary.gltf');
	});
	const updateISSPosition = useCallback(() => {
    const xAxis = 2;
		// Orbit Rotation
		issRef.current.position.x = Math.sin(clockRef.current.getElapsedTime() * 0.6) * xAxis;
		issRef.current.position.z = Math.cos(clockRef.current.getElapsedTime() * 0.6) * xAxis;
	}, []);
	useFrame(() => {
		updateISSPosition();
	});

	return (
		<mesh>
			<primitive ref={issRef} object={memoizedISS.scene} position={[2, 0, 0]} scale={0.005} />
		</mesh>
	);
});

// eslint-disable-next-line react-refresh/only-export-components
export default ISS;
