import {
  loginPasswordInput,
  loginSubmit,
  loginUsernameInput,
  navbarLogoutButton,
  toastSelector,
} from '../fixtures/selectors';

describe('Login and logout functions', () => {
  it('Should check if login page displays correctly', () => {
    cy.visit('/login');
    cy.get('.sc-fubDmA').contains('Login').and('be.visible');
  });

  it('Should check if login function works correctly', () => {
    cy.visit('/login');
    cy.get(loginUsernameInput).type('kira');
    cy.get(loginPasswordInput).type('kira');
    cy.get(loginSubmit).click();
    cy.get(toastSelector).should('have.text', 'Succesfuly logged in!');
  });

  it('Should check if logout function works correctly', () => {
    cy.visit('/login');
    cy.get(loginUsernameInput).type('kira');
    cy.get(loginPasswordInput).type('kira');
    cy.get(loginSubmit).click();
    cy.get(navbarLogoutButton).click();
    cy.get(toastSelector).should('have.text', 'Succesfuly logged out!');
  });
});
