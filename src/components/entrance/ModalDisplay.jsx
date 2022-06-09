import React, {useContext} from 'react';
import {ModalContext} from '../../context/ModalContext';

const ModalDisplay = () => {
	const {name, setName} = useContext(ModalContext);

	return (
		<div>
			<h1>{name}</h1>
			<label htmlFor="name" className="form-label mt-3">Enter your name</label>
			<input type="text" className="form-control" id="name" onChange={(event) => {setName(event.target.value)}}/>
		</div>
	);
}

export default ModalDisplay;