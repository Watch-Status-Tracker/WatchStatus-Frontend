import {
  loginPasswordInput,
  loginSubmit,
  loginUsernameInput,
  navbarSettingsButton,
  settingsAdditionallDataSubmit,
  settingsConfirmPasswordInput,
  settingsConfirmPasswordInputWrapper,
  settingsEmailInput,
  settingsEmailInputWrapper,
  settingsFavouriteGenreInput,
  settingsFavouriteGenreInputWrapper,
  settingsNewPasswordInput,
  settingsNewPasswordInputWrapper,
  settingsPasswordSubmit,
  settingsPersonalDataSubmit,
  settingsTitleInput,
  settingsTitleInputWrapper,
  settingsUsernameInput,
  settingsUsernameInputWrapper,
  testerUser,
  toastSelector,
} from '../fixtures/selectors';

const { username, email, password, title, favouriteGenre } = testerUser;

describe('Settings section display', () => {
  beforeEach(() => {
    cy.visit('/settings');
    cy.get(loginUsernameInput).type(username);
    cy.get(loginPasswordInput).type(password);
    cy.get(loginSubmit).click();
  });

  it('Should check if Settings section displays correctly', () => {
    cy.get(navbarSettingsButton).contains('Settings').and('be.visible').click();
    cy.get(settingsUsernameInputWrapper).contains('Username').and('be.visible');
    cy.get(settingsEmailInputWrapper).contains('Email').and('be.visible');
    cy.get(settingsPersonalDataSubmit).contains('Update personal data').and('be.visible');

    cy.get(settingsTitleInputWrapper).contains('Title').and('be.visible');
    cy.get(settingsFavouriteGenreInputWrapper).contains('Favourite genre').and('be.visible');
    cy.get(settingsAdditionallDataSubmit).contains('Update additional data').and('be.visible');

    cy.get(settingsNewPasswordInputWrapper).contains('New password').and('be.visible');
    cy.get(settingsConfirmPasswordInputWrapper).contains('Confirm password').and('be.visible');
    cy.get(settingsPasswordSubmit).contains('Update password');
  });

  it('Should check if user can change personal data', () => {
    cy.get(navbarSettingsButton).contains('Settings').and('be.visible').click();
    cy.get(settingsUsernameInput).type(username);
    cy.get(settingsEmailInput).type(email);
    cy.get(settingsPersonalDataSubmit).contains('Update personal data').and('be.visible').click();

    cy.get(toastSelector).contains('Personal data updated successfully').and('be.visible');
  });

  it('Should check if user can change additional data', () => {
    cy.get(navbarSettingsButton).contains('Settings').and('be.visible').click();
    cy.get(settingsTitleInput).type(title);
    cy.get(settingsFavouriteGenreInput).type(favouriteGenre);
    cy.get(settingsAdditionallDataSubmit)
      .contains('Update additional data')
      .and('be.visible')
      .click();

    cy.get(toastSelector).contains('Additional data updated successfully').and('be.visible');
  });

  it('Should check if user can change password data', () => {
    cy.get(navbarSettingsButton).contains('Settings').and('be.visible').click();
    cy.get(settingsNewPasswordInput).type(password);
    cy.get(settingsConfirmPasswordInput).type(password);
    cy.get(settingsPasswordSubmit).contains('Update password').and('be.visible').click();

    cy.get(toastSelector).contains('Password updated successfully').and('be.visible');
  });
});
