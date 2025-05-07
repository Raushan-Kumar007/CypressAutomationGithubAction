import HomePage from '../../../page-object/common/homePage';
import LeadUpdationPage from '../../../page-object/salesforce/lead/leadUpdationPage';
import CommonUtilities from '../../../page-object/common/commonUtilities';

describe('Salesforce Smoke Test - Lead Updation', () => {
  const homePage = new HomePage();
  const leadUpdationPage = new LeadUpdationPage();
  const commonUtilities = new CommonUtilities();

  const leadName = 'Test Lead gd06a'; 

  let company, leadStatus, salutation, phone, email, leadSource, rating, industry;

  before(() => {
    cy.loginToSalesforceJWT(Cypress.env('SF_USERNAME'));
  });

  beforeEach(() => {
    // Reset test data for each case
    company = commonUtilities.genericRandomText(5, 8);
    leadStatus = 'Working - Contacted';
    salutation = 'Dr.';
    phone = commonUtilities.getRandomPhoneNumber();
    email = commonUtilities.getRandomEmail();
    leadSource = 'Web';
    rating = 'Hot';
    industry = 'Agriculture';
  });

  it('Navigate to Created Lead and update the Lead Field', () => {
    homePage.clickOnSelectedApp('Leads');
    leadUpdationPage.updateLeadPage(leadName);
    leadUpdationPage.editFieldOfLead(company, leadStatus, phone, email, leadSource, rating, industry);
  });

  it('Navigate to Created Lead and convert the Lead', () => {
    homePage.clickOnSelectedApp('Leads');
    leadUpdationPage.leadConvertPageWithOpp(leadName);
  });
});
