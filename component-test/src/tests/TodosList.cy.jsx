///<reference types="Cypress" />

import React from 'react';
import { mount } from '@cypress/react';
import TodosList from '../components/TodosList';

describe('TodosList component test cases', () => {
  before(() => {
    cy.intercept('https://jsonplaceholder.typicode.com/todos', {
      fixture: 'todos',
    }).as('todos');
    mount(<TodosList />);
  });
  it('should have the correct default text', () => {
    cy.get('[data-cy="title"]').should('have.length', 3);
  });
});
