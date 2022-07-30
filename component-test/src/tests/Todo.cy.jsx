///<reference types="Cypress" />

import React from 'react';
import { mount } from '@cypress/react';
import Todo from '../components/Todo';

const todo1 = {
  id: 1,
  title: 'Learn Cypress',
  completed: true,
};

describe('Todo component test cases', () => {
  before(() => {
    mount(<Todo todo={todo1} key={todo1.id} />);
  });
  it('should have the correct default text', () => {
    cy.log('hello');
  });
});
