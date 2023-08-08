import { HomePage } from '../pages/HomePage';
export class ContactUs extends HomePage {
  constructor() {
    super();
    this.contactForm = '.contact-form';
    this.getInTouchTitle = '.title text-center';
    this.formInputs = '.form-control';
    this.submitButton = '[data-qa="submit-button"]';
    this.statusMessage = '.alert-success';
  }
  getContactForm() {
    return cy.get(this.contactForm);
  }
  getFormInputs() {
    return cy.get(this.formInputs);
  }
  getSubmitButton() {
    return cy.get(this.submitButton);
  }
  getStatusMessage() {
    return cy.get(this.statusMessage);
  }

  fillContactUsForm(data, fileName) {
    return this.getFormInputs().each(($el, index) => {
      if (index === 4) {
        cy.wrap($el).selectFile({
          contents: Cypress.Buffer.from('file contents'),
          fileName: fileName,
          lastModified: Date.now(),
        });
      } else {
        cy.wrap($el).type(data[index]);
      }
    });
  }
}
export const contactUs = new ContactUs();
