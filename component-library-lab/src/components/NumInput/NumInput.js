import React, { Component } from 'react';
import './NumInput.css';

class NumInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: this.props.value,
			step: this.props.step,
			min: this.props.min,
			max: this.props.max
		};
	}

	handlePlus = () => {
		const newCount = this.state.count + 1;

		if (newCount <= this.state.max) {
			this.setState({ count: newCount });
		}
	};

	handleMinus = () => {
		const newCount = this.state.count - 1;

		if (newCount >= this.state.min) {
			this.setState({ count: newCount });
		}
	};

	render() {
		return (
			<div className="number-input">
				<button onClick={this.handleMinus}>-</button>
				<span>{this.state.count}</span>
				<button onClick={this.handlePlus}>+</button>
			</div>
		);
	}
}

export default NumInput;
