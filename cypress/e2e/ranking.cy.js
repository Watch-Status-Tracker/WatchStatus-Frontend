import {
  genreDataTest,
  gridWrapper,
  loginPasswordInput,
  loginSubmit,
  loginUsernameInput,
  navbarRankingButton,
  rankingGenresInput,
  rankingGenresInputWrapper,
  rankingHeader,
  rankingLanguageInput,
  rankingLanguageInputWrapper,
  rankingRuntimesInput,
  rankingRuntimesInputWrapper,
  rankingUserVotesInput,
  rankingUserVotesInputWrapper,
  rankingYearInput,
  rankingYearInputWrapper,
  testerUser,
} from '../fixtures/selectors';

const { username, password } = testerUser;

describe('Ranking section display', () => {
  beforeEach(() => {
    cy.visit('/ranking');
    cy.get(loginUsernameInput).type(username);
    cy.get(loginPasswordInput).type(password);
    cy.get(loginSubmit).click();
  });

  it('Should check if Ranking section displays correctly', () => {
    cy.get(navbarRankingButton).contains('Ranking').click();
    cy.get(rankingHeader).contains('Ranking').and('be.visible');
  });

  it('Should check if input fields work correctly', () => {
    cy.get(navbarRankingButton).contains('Ranking').click();
    cy.get(rankingGenresInputWrapper).contains('Genres');

    cy.get(rankingGenresInput).click();
    cy.get(genreDataTest('Action')).click();
    cy.get(rankingYearInputWrapper).contains('Year');
    cy.get(rankingYearInput).type('2024');
    cy.get(rankingLanguageInputWrapper).contains('Language');
    cy.get(rankingLanguageInput).type('en');
    cy.get(rankingUserVotesInputWrapper).contains('Minimum user votes');
    cy.get(rankingUserVotesInput).type('popularity.asc');
    cy.get(rankingRuntimesInputWrapper).contains('Runtime');
    cy.get(rankingRuntimesInput).type('30');
    cy.get(gridWrapper).children().should('have.length.at.least', 20);
  });

  it('Should check if upon clicking one the film card it opens a film details page', () => {
    cy.get(navbarRankingButton).contains('Ranking').click();
    cy.get(gridWrapper).children().first().click();
    cy.url().should('include', '/position/');
  });
});
