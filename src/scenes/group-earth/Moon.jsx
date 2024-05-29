import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useCallback, useRef } from 'react';

const Moon = React.memo(() => {
	const moonRef = useRef();
	const [moonTexture] = useTexture(['/assets/moon_map.jpeg']);
	const updateMoonPosition = useCallback((clock) => {
		const xAxis = 4;
		moonRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.8) * xAxis;
		moonRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.8) * xAxis;
		moonRef.current.rotation.y += 0.002;
	});
	useFrame(({ clock }) => updateMoonPosition(clock));

	return (
		<mesh ref={moonRef} position={[4, 0, 0]} castShadow receiveShadow>
			<sphereGeometry args={[0.5, 32, 32]} />
			<meshPhongMaterial
				map={moonTexture}
				emissiveMap={moonTexture}
				emissiveIntensity={0.05}
				emissive={0xffffff}
			/>
		</mesh>
	);
});

export default Moon;
