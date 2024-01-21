import {
  browseLanguageInput,
  browseRuntimesInput,
  browseSortByInput,
  browseYearInput,
  loginPasswordInput,
  loginSubmit,
  loginUsernameInput,
  navbarBrowseButton,
} from '../fixtures/selectors';

describe('Browse section display', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get(loginUsernameInput).type('kira');
    cy.get(loginPasswordInput).type('kira');
    cy.get(loginSubmit).click();
  });

  it('Should check if Browse section displays correctly', () => {
    cy.get(navbarBrowseButton).contains('Browse').click();
    cy.get('.sc-lmoLKH').contains('Browse').and('be.visible');
  });

  it('Should check if input fields work correctly', () => {
    cy.get(navbarBrowseButton).contains('Browse').click();
    cy.get('.sc-dIUfKc').contains('Genres');
    cy.get('.sc-kfzCjt').click();
    cy.get('[data-test-value="Action"]').click();
    cy.get('.sc-ezrdqu > :nth-child(2)').contains('Year');
    cy.get(browseYearInput).type('2024');
    cy.get('.sc-ezrdqu > :nth-child(3)').contains('Language');
    cy.get(browseLanguageInput).type('en');
    cy.get('.sc-ezrdqu > :nth-child(4)').contains('Sort by');
    cy.get(browseSortByInput).type('a');
    cy.get('.sc-ezrdqu > :nth-child(5)').contains('Runtime');
    cy.get(browseRuntimesInput).type('30');
    cy.get('.sc-bYEuID').children().should('have.length.at.least', 20);
  });

  it('Should check if upon clicking one the film card it opens a film details page', () => {
    cy.get(navbarBrowseButton).contains('Browse').click();
  });
});
