/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/**
 * Navigates to storybook story URL based on component name and story name
 */
Cypress.Commands.add('visitStory', (componentName, storyName) => {
  const toKebabCase = str => str.replace(/(?<!^)([A-Z][a-z]|(?<=[a-z])[A-Z])/g, '-$1').toLowerCase();
  const kebabCaseStoryName = toKebabCase(storyName);
  cy.visit(`/iframe.html?id=components-${componentName.toLowerCase()}--${kebabCaseStoryName}`);
});
