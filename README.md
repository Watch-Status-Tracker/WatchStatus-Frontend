# WatchStatus - Frontend

### Stack:

- Vite (v5)
- React (js) with SWC (18+)
- Styled components (v6)
- React router (v6)

## Installation

To install the project, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/Watch-Status-Tracker/WatchStatus-Frontend
   ```

2. Navigate into the project directory:

   ```sh
   cd watch-status-frontend
   ```

3. Install the dependencies:

   If you dont have `yarn`, install it with:

   ```
   npm i -g yarn
   ```

   And then install the dependencies

   ```sh
   yarn install
   ```

## Available Scripts

In the project directory, you can run:

- `yarn dev`: Starts the development server on port 3000
- `yarn build`: Builds the app for production.
- `yarn lint`: Lints the codebase with eslint.
- `yarn format`: Formats the codebase with prettier.
- `yarn test`: Runs the tests with vitest.
- `yarn test:ui`: Runs the tests with vitest in UI mode.
- `yarn prepare`: Prepares the Husky hooks.

## Project Structure

The project has the following structure:

- `public/`: Public files that will be served by Vite.
- `src/`: The source code of the application.
  - `assets/`: Static files like images, icons etc.
  - `components/`: Reusable components.
  - `config/`: Configuration files.
  - `examples/`: Example components for testing.
  - `helpers/`: Helper functions.
  - `pages/`: Page components.
  - `routing/`: Router configuration.
  - `styles/`: Global styles.
  - `theme/`: Theme configuration.
  - `utils/`: Utility functions.
- `vite.config.js`: Vite configuration file.

## Component Structure

Each component in the `components/` directory should have its own folder, named after the component.
The folder should contain the component file and its associated files, like styles and tests. Here's
an example structure for a component:

- `components/`
  - `Component/`
    - `Component.jsx`: The component file.
    - `Component.test.jsx`: The test file for the component.
    - `Component.styles.js`: The styles file for the component.

This structure helps to keep related files together and makes it easier to find and work with
components.

Components should be self-contained and reusable. They should receive data through props and emit
events to communicate with their parent components. They should not directly modify data outside
their own scope.

Remember to follow best practices for React components, like keeping them small and focused, using
hooks for state and side effects, and writing tests to ensure they work correctly.

## Git Flow

We use the standard Git Flow in this project. The `master` branch contains the latest stable version
of the project. The develop branch is used for development. Feature branches are created from
develop and merged back into it.

### Branch Naming

We follow a specific convention for branch naming to keep things organized and to make it easy to
understand the purpose of each branch at a glance.

Branch names should be in the format `category/name`, where:

- `category` is one of the following:
  - `feat`: A new feature
  - `fix`: A bug fix
  - `ref`: A code refactor
  - `chore`: Routine tasks like updates and minor tweaks
  - `test`: Adding or updating tests
  - `exp`: Experimental changes that are not yet decided to be included in the project
- `name` is a short description of the branch's purpose, written in kebab-case (lowercase with
  hyphens between words).

For example, a branch for adding a new login feature might be named `feat/login`, and a branch for
fixing a bug in the user profile might be named `fix/user-profile-bug`.

### Commit Naming

Just like our branches, we also follow a convention for commit messages. This helps to provide a
clear, concise history of changes.

Commit messages should be in the format `category: brief description`, where:

- `category` is one of the following:
  - `add`: A new feature of addition
  - `fix`: A bug fix
  - `ref`: A code refactor
  - `chore`: Routine tasks like updates and minor tweaks
- `brief description` is a short description of what the commit does.

For example, a commit for adding a new login feature might be named `add: login functionality`, and
a commit for fixing a bug in the user profile might be named
`fix: bug with user profile background`.

Remember to keep your commits small and focused. Each commit should represent a single logical
change. This makes it easier to understand the changes and to find and fix bugs if necessary.

### Pull Requests

Pull requests are a vital part of our development process. They allow us to review code and ensure
quality before it's merged into the main codebase.

When creating a pull request, please follow these guidelines:

- `Branch x to y`: Make sure your code is on a branch that's up to date with the `master` or
  `develop` or some other branch (whichever one you're merging into).
- `PR name`: Name pull request after the branch name. If the branch was named for example
  `feat/logo-states`, the PR should be named `feat/logo-states or feat/logo states` as well.
- `Description`: Provide a detailed description of the changes. Include the purpose of the change,
  the approach you took, any issues or bugs that it resolves, and anything else that reviewers
  should know.

Once you've created your pull request, wait for reviews. Address any comments or suggestions that
reviewers have. Once reviews are positive and any issues have been addressed, make sure that your PR
is synced with the branch you are merging into to avoid conflicts. Then the pull request can be
merged.

```js
ALWAYS MERGE USING SQUASH METHOD
```

Remember, the goal of a pull request is to improve the project, not to criticize. Be respectful and
constructive in your reviews and responses.
