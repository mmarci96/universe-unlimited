import SolarSystem from './components/SolarSystem';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';

const SolarSystemPage = () => {
	return (
		<div className='main w-full h-[100vh]'>
			<div className='w-full h-[95vh]'>
				<Canvas camera={{ fov: 55, near: 0.1, far: 1000, position: [16, 8.5, 19.5] }} shadows>
					<color attach='background' args={['black']} />

					<OrbitControls />
					<SolarSystem />
				</Canvas>
			</div>
		</div>
	);
};

export default SolarSystemPage;
