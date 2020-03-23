import React from 'react';
import { storiesOf } from '@storybook/react';

import Select from './Select';

storiesOf('Select Input', module).add('Select-input small', () => (
	<Select label="Select" type="select-small" />
));

storiesOf('Select Input', module).add('Select-input medium', () => (
	<Select label="Select" type="select-medium" />
));

storiesOf('Select Input', module).add('Select-input large', () => (
	<Select label="Select" type="select-large" />
));

storiesOf('Select Input', module).add('Select-input small gray', () => (
	<Select label="Select" type="select-small gray" />
));

storiesOf('Select Input', module).add('Select-input medium gray', () => (
	<Select label="Select" type="select-medium gray" />
));

storiesOf('Select Input', module).add('Select-input large gray', () => (
	<Select label="Select" type="select-large gray" />
));
