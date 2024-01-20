import { loginPasswordInput, loginSubmit, loginUsernameInput } from '../fixtures/selectors';

describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');

    cy.get(loginUsernameInput).type('kira');
    cy.get(loginPasswordInput).type('kira');
    cy.get(loginSubmit).click();

    cy.wait(5000);

    // cy.get(navbarHomeButton);
    // cy.get(navbarListsButton);
    // cy.get(navbarBrowseButton);
    // cy.get(navbarRankingButton);
    // cy.get(navbarSettingsButton);
    // cy.get(navbarLogoutButton);
  });
});
