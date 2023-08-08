import { AccountCreatedPage } from '../pages/AccountCreatedPage.js';
export class AccountDeletedPage extends AccountCreatedPage {
  constructor() {
    super();
    this.accountDeletedContainer = '[data-qa="account-deleted"]';
  }
  getAccountDeletedContainer() {
    return cy.get(this.accountDeletedContainer);
  }

  validateAccountMessage(message) {
    return this.getAccountDeletedContainer()
      .find('b')
      .invoke('text')
      .should('contain', message);
  }
}
export const accountDeletedPage = new AccountDeletedPage();
