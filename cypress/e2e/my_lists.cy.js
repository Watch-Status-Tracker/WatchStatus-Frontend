import {
  cardContainer,
  loginPasswordInput,
  loginSubmit,
  loginUsernameInput,
  myListInput,
  myListsCreateListButton,
  myListsWrapper,
  navbarListsButton,
  testerUser,
  toastSelector,
} from '../fixtures/selectors';

const { username, password } = testerUser;

describe('My lists section display', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get(loginUsernameInput).type(username);
    cy.get(loginPasswordInput).type(password);
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

  it.only('Should check if adding an item to the list works correctly', () => {
    cy.get(cardContainer).first().trigger('mouseover');
    cy.get(' [data-testid="card-container"] > [data-testid="card-overlay"] > :nth-child(2)')
      .first()
      .click();
    cy.get(toastSelector).contains('Position added to list!');
  });
});
