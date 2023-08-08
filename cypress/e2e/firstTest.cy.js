import { homePage } from '../pages/HomePage.js';
import { loginPage } from '../pages/LoginPage.js';
import { signupPage } from '../pages/SignupPage.js';
import { accountCreatedPage } from '../pages/AccountCreatedPage.js';
import { accountDeletedPage } from '../pages/AccountDeletedPage.js';
import { contactUs } from '../pages/ContactUsPage.js';

describe('Test cases', function () {
  beforeEach(function () {
    cy.visit('/');
    cy.fixture('data.json').as('user');
  });
  it('Test Case 1,2 and 3: Register User and Login', function () {
    homePage.getSliderContainer().should('be.visible');
    homePage.getLoginButton().click();
    loginPage.getSignupFormLabel().should('contain', 'New User Signup!');
    loginPage.fillSignupForm(this.user.user1);
    loginPage.getSignupFormButton().click();
    signupPage
      .getFormTitle()
      .invoke('text')
      .should('contain', 'Enter Account Information');
    signupPage.getMrSelector().click();
    signupPage.fillBirthDateDropdown(this.user.date);
    signupPage.selectCheckboxes();
    signupPage.fillSignupForm(this.user.address);
    signupPage.getCreateAccountButton().click();
    accountCreatedPage.validateAccountMessage('Account Created');
    accountCreatedPage.getContinueButton().click();
    homePage.verifyLoggedUser(this.user.user1);
    homePage.getLogoutButton().click();
    homePage.getLoginButton().click();
    loginPage.getLoginFormLabel().should('contain', 'Login to your account');
    loginPage.fillLoginForm(this.user.user2);
    loginPage.getLoginFormButton().click();
    homePage.verifyLoggedUser(this.user.user1);
    homePage.getDeleteAccountButton().click();
    accountDeletedPage.validateAccountMessage('Account Deleted!');
    accountDeletedPage.getContinueButton().click();
  });

  it('Test Case 3: Login User with incorrect email and password', function () {
    homePage.getSliderContainer().should('be.visible');
    homePage.getLoginButton().click();
    loginPage.getLoginFormLabel().should('contain', 'Login to your account');
    loginPage.fillLoginForm(this.user.user2);
    loginPage.getLoginFormButton().click();
    loginPage
      .getLoginForm()
      .find('p')
      .should('contain', 'Your email or password is incorrect!');
  });

  it('Test Case 5: Register User with existing email', function () {
    homePage.getSliderContainer().should('be.visible');
    homePage.getLoginButton().click();
    loginPage.getSignupFormLabel().should('contain', 'New User Signup!');
    loginPage.fillSignupForm(this.user.user3);
    loginPage.getSignupFormButton().click();
    cy.contains('p', 'Email Address already exist!');
  });

  it('Test Case 6: Contact Us Form', function () {
    homePage.getSliderContainer().should('be.visible');
    homePage.getContactUsButton().click();
    contactUs
      .getContactForm()
      .find('h2')
      .invoke('text')
      .should('contain', 'Get In Touch');
    contactUs.fillContactUsForm(this.user.contact, 'example.txt');
    contactUs.getSubmitButton().click();
    contactUs
      .getStatusMessage()
      .should(
        'contain',
        'Success! Your details have been submitted successfully.'
      );
    contactUs.getHomeButton().eq('1').click();
    homePage.getSliderContainer().should('be.visible');
  });
});
