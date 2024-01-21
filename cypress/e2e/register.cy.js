import {
  registerEmailInput,
  registerPasswordInput,
  registerRedirectLogin,
  registerSubmit,
  registerUsernameInput,
} from '../fixtures/selectors';

describe('Register page display', () => {
  it('Should check if redirect to register from login page works correctly', () => {
    cy.visit('/login');
    cy.get(registerRedirectLogin).click();
    cy.url().should('include', '/register');
  });

  it('Should check if registration form displays correctly', () => {
    cy.visit('/register');
    cy.get('.sc-fubDmA').contains('Register').and('be.visible');
  });

  it('Should check if registration function works correctly', () => {
    cy.visit('/register');
    cy.get(registerUsernameInput).type('test');
    cy.get(registerEmailInput).type('test@test.pl');
    cy.get(registerPasswordInput).type('test');
    cy.get(registerSubmit).click();
    cy.get('toast').should('have.text', 'Account created! Now you can log in!');
  });

  it('Should check if account with the same data cannot be created twice', () => {
    cy.visit('/register');
    cy.get(registerUsernameInput).type('test');
    cy.get(registerEmailInput).type('test@test.pl');
    cy.get(registerPasswordInput).type('test');
    cy.get(registerSubmit).click();
    cy.get(registerUsernameInput).type('test');
    cy.get(registerEmailInput).type('test@test.pl');
    cy.get(registerPasswordInput).type('test');
    cy.get(registerSubmit).click();
    cy.get('toast').should('have.text', 'A user ith this username already exists!');
  });
});
