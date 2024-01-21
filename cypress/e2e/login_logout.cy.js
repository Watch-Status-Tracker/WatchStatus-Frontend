import {
  authHeader,
  loginPasswordInput,
  loginSubmit,
  loginUsernameInput,
  navbarLogoutButton,
  testerUser,
  toastSelector,
} from '../fixtures/selectors';

const { username, password } = testerUser;

describe('Login and logout functions', () => {
  it('Should check if login page displays correctly', () => {
    cy.visit('/login');
    cy.get(authHeader).contains('Login').and('be.visible');
  });

  it('Should check if login function works correctly', () => {
    cy.visit('/login');
    cy.get(loginUsernameInput).type(username);
    cy.get(loginPasswordInput).type(password);
    cy.get(loginSubmit).click();
    cy.get(toastSelector).should('have.text', 'Succesfuly logged in!');
  });

  it('Should check if logout function works correctly', () => {
    cy.visit('/login');
    cy.get(loginUsernameInput).type(username);
    cy.get(loginPasswordInput).type(password);
    cy.get(loginSubmit).click();
    cy.get(navbarLogoutButton).click();
    cy.get(toastSelector).should('have.text', 'Succesfuly logged out!');
  });
});
