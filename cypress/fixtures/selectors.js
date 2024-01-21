/* Login page */

export const loginUsernameInput = '[data-test="login_input"]';
export const loginPasswordInput = '[data-test="login_password"]';
export const loginSubmit = '[data-test="login_submit"]';
export const loginRedirectRegister = '[data-test="login_redirect_register"]';

/* Register page */

export const registerUsernameInput = '[data-test="register_username_input"]';
export const registerEmailInput = '[data-test="register_email"]';
export const registerPasswordInput = '[data-test="register_password"]';
export const registerSubmit = '[data-test="register_submit"]';
export const registerRedirectLogin = '[data-test="login_redirect_register"]';

/* Home page */

/* * Navbar * */

export const navbarHomeButton = '[data-testid="navbar_home_button"]';
export const navbarListsButton = '[data-testid="navbar_lists_button"]';
export const navbarBrowseButton = '[data-testid="navbar_browse_button"]';
export const navbarRankingButton = '[data-test="navbar_ranking_button"]';
export const navbarSettingsButton = '[data-test="navbar_settings_button"]';
export const navbarLogoutButton = '[data-testid="navbar_logout_button"]';

/* My lists page */

export const myListInput = '[data-test="my_lists_input"]';
export const myListsCreateListButton = '[data-test="my_lists_create_list_button"]';
export const myListsWrapper = '[data-test="my_lists_wrapper"]';

/* Browse page */
export const genreDataTest = (genre) => `[data-test-value="${genre}"]`;

export const browseGenresInputWrapper = '[data-test="browse_genres_input_wrapper"]';
export const browseGenresInput = '[data-test="browse_genres_input"]';
export const browseYearInputWrapper = '[data-test="browse_year_input_wrapper"]';
export const browseYearInput = '[data-test="browse_year_input"]';
export const browseLanguageInputWrapper = '[data-test="browse_language_input_wrapper"]';
export const browseLanguageInput = '[data-test="browse_language_input"]';
export const browseSortByInputWrapper = '[data-test="browse_sort_by_input_wrapper"]';
export const browseSortByInput = '[data-test="browse_sort_by_input"]';
export const browseRuntimesInputWrapper = '[data-test="browse_runtimes_input_wrapper"]';
export const browseRuntimesInput = '[data-test="browse_runtimes_input"]';

/* Ranking page */

export const rankingGenresInputWrapper = '[data-test="ranking_genres_input_wrapper"]';
export const rankingGenresInput = '[data-test="ranking_genres_input"]';
export const rankingYearInputWrapper = '[data-test="ranking_year_input_wrapper"]';
export const rankingYearInput = '[data-test="ranking_year_input"]';
export const rankingLanguageInputWrapper = '[data-test="ranking_language_input_wrapper"]';
export const rankingLanguageInput = '[data-test="ranking_language_input"]';
export const rankingUserVotesInputWrapper = '[data-test="ranking_user_votes_input_wrapper"]';
export const rankingUserVotesInput = '[data-test="ranking_user_votes_input"]';
export const rankingRuntimesInputWrapper = '[data-test="ranking_runtimes_input_wrapper"]';
export const rankingRuntimesInput = '[data-test="ranking_runtimes_input"]';

/* Settings page */

export const settingsUsernameInput = '[data-test="settings_username_input"]';
export const settingsEmailInput = '[data-test="settings_email_input"]';
export const settingsPersonalDataSubmit = '[data-test="settings_personal_data_submit"]';

export const settingsTitleInput = '[data-test="settings_title_input"]';
export const settingsFavouriteGenreInput = '[data-test="settings_favourite_genre_input"]';
export const settingsAdditionallDataSubmit = '[data-test="settings_additional_data_submit"]';

export const settingsNewPasswordInput = '[data-test="settings_new_password_input"]';
export const settingsConfirmPasswordInput = '[data-test="settings_confirm_new_password_input"]';
export const settingsPasswordSubmit = '[data-test="settings_password_submit"]';

/* Other */

export const toastSelector = '.toast_wrapper';

export const testerUser = {
  username: 'tester',
  email: 'tester@tester',
  password: 'tester',
};
