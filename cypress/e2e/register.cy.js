import {
  authHeader,
  registerEmailInput,
  registerPasswordInput,
  registerRedirectLogin,
  registerSubmit,
  registerUsernameInput,
  toastSelector,
} from '../fixtures/selectors';
import { generateUser } from '../fixtures/utils';

const { username, password, email } = generateUser();

describe('Register page display', () => {
  it('Should check if redirect to register from login page works correctly', () => {
    cy.visit('/login');
    cy.get(registerRedirectLogin).click();
    cy.url().should('include', '/register');
  });

  it('Should check if registration form displays correctly', () => {
    cy.visit('/register');
    cy.get(authHeader).contains('Register').and('be.visible');
  });

  it('Should check if registration function works correctly', () => {
    cy.visit('/register');
    cy.get(registerUsernameInput).type(username);
    cy.get(registerEmailInput).type(email);
    cy.get(registerPasswordInput).type(password);
    cy.get(registerSubmit).click();
    cy.get(toastSelector).should('have.text', 'Account created! Now you can log in!');
  });

  it('Should check if account with the same data cannot be created twice', () => {
    cy.visit('/register');
    const { username, password, email } = generateUser();

    cy.get(registerUsernameInput).type(username);
    cy.get(registerEmailInput).type(email);
    cy.get(registerPasswordInput).type(password);
    cy.get(registerSubmit).click();

    cy.visit('/register');
    cy.get(registerUsernameInput).type(username);
    cy.get(registerEmailInput).type(email);
    cy.get(registerPasswordInput).type(password);
    cy.get(registerSubmit).click();
    cy.get(toastSelector).should('have.text', 'A user with this username already exists');
  });
});
