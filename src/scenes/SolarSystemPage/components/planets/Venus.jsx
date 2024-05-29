import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useCallback, useEffect, useState } from 'react';

import * as THREE from 'three';

const Venus = React.memo(() => {
	const venusRef = useRef();

	const clockRef = useRef(new THREE.Clock());

	const [hovered, hover] = useState(false);

	const [venusTexture, venusSurfaceMap] = useTexture([
		`/assets/venus_atmosphere.jpg`,
		'/assets/venus_surface.jpg',
	]);

	const updateVenusPosition = useCallback(() => {
		const angle = clockRef.current.getElapsedTime() * 0.6;
		const distance = 16;
		const x = Math.sin(angle) * distance;
		const z = Math.cos(angle) * distance;
		venusRef.current.position.set(x, 0, z);
		venusRef.current.rotation.y += 0.002;
	}, []);

	useEffect(() => {
		document.body.style.cursor = hovered ? 'pointer' : 'auto';
	}, [hovered]);

	useFrame(() => {
		updateVenusPosition();
	});

	return (
		<group ref={venusRef}>
			<mesh
				castShadow
				receiveShadow
				onPointerOver={() => hover(true)}
				onPointerOut={() => hover(false)}
			>
				{/* Radius , X-axis , Y-axis */}
				<sphereGeometry args={[0.75, 32, 32]} />
				<meshPhongMaterial
					map={venusTexture}
					shininess={800}
					emissiveMap={venusSurfaceMap}
					emissive={0xffffff}
					emissiveIntensity={hovered ? 10 : 0.5}
				/>
			</mesh>
		</group>
	);
});

export default Venus;
