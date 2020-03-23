import React from 'react';
import { storiesOf } from '@storybook/react';

import Checkbox from './Checkbox';

storiesOf('Checkbox', module).add('Checkbox black', () => (
	<Checkbox inputColor={'black'} isChecked={false} />
));

storiesOf('Checkbox', module).add('Checkbox blue', () => (
	<Checkbox inputColor={'blue'} isChecked={false} />
));

storiesOf('Checkbox', module).add('Checkbox with text', () => (
	<Checkbox
		inputColor={'black'}
		isChecked={false}
		text={"Don't show this popup again"}
	/>
));
