import HomePage from '../../../page-object/common/homePage';
import LeadUpdationPage from '../../../page-object/salesforce/lead/leadUpdationPage';
import CommonUtilities from '../../../page-object/common/commonUtilities';
beforeEach('Login to Salesforce', () => {
    cy.loginToSalesforceJWT(Cypress.env('SF_USERNAME'));
  });
describe('Salesforce Smoke Test - Lead Updation', () => {
    const homePage = new HomePage();
    const leadUpdationPage = new LeadUpdationPage();
    const commonUtilities = new CommonUtilities();
  
    let company, leadStatus, salutation,phone,email,leadSource,rating,industry;
  
    beforeEach(() => {
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
        leadUpdationPage.updateLeadPage('su3 fuoz');
        leadUpdationPage.editFieldOfLead(company,leadStatus,phone,email,leadSource,rating,industry);
    });
    it('Navigate to Created Lead and convert the Lead', () => {
        homePage.clickOnSelectedApp('Leads');
        leadUpdationPage.leadConvertPageWithOpp('su3 fuoz');
    });
});