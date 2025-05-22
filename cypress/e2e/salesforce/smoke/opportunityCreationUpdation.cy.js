import OpportunityCreationPage from '../../../page-object/salesforce/opportunity/opportunityCreationPage';
import OpportunityUpdationPage from '../../../page-object/salesforce/opportunity/opportunityUpdationPage';  
import CommonUtilities from '../../../page-object/common/commonUtilities';
import HomePage from '../../../page-object/common/homePage';
describe('Salesforce Smoke Test - Opportunity Creation and Updation', () => {
  const homePage = new HomePage();
  const opportunityCreationPage = new OpportunityCreationPage();
  const opportunityUpdationPage = new OpportunityUpdationPage();
  const commonUtilities = new CommonUtilities();

  let opportunityName, opportunityType, opportunityStage,opprtunityLeadSource,closeDate,amount;

  before(() => {
    opportunityName = 'Test Opportunity ' + commonUtilities.genericRandomText(5, 8);
    closeDate = commonUtilities.getYesterdayDate();
    opportunityStage = 'Prospecting';
    opprtunityLeadSource = 'Web';
    opportunityType = 'New Customer';
    amount = commonUtilities.getRandomNumberInRange(1000, 10000);
  });

  it('Create a new Opportunity', () => {
    cy.loginToSalesforceJWT('frank123@gmail.com');
    homePage.clickOnSelectedApp('Opportunities');
    opportunityCreationPage.createOpportunity(
      opportunityName,
      opportunityType,
      opprtunityLeadSource,
      closeDate,
      opportunityStage
      );
    });
    it('Update the Opportunity fields', () => {
      cy.loginToSalesforceJWT('developerorg1999@gmail.com');
      cy.navigateToSalesforceRecord('Opportunity', 'Name', opportunityName);
        opportunityUpdationPage.editFieldOfOpportunity(
            opportunityName,
            closeDate,
            opportunityStage,
            amount
        );
    });
});