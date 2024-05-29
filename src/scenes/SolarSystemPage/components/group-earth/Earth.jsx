import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useCallback, useRef, useEffect, useState } from 'react';
import Moon from './Moon';
import IssSpaceStation from './ISS';
import * as THREE from 'three';

const Earth = React.memo(({ displacementScale }) => {
	const earthRef = useRef();
	const earthPositionRef = useRef(new THREE.Vector3(12, 0, 0));
	const [hovered, hover] = useState(false)
	
	const [earthTexture, earthNormalMap, earthSpecularMap, earthDisplacementMap, earthEmissiveMap] = useTexture([
		'/assets/earth_day_small.jpg',
		'/assets/earth_normal_small.jpeg',
		'/assets/earth_specular_small.jpeg',
		'/assets/earth_displacement_map.jpg',
		'/assets/earth_nightmap.jpeg',
		
	]);
	
	const updateEarthPosition = useCallback((clock)=>{
		const angle = clock.getElapsedTime() * 0.5;
		const distance = 12;
		const x = Math.sin(angle) * distance;
		const z = Math.cos(angle) * distance;
		earthRef.current.position.set(x, 0, z);
	
		earthRef.current.rotation.y += 0.002;
		earthPositionRef.current = earthRef.current.position

	})
	useEffect(()=>{
		document.body.style.cursor = hovered ? 'pointer' : 'auto';
	},[hovered])

	useFrame(({ clock }) => {
		updateEarthPosition(clock)
	});

	return (
		<group ref={earthRef} position={[8, 0, 0]}>
			<mesh receiveShadow castShadow onPointerOver={()=> hover(true)} onPointerOut={()=>hover(false)} >
				<sphereGeometry args={[1, 32, 32]} />
				<meshPhongMaterial
					map={earthTexture}
					normalMap={earthNormalMap}
					specularMap={earthSpecularMap}
					shininess={1000}
					displacementMap={earthDisplacementMap}
					displacementScale={displacementScale}
					emissiveMap={earthEmissiveMap}
					emissive={0xffffff}
					emissiveIntensity={hovered ? 10 : 1.5}
				/>
			</mesh>
			<IssSpaceStation />
			<Moon />
		</group>
	);
});

export default Earth;
