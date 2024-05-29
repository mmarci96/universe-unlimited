import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import Moon from './Moon';
import IssSpaceStation from './ISS';
import * as THREE from 'three';

const Earth = ({ displacementScale, xAxis }) => {
	const earthRef = useRef();
	const earthXAxis = 8
	const earthPositionRef = useRef(new THREE.Vector3(earthXAxis, 0, 0));

	const [earthTexture, earthNormalMap, earthSpecularMap, earthDisplacementMap] = useTexture([
		'/assets/earth_daymap.jpeg',
		'/assets/earth_normal_map.jpeg',
		'/assets/earth_specular_map.jpeg',
		'/assets/earth_displacement_map.jpg',
	]);

	useFrame(({ clock }) => {
		// earthRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.8) * xAxis;
		// earthRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.8) * xAxis;
		const angle = clock.getElapsedTime() * 0.5;
		const distance = 12;
		const x = Math.sin(angle) * distance;
		const z = Math.cos(angle) * distance;
		earthRef.current.position.set(x, 0, z);

		earthRef.current.rotation.y += 0.002;
		earthPositionRef.current = earthRef.current.position
	});

	return (
		<group ref={earthRef} position={[earthXAxis, 0, 0]}>
			<mesh receiveShadow castShadow>
				<sphereGeometry args={[1, 32, 32]} />
				<meshPhongMaterial
					map={earthTexture}
					normalMap={earthNormalMap}
					specularMap={earthSpecularMap}
					shininess={500}
					displacementMap={earthDisplacementMap}
					displacementScale={0.1}
				/>
			</mesh>
			<IssSpaceStation />
			<Moon />
		</group>
	);
};

export default Earth;
