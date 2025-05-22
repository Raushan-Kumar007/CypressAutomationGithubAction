import HomePage from '../../../page-object/common/homePage';
import AccountCreationPage from '../../../page-object/salesforce/account/accountCreationPage';
import AccountUpdationPage from '../../../page-object/salesforce/account/accountUpdationPage';
import CommonUtilities from '../../../page-object/common/commonUtilities';
let homePage, accountPage, commonUtilities,accountUpdationPage;
let accountName, accountNumber, phone, rating, ownership;

describe('Salesforce Smoke Test - Account Creation', () => {
  before(() => {
    homePage = new HomePage();
    accountPage = new AccountCreationPage();
    commonUtilities = new CommonUtilities();
    accountUpdationPage = new AccountUpdationPage();
    accountName = 'Test Account ' + commonUtilities.genericRandomText(5, 8);
    accountNumber = commonUtilities.genericRandomText(6, 9);
    phone = commonUtilities.getRandomPhoneNumber();
    rating = 'Hot';
    ownership = 'Public';
    //cy.loginToSalesforceJWT(Cypress.env('SF_USERNAME'));
  });
  it('should create a new Account with valid details', () => {
    cy.loginToSalesforceJWT('frank123@gmail.com');
    homePage.clickOnSelectedApp('Accounts');
    accountPage.createNewAccount(accountName, phone, rating, ownership, accountNumber);
  });

  it('should navigate to the created Account record by Name', () => {
    cy.loginToSalesforceJWT('developerorg1999@gmail.com');
    cy.navigateToSalesforceRecord('Account', 'Name', accountName);
    accountUpdationPage.editFieldOfAccount(accountName, phone, accountNumber, rating, ownership);
  });
});