import { useEffect } from "react";

const NavBar = ({ onTurnOff, controlsOn }) => {
	const handleCamOff = () => {
		onTurnOff((prev) => !prev);
	};
  

	return (
		<div className='nav w-full h-[5vh] bg-indigo-950 '>
			<ul className='flex'>
				<li>
					<button className="nav-camera bg-sky-950 text-cyan-500 p-1 m-1 rounded-xl min-w-36 ring-2 ring-offset-2 ring-cyan-700 hover:[ring-cyan-900 bg-cyan-600] ease-in duration-200" onClick={handleCamOff}>{!controlsOn ? 'Unlock Camera' : 'Lock Camera'}</button>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
