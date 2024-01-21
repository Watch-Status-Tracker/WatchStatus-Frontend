import {
  browseGenresInput,
  browseGenresInputWrapper,
  browseLanguageInput,
  browseLanguageInputWrapper,
  browseRuntimesInput,
  browseRuntimesInputWrapper,
  browseSortByInput,
  browseSortByInputWrapper,
  browseYearInput,
  browseYearInputWrapper,
  genreDataTest,
  loginPasswordInput,
  loginSubmit,
  loginUsernameInput,
  navbarBrowseButton,
  testerUser,
} from '../fixtures/selectors';

const { username, password } = testerUser;

describe('Browse section display', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get(loginUsernameInput).type(username);
    cy.get(loginPasswordInput).type(password);
    cy.get(loginSubmit).click();
  });

  it('Should check if Browse section displays correctly', () => {
    cy.get(navbarBrowseButton).contains('Browse').click();
    cy.get('.sc-lmoLKH').contains('Browse').and('be.visible');
  });

  it('Should check if input fields work correctly', () => {
    cy.get(navbarBrowseButton).contains('Browse').click();
    cy.get(browseGenresInputWrapper).contains('Genres');

    cy.get(browseGenresInput).click();
    cy.get(genreDataTest('Action')).click();
    cy.get(browseYearInputWrapper).contains('Year');
    cy.get(browseYearInput).type('2024');
    cy.get(browseLanguageInputWrapper).contains('Language');
    cy.get(browseLanguageInput).type('en');
    cy.get(browseSortByInputWrapper).contains('Sort by');
    cy.get(browseSortByInput).type('popularity.asc');
    cy.get(browseRuntimesInputWrapper).contains('Runtime');
    cy.get(browseRuntimesInput).type('30');
    cy.get('.sc-bYEuID').children().should('have.length.at.least', 20);
  });

  it.only('Should check if upon clicking one the film card it opens a film details page', () => {
    cy.get(navbarBrowseButton).contains('Browse').click();
    cy.get('.sc-bYEuID').children().first().click();
    cy.url().should('include', '/position/');
  });
});
