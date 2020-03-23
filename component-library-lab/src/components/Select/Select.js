import React from 'react';
import './Select.css';

const Select = props => (
	<select className={props.type}>
		<option>{props.label}</option>
	</select>
);

export default Select;
