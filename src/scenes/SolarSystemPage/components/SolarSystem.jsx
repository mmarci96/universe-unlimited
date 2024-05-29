import { useHelper } from '@react-three/drei';
import AnimatedStars from './AnimatedStars';
import Earth from './group-earth/Earth';
import { useRef } from 'react';
import * as THREE from 'three';
import Sun from './Sun';

const SolarSystem = () => {
	const directionalLightRef = useRef();
	const directionalLightRefTwo = useRef();
	useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'hotpink');
	useHelper(directionalLightRefTwo, THREE.DirectionalLightHelper, 1, 'hotpink');
	return (
		<>
			<color attach='background' args={['black']} />
			<AnimatedStars />
			{/* <directionalLight ref={directionalLightRef} position={[0, 0, 10]} intensity={3} castShadow />
			<directionalLight
				ref={directionalLightRefTwo}
				position={[0, 0, -10]}
				intensity={3}
				castShadow
			/> */}
			<ambientLight intensity={0.1} />

			<Sun />
			<Earth displacementScale={0.15} />
		</>
	);
};

export default SolarSystem;
