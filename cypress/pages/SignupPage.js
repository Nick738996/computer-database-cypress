export class SignupPage {
  constructor() {
    this.formTitle = '.title.text-center';
    this.mrSelector = '[for="id_gender1"]';
    this.checkbox = '.checkbox';
    this.signupFormInputs = '.required.required.form-group';
    this.countryDropdown = '[data-qa="country"]';
    this.createAccountButton = '[data-qa="create-account"]';
    this.accountCreatedContainer = '[data-qa="account-created"]';
    this.continueButton = '[data-qa="continue-button"]';
  }
  getFormTitle() {
    return cy.get(this.formTitle);
  }
  getMrSelector() {
    return cy.get(this.mrSelector);
  }
  getCreateAccountButton() {
    return cy.get(this.createAccountButton);
  }

  getAccountCreatedContainer() {
    return cy.get(this.accountCreatedContainer);
  }
  getContinueButton() {
    return cy.get(this.continueButton);
  }
  fillBirthDateDropdown(birthDate) {
    return cy
      .get('.row')
      .eq(2)
      .find('select')
      .each(($el, index) => {
        cy.wrap($el).select(birthDate[index]);
      });
  }
  selectCheckboxes() {
    return cy.get(this.checkbox).each($el => {
      cy.wrap($el).find('input').click();
    });
  }
  fillSignupForm(user) {
    cy.get(this.signupFormInputs).each(($el, index) => {
      if (index === 0 || index === 1) {
        return;
      }
      if (index === 7) {
        cy.get(this.countryDropdown).select(user[7]);
      } else {
        cy.wrap($el).find('input').type(user[index]);
      }
    });
  }
}
export const signupPage = new SignupPage();
