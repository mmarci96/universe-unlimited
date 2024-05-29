import { useTexture } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef, useCallback, useEffect, useState } from 'react';

import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

const Planet = React.memo(({ size, planet, orbit, orbSpeed }) => {
	const planetRef = useRef();

	const clockRef = useRef(new THREE.Clock());

	const [hovered, hover] = useState(false);

	const [planetTexture] = useTexture([`/assets/${planet.toLowerCase()}_small.jpg`]);

	const updatePlanetPosition = useCallback(() => {
		const angle = clockRef.current.getElapsedTime() * orbSpeed;
		const distance = orbit;
		const x = Math.sin(angle) * distance;
		const z = Math.cos(angle) * distance;
		planetRef.current.position.set(x, 0, z);
		planetRef.current.rotation.y += 0.002;
	}, []);


	useEffect(() => {
		document.body.style.cursor = hovered ? 'pointer' : 'auto';
	}, [hovered]);

	useFrame(()=>{
		updatePlanetPosition()
	})

	return (
		<group ref={planetRef}>
			<mesh
				castShadow
				receiveShadow
				onPointerOver={() => hover(true)}
				onPointerOut={() => hover(false)}
			>
				{/* Radius , X-axis , Y-axis */}
				<sphereGeometry args={[size, 32, 32]} />
				<meshPhongMaterial
					map={planetTexture}
					shininess={800}
					emissiveMap={planetTexture}
					emissive={0xffffff}
					emissiveIntensity={hovered ? 5 : 0.05}
				/>
			</mesh>
		</group>
	);
});

export default Planet;
