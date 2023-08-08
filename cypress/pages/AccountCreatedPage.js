export class AccountCreatedPage {
  constructor() {
    this.accountCreatedContainer = '[data-qa="account-created"]';
    this.continueButton = '[data-qa="continue-button"]';
  }
  getAccountCreatedContainer() {
    return cy.get(this.accountCreatedContainer);
  }
  getContinueButton() {
    return cy.get(this.continueButton);
  }

  validateAccountMessage(message) {
    return this.getAccountCreatedContainer()
      .find('b')
      .invoke('text')
      .should('contain', message);
  }
}
export const accountCreatedPage = new AccountCreatedPage();
