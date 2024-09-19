# Cypress Playground

![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)

## Description

This project is set up to run and open Cypress for end-to-end testing.

## Scripts

The following scripts are available in the project:

-   `pnpm cypress:open`: Opens the Cypress Test Runner.
-   `pnpm cypress:run`: Runs Cypress tests.

## File structure

-   **node_modules/**: Directory for installed Node.js modules (ignored by version control).
-   **cypress/**: Contains all Cypress-related files and directories.
    -   **downloads/**: Directory for files downloaded during tests.
    -   **e2e/**: Directory for end-to-end test files.
        -   **test.cy.js**: Example end-to-end test file.
    -   **fixtures/**: Directory for test fixtures.
        -   **example.json**: Example fixture file.
    -   **support/**: Directory for support files.
        -   **commands.js**: Custom commands for Cypress.
        -   **e2e.js**: Support file for end-to-end tests.
-   **.editorconfig**: Configuration file for maintaining consistent coding styles.
-   **.gitignore**: Specifies files to be ignored by Git.
-   **.prettierrc**: Configuration file for Prettier code formatter.
-   **cypress.config.js**: Configuration file for Cypress.
-   **package.json**: Contains project metadata and dependencies.
-   **pnpm-lock.yaml**: Lockfile for pnpm to ensure consistent installs.
-   **README.md**: This README file.
