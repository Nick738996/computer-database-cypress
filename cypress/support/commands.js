Cypress.Commands.add('getByData', selector => {
  return cy.get(`[data-qa=${selector}]`);
});
