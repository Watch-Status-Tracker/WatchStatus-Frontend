// import { loginPasswordInput, loginSubmit, loginUsernameInput } from '../fixtures/selectors';
import * as S from '../fixtures/selectors';
describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');

    cy.get(S.loginUsernameInput).type('kira');
    cy.get(S.loginPasswordInput).type('kira');
    cy.get(S.loginSubmit).click();

    cy.wait(3000);

    // cy.get(S.navbarHomeButton);
    // cy.get(S.navbarListsButton);
    // cy.get(S.navbarBrowseButton);
    // cy.get(S.navbarRankingButton);
    // cy.get(S.navbarSettingsButton);
    // cy.get(S.navbarLogoutButton);

    //ranking example
    // cy.get(S.navbarRankingButton).click();
    // cy.get(S.rankingGenresInput).click();
    // cy.get(S.genreDataTest('Action')).click();
    // cy.get(S.rankingLanguageInput).type('en');
    // cy.get(S.rankingUserVotesInput).type('500');
    // cy.get(S.rankingRuntimesInput).type('90');
  });
});
