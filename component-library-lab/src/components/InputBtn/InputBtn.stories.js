import React from 'react';
import { storiesOf } from '@storybook/react';

import InputBtn from './InputBtn';

storiesOf('Input with button', module).add('Input button medium', () => (
	<InputBtn
		inputText={'Voucher code'}
		inputSize={'input-medium'}
		buttonText={'Redeem'}
		buttonType={'primary'}
	/>
));

storiesOf('Input with button', module).add('Input button large', () => (
	<InputBtn
		inputText={'Voucher code'}
		inputSize={'input-large'}
		buttonText={'Redeem'}
		buttonType={'primary'}
	/>
));
