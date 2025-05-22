import OpportunityCreationPage from '../../../page-object/salesforce/opportunity/opportunityCreationPage';
import CommonUtilities from '../../../page-object/common/commonUtilities';
import HomePage from '../../../page-object/common/homePage';
describe('Salesforce Smoke Test - Opportunity Creation and Updation', () => {
  const homePage = new HomePage();
  const opportunityCreationPage = new OpportunityCreationPage();
  const commonUtilities = new CommonUtilities();

  let opportunityName, opportunityType, opportunityStage,opprtunityLeadSource,closeDate;

  before(() => {
    opportunityName = 'Test Opportunity ' + commonUtilities.genericRandomText(5, 8);
    closeDate = commonUtilities.getYesterdayDate();
    opportunityStage = 'Prospecting';
    opprtunityLeadSource = 'Web';
    opportunityType = 'New Customer';
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
});