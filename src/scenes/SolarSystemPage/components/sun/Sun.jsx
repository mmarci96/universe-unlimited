import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

const Sun = React.memo(() => {
	const sunRef = useRef();
	const sunTexture = useTexture('/assets/sun_map.jpeg');
	useFrame(() => {
		sunRef.current.rotation.y -= 0.002;
	});

	return (
		<mesh ref={sunRef} position={[0, 0, 0]}>
			<sphereGeometry args={[8, 32, 32]} />
			<meshPhongMaterial
				map={sunTexture}
				emissiveMap={sunTexture}
				emissiveIntensity={1.6}
				emissive={0xffffff}
			/>
			<pointLight castShadow intensity={2048} />
		</mesh>
	);
});

export default Sun;
