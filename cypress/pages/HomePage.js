export class HomePage {
  constructor() {
    this.sliderContainer = '#slider';
    this.loginButton = '[href="/login"]';
    this.deleteAccountButton = '[href="/delete_account"]';
    this.logoutButton = '[href="/logout"]';
    this.contactUsButton = '[href="/contact_us"]';
    this.homeButton = '[href="/"]';
  }
  getSliderContainer() {
    return cy.get(this.sliderContainer);
  }
  getLoginButton() {
    return cy.get(this.loginButton);
  }
  getLogoutButton() {
    return cy.get(this.logoutButton);
  }
  getContactUsButton() {
    return cy.get(this.contactUsButton);
  }
  getHomeButton() {
    return cy.get(this.homeButton);
  }

  verifyLoggedUser(user) {
    return cy.contains(`Logged in as ${user[0]}`);
  }
  getDeleteAccountButton() {
    return cy.get(this.deleteAccountButton);
  }
}
export const homePage = new HomePage();
