import HomePage from '../../../page-object/common/homePage';
import LeadUpdationPage from '../../../page-object/salesforce/lead/leadUpdationPage';
import CommonUtilities from '../../../page-object/common/commonUtilities';
before('Login to Salesforce', () => {
    cy.loginToSalesforceJWT(Cypress.env('SF_USERNAME'));
  });
describe('Salesforce Smoke Test - Lead Updation', () => {
    const homePage = new HomePage();
    const leadUpdationPage = new LeadUpdationPage();
    const commonUtilities = new CommonUtilities();
  
    let firstName, lastName, company, leadStatus, salutation,phone,email,leadSource,rating,industry;
  
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
    it('Navigate to Lead and create new Lead', () => {
        homePage.clickOnSelectedApp('Leads');
        leadUpdationPage.updateLeadPage('Bunny');
        leadUpdationPage.editFieldOfLead(company,leadStatus,phone,email,leadSource,rating,industry);
    });
});