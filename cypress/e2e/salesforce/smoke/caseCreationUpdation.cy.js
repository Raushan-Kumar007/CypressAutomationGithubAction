import CaseCreationPage from "../../../page-object/salesforce/case/caseCreationPage";
import HomePage from '../../../page-object/common/homePage';
import CommonUtilities from '../../../page-object/common/commonUtilities';

describe('Salesforce Smoke Test - Case Creation and Updation', () => {
  const homePage = new HomePage();
  const caseCreationPage = new CaseCreationPage();
  const commonUtilities = new CommonUtilities();

  let status, origin,priority,caseType,reason,email,phone,webName,companyName;
  before(() => {
    const randomStr = commonUtilities.genericRandomText(6);
      status = 'Working';
      origin = 'Web';
      priority = 'High';
      caseType = 'Electrical';
      reason = 'Equipment Complexity';
      email = commonUtilities.getRandomEmail();
      phone = commonUtilities.getRandomPhoneNumber();
      webName = `Web Case ${randomStr}`;
      companyName = `Company ${randomStr}`;
  });

  it('Create a new Case', () => {
    cy.loginToSalesforceJWT('developerorg1999@gmail.com');
    homePage.clickOnSelectedApp('Cases');
    caseCreationPage.createCase(status, origin, priority, caseType, reason, email, phone);
  });
});
