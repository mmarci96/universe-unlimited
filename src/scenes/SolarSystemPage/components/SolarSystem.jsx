import { useHelper } from '@react-three/drei';
import AnimatedStars from './AnimatedStars';
import Earth from './group-earth/Earth';
import { useRef } from 'react';
import * as THREE from 'three';
import Sun from './sun/Sun';
import { Perf } from 'r3f-perf';

const SolarSystem = () => {
	const directionalLightRef = useRef();
	const directionalLightRefTwo = useRef();
	useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'hotpink');
	useHelper(directionalLightRefTwo, THREE.DirectionalLightHelper, 1, 'hotpink');
	return (
		<>
			<Perf />
			<AnimatedStars />
			{/* <directionalLight ref={directionalLightRef} position={[0, 0, 10]} intensity={3} castShadow />
			<directionalLight
				ref={directionalLightRefTwo}
				position={[0, 0, -10]}
				intensity={3}
				castShadow
			/> */}
			<ambientLight intensity={0.15} />
			<Sun />
			<Earth displacementScale={0.15} />
		</>
	);
};

export default SolarSystem;
