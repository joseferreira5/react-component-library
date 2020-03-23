import React from 'react';
import { storiesOf } from '@storybook/react';

import NumInput from './NumInput';

storiesOf('Number Input', module).add('Number input', () => (
	<NumInput value={0} step={1} min={0} max={10} />
));
