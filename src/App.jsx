import SolarSystem from './scenes/SolarSystem';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const App = () => {
	return (
		<div className='main w-full h-[100vh]'>
				<Canvas camera={{ fov: 55, near: 0.1, far: 1000, position: [16, 8.5, 19.5] }} shadows>
					<color attach='background' args={['black']} />

					<OrbitControls />
					<SolarSystem />
				</Canvas>
			</div>
	);
};

export default App;
