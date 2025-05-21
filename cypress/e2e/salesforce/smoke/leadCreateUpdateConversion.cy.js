import HomePage from '../../../page-object/common/homePage';
import LeadCreationPage from '../../../page-object/salesforce/lead/leadCreationPage';
import LeadUpdationPage from '../../../page-object/salesforce/lead/leadUpdationPage';
import CommonUtilities from '../../../page-object/common/commonUtilities';

describe('Salesforce Smoke Test - Lead Creation, Update, and Conversion', () => {
  const homePage = new HomePage();
  const leadCreationPage = new LeadCreationPage();
  const leadUpdationPage = new LeadUpdationPage();
  const commonUtilities = new CommonUtilities();

  let firstName, lastName, company, leadStatus, salutation, phone, email, leadSource, rating, industry, leadName;

  before(() => {
    firstName = 'Test Lead';
    lastName = commonUtilities.genericRandomText(5, 8);
    company = commonUtilities.genericRandomText(5, 8);
    leadStatus = 'Working - Contacted';
    salutation = 'Dr.';
    phone = commonUtilities.getRandomPhoneNumber();
    email = commonUtilities.getRandomEmail();
    leadSource = 'Web';
    rating = 'Hot';
    industry = 'Agriculture';
    leadName = `${firstName} ${lastName}`;
    //cy.loginToSalesforceJWT(Cypress.env('SF_USERNAME'));
  });

  it('Create a new Lead', () => {
    cy.loginToSalesforceJWT('frank123@gmail.com');
    homePage.clickOnSelectedApp('Leads');
    leadCreationPage.createNewLead(
      salutation,
      firstName,
      lastName,
      company,
      leadStatus,
      phone,
      email,
      leadSource,
      rating,
      industry
    );
  });

  it('Update the Lead fields', () => {
   cy.loginToSalesforceJWT('developerorg1999@gmail.com');
   cy.navigateToSalesforceRecord('Lead', 'Name', leadName);
    leadUpdationPage.editFieldOfLead(company, leadStatus, phone, email, leadSource, rating, industry);
  });
  it('Convert the Lead', () => {
    cy.loginToSalesforceJWT('developerorg1999@gmail.com');
    leadUpdationPage.leadConvertPageWithOpp(leadName);
  });
});
