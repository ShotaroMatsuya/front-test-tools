import React from 'react';
import { mount } from '@cypress/react';

import Button from '../components/Button';

it('Render the button using cypress', () => {
  mount(<Button />);
});
