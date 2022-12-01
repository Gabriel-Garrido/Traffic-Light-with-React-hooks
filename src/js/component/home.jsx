import React, { useState } from "react"

//include images into your bundle

//create your first component
const Home = () => {
	
	const [luzRoja, setLuzR] = useState(false);
	const [luzAmarilla, setLuzA] = useState(false);
	const [luzVerde, setLuzV] = useState(false);

	function encenderR () {
		setLuzR(prev => !prev)
		setLuzA(prev => prev = false)
		setLuzV(prev => prev = false)
	}
	function encenderA () {
		setLuzA(prev => !prev)
		setLuzR(prev => prev = false)
		setLuzV(prev => prev = false)
	}
	function encenderV () {
		setLuzV(prev => !prev)
		setLuzA(prev => prev = false)
		setLuzR(prev => prev = false)
	}
		
	return (
		<div className="fondo"> 
			<button className={luzRoja ? "luzRoja encendida" : "luzRoja"} onClick={() => encenderR()}></button>
			<button className={luzAmarilla ? "luzAmarilla encendida" : "luzAmarilla"} onClick={() => encenderA()}></button>
			<button className={luzVerde ? "luzVerde encendida" : "luzVerde"} onClick={() => encenderV()}></button>
		</div>
	);
};

export default Home;
