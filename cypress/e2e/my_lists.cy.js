import {
  loginPasswordInput,
  loginSubmit,
  loginUsernameInput,
  navbarListsButton,
} from '../fixtures/selectors';

describe('My lists section display', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get(loginUsernameInput).type('kira');
    cy.get(loginPasswordInput).type('kira');
    cy.get(loginSubmit).click();
  });

  it('Should check if My lists section displays correctly', () => {
    cy.get(navbarListsButton).contains('My lists').click();
  });

  it('Should check if creating new list works correctly', () => {});

  it('Should check if adding an intem to the list works correctly', () => {});
});
