import SolarSystem from './components/SolarSystem';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import NavBar from '../NavBar';
import { useEffect, useState } from 'react';

const SolarSystemPage = () => {
	const [orbitControlsOn, setOrbitControlsOn] = useState(false)
	useEffect(()=>{
		console.log(orbitControlsOn)
	},[orbitControlsOn])
	return (
		<div className='main w-full h-[100vh]'>
			<div className='w-full h-[95vh]'>
				<Canvas camera={{ fov: 65, near: 0.1, far: 2000 , position: [22.5, 2.5, 23.5] }} shadows>
					<color attach='background' args={['black']} />

					<OrbitControls />
					<SolarSystem orbitControlsOn={orbitControlsOn} />
				</Canvas>
			</div>
			<NavBar onTurnOff={setOrbitControlsOn} controlsOn={orbitControlsOn} />
		</div>
	);
};

export default SolarSystemPage;
