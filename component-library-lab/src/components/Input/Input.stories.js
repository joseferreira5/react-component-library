import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from './Input';

storiesOf('Text Input', module).add('Input small', () => (
	<Input label="Email" type="input-small" />
));

storiesOf('Text Input', module).add('Input medium', () => (
	<Input label="Email" type="input-medium" />
));

storiesOf('Text Input', module).add('Input large', () => (
	<Input label="Email" type="input-large" />
));
