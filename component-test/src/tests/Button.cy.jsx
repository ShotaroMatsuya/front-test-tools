/// <reference types="Cypress" />

import React from 'react';
import { mount } from '@cypress/react';

import Button from '../components/Button';

describe('Button component test cases', () => {
  beforeEach(() => {
    mount(<Button />);
  });
  it('Render the button using cypress', () => {
    cy.get('[data-cy="button"]').should('have.text', 'Click me');
  });

  it('should change the text after clicking', () => {
    cy.get('[data-cy="button"]').click().should('have.text', 'Loading...');
  });
});
