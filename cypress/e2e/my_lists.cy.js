import {
  loginPasswordInput,
  loginSubmit,
  loginUsernameInput,
  myListInput,
  myListsCreateListButton,
  myListsWrapper,
  navbarListsButton,
  toastSelector,
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
    cy.get(myListsWrapper).contains('My lists').and('be.visible');
  });

  it('Should check if creating new list works correctly', () => {
    cy.get(navbarListsButton).contains('My lists').click();
    cy.get(myListInput).type('Test list');
    cy.get(myListsCreateListButton).click();
    cy.get(myListsWrapper).contains('Test list');
  });

  it('Should check if adding an item to the list works correctly', () => {
    cy.get('[data-testid="card-container"]').first().trigger('mouseover');
    cy.get(
      ':nth-child(2) > .sc-jJEJze > .sc-cBNeRQ > :nth-child(1) > [data-testid="card-container"] > [data-testid="card-overlay"] > :nth-child(4)'
    )
      .first()
      .click();
    cy.get(toastSelector).contains('Position added to list!');
  });
});
