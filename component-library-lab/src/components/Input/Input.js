import React from 'react';
import './Input.css';

const Input = props => (
	<>
		<label for={props.label}>{props.label}</label>
		<input
			name={props.label}
			label={props.label}
			placeholder={props.label}
			className={props.type}
		/>
	</>
);

export default Input;
