import HomePage from '../../../page-object/common/homePage';
import CommonUtilities from '../../../page-object/common/commonUtilities';
import LeadCreationPage from '../../../page-object/salesforce/lead/leadCreationPage'
before('Login to Salesforce', () => {
    cy.loginToSalesforceJWT(Cypress.env('SF_USERNAME'));
  });

  describe('Salesforce Smoke Test - Lead Creation', () => {
    const homePage = new HomePage();
    const leadPage = new LeadCreationPage();
    const commonUtilities = new CommonUtilities();
  
    let firstName, lastName, company, leadStatus, salutation,phone,email,leadSource,rating,industry;
  
    beforeEach(() => {
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
    });
  
    it('Navigate to Lead and create new Lead', () => {
      homePage.clickOnSelectedApp('Leads');
      leadPage.createNewLead(salutation,firstName,lastName,company,leadStatus,phone,email,leadSource,rating,industry);
    });
  });