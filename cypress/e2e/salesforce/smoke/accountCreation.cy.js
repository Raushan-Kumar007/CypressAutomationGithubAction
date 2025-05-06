import HomePage from '../../../page-object/common/homePage';
import AccountCreationPage from '../../../page-object/salesforce/account/accountCreationPage';
import CommonUtilities from '../../../page-object/common/commonUtilities';

before('Login to Salesforce', () => {
  cy.loginToSalesforceJWT(Cypress.env('SF_USERNAME'));
});

describe('Salesforce Smoke Test - Account Creation', () => {
  const homePage = new HomePage();
  const accountPage = new AccountCreationPage();
  const commonUtilities = new CommonUtilities();

  let accountName, accountNumber, phone, rating, ownership;

  beforeEach(() => {
    accountName = 'Test Account ' + commonUtilities.genericRandomText(5, 8);
    accountNumber = commonUtilities.genericRandomText(6, 9);
    phone = commonUtilities.getRandomPhoneNumber();
    rating = 'Hot';
    ownership = 'Public';
  });

  it('should create a new Account with valid details', () => {
    homePage.clickOnSelectedApp('Accounts');
    accountPage.createNewAccount(accountName, phone, rating, ownership, accountNumber);
  });
});