import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useCallback, useState, useEffect } from 'react';

import * as THREE from 'three';

const Saturn = React.memo(() => {
	const saturnRef = useRef();

	const clockRef = useRef(new THREE.Clock());
	const [hovered, hover] = useState(false);

	const [saturnTexture, saturnRing] = useTexture([
		'/assets/saturn_normal.jpg',
		'assets/saturn_ring.png',
	]);
	saturnRing.rotation = Math.PI / 2;

	const updateSaturnPosition = useCallback(() => {
		const angle = clockRef.current.getElapsedTime() * 0.5;
		const distance = 56;
		const x = Math.sin(angle) * distance;
		const z = Math.cos(angle) * distance;
		saturnRef.current.position.set(x, 0, z);
		saturnRef.current.rotation.y += 0.002;
	}, []);

	useEffect(() => {
		document.body.style.cursor = hovered ? 'pointer' : 'auto';
	}, [hovered]);

	useFrame(() => {
		updateSaturnPosition();
	});

	return (
		<group ref={saturnRef}>
			<mesh
				castShadow
				receiveShadow
				onPointerOver={() => hover(true)}
				onPointerOut={() => hover(false)}
			>
				<sphereGeometry args={[1.6, 32, 32]} />
				<meshPhongMaterial map={saturnTexture} />
			</mesh>
			<mesh rotation-x={Math.PI / 2}>
				<torusGeometry args={[3.5, 0.5, 2.5, 120]} />
				<meshPhongMaterial map={saturnRing} />
			</mesh>
		</group>
	);
});

export default Saturn;
