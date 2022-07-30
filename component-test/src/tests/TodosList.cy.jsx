///<reference types="Cypress" />

import React from 'react';
import { mount } from '@cypress/react';
import TodosList from '../components/TodosList';

describe('TodosList component test cases', () => {
  before(() => {
    cy.intercept('https://jsonplaceholder.typicode.com/todos', [
      {
        id: 1,
        title: 'Hello from Cypress server',
      },
    ]).as('todos');
    mount(<TodosList />);
  });
  it('should have the correct default text', () => {
    cy.wait('@todos');
  });
});
