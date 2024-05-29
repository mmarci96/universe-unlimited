import AnimatedStars from './AnimatedStars';
import Earth from './group-earth/Earth';
import Sun from './sun/Sun';
import { Perf } from 'r3f-perf';
import Saturn from './planets/Saturn';
import Planet from './planets/Planet';
import Venus from './planets/Venus';

const SolarSystem = ({ orbitControlsOn }) => {
	const marsOrbit = 30;
	const mercuryOrbit = 12;
	const jupiterOrbit = 42;

	return (
		<>
			<Perf />
			<AnimatedStars />

			<ambientLight intensity={0.05} />

			<Sun />
			<Planet
				orbitControlsOn={orbitControlsOn}
				size={0.4}
				planet='Mercury'
				orbit={mercuryOrbit}
				orbSpeed={0.7}
			/>
			<Venus />
			<Earth displacementScale={0.15} orbitControlsOn={orbitControlsOn} />
			<Planet
				orbitControlsOn={orbitControlsOn}
				size={0.85}
				planet='Mars'
				orbit={marsOrbit}
				orbSpeed={0.16}
			/>
			<Planet
				orbitControlsOn={orbitControlsOn}
				size={3.85}
				planet='Jupiter'
				orbit={jupiterOrbit}
				orbSpeed={0.36}
			/>
			<Saturn/>
		<Planet
		orbitControlsOn={orbitControlsOn}
		size={2.8}
		planet='Uranus'
		orbit={64}
		orbSpeed={0.6}
		/>
		<Planet
		orbitControlsOn={orbitControlsOn}
		size={2.2}
		planet='Neptune'
		orbit={72}
		orbSpeed={0.5}/>

		</>
	);
};

export default SolarSystem;
