import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

const InputBtn = props => (
	<div className="input-button">
		<Input label={props.inputText} type={props.inputSize} />
		<Button label={props.buttonText} type={props.buttonType} />
	</div>
);

export default InputBtn;
