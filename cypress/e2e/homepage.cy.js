import {
  loginPasswordInput,
  loginSubmit,
  loginUsernameInput,
  navbarHomeButton,
} from '../fixtures/selectors';

describe('Homepage display', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get(loginUsernameInput).type('kira');
    cy.get(loginPasswordInput).type('kira');
    cy.get(loginSubmit).click();
  });

  it('Should check if Currently watching section displays correctly', () => {
    cy.get(navbarHomeButton).contains('Home').click();
    cy.get('.sc-bZSSAB > :nth-child(1)').contains('Currently watching').and('be.visible');
  });

  it('Should check if Trending today section displays correctly', () => {
    cy.get(navbarHomeButton).contains('Home').click();
    cy.get('.sc-bZSSAB > :nth-child(2)').contains('Trending today').and('be.visible');
  });

  it('Should check if Top of the top section displays correctly', () => {
    cy.get(navbarHomeButton).contains('Home').click();
    cy.get('.sc-bZSSAB > :nth-child(3)').contains('Top of the top').and('be.visible');
  });
});
