import {
  loginPasswordInput,
  loginSubmit,
  loginUsernameInput,
  navbarLogoutButton,
} from '../fixtures/selectors';

describe('Login and logout functions', () => {
  it('Should check if login function works correctly', () => {
    cy.visit('/login');
    cy.get(loginUsernameInput).type('kira');
    cy.get(loginPasswordInput).type('kira');
    cy.get(loginSubmit).click();
    cy.get('toast').should('have.text', 'Succesfuly logged in!');
  });

  it('Should check if logout function works correctly', () => {
    cy.visit('/login');
    cy.get(loginUsernameInput).type('kira');
    cy.get(loginPasswordInput).type('kira');
    cy.get(loginSubmit).click();
    cy.get(navbarLogoutButton).click();
    cy.get('toast').should('have.text', 'Succesfuly logged out!');
  });
});
