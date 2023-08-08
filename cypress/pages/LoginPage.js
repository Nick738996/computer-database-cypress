export class Login {
  constructor() {
    this.signupFormLabel = '.signup-form';
    this.signupForm = '[action="/signup"]';
    this.signupFormButton = '[data-qa="signup-button"]';
    this.loginFormLabel = '.login-form';
    this.loginForm = '[action="/login"]';
    this.loginFormButton = '[data-qa="login-button"]';
  }

  getSignupForm() {
    return cy.get(this.signupForm);
  }
  getSignupFormLabel() {
    return cy.get(this.signupFormLabel);
  }
  getSignupFormButton() {
    return cy.get(this.signupFormButton);
  }
  getLoginForm() {
    return cy.get(this.loginForm);
  }
  getLoginFormLabel() {
    return cy.get(this.loginFormLabel);
  }
  getLoginFormButton() {
    return cy.get(this.loginFormButton);
  }

  fillSignupForm(user) {
    return this.getSignupForm()
      .find('input:visible')
      .each(($el, index) => {
        cy.wrap($el).type(user[index]);
      });
  }
  fillLoginForm(user) {
    return this.getLoginForm()
      .find('input:visible')
      .each(($el, index) => {
        cy.wrap($el).type(user[index]);
      });
  }
}
export const loginPage = new Login();
