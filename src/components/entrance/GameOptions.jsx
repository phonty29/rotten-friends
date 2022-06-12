import React, {useState, useEffect} from 'react';
import {isInStorage} from '../../utils/storage';
import {players} from '../../utils/data';
import Start from './Start';

const GameOptions = () => {
	const [playerAmount, setPlayerAmount] = useState(12);
	const [multiplay, setMultiplay] = useState(false);

	useEffect(() => {
		if (isInStorage('playerAmount') || isInStorage('multiplay')) {
			sessionStorage.removeItem('playerAmount');
			sessionStorage.removeItem('multiplay');
			setPlayerAmount(12);
			setMultiplay(false);
		}
	}, []);

	return (
		<div className = "mt-3">
			<label htmlFor="customRange2" className="h2">{playerAmount} player</label>
			<input defaultValue="12" id="customRange2" type="range" className="form-range" min="1" max={players.length-1} onChange={(event) => {setPlayerAmount(+event.target.value);}}/>			
			<div className="form-check form-switch mt-2">
			  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable the button if you want to play with your guchi-friends online</label>
			  <input style={{fontSize: '25px'}} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={(event) => {setMultiplay(prev => !prev)}}/>
			</div>	
			<Start multiplay={multiplay} playerAmount={playerAmount}/>		
		</div>
	);
}

export default GameOptions;