import AssertText from '../../../utils/assert';
import Element from '../../../utils/element';

const assert = new AssertText();
const elementExist = new Element();

class CaseCreationPage {
  caseNewButton = "//li/a[@title='New']";
  caseStatus = "//div/button[@aria-label='Status']";
  casePriority = "//div/button[@aria-label='Priority']";
  caseOrigin = "//div/button[@aria-label='Case Origin']";
  caseType = "//div/button[@aria-label='Type']";
  caseReason = "//div/button[@aria-label='Case Reason']";
  caseWebEmail = "//div/input[@name='SuppliedEmail']";
  caseWebPhone = "//div/input[@name='SuppliedPhone']";
  caseWebName = "//div/input[@name='SuppliedName']";
  caseWebComany = "//div/input[@name='SuppliedCompany']";
  caseProduct = "//div/button[@aria-label='Product']";
  casePotentialLibilaty = "//div/button[@aria-label='Potential Liability']";
  caseSLAViolations = "//div/button[@aria-label='SLA Violation']";
  caseEngineeringReqNum = "//div/input[@name='EngineeringReqNumber__c']";
  caseSaveButton = "//button[@name='SaveEdit']";

  createCase(status,origin,priority,type,reason,email,phone) {
    elementExist.click(this.caseNewButton, true, true);
    cy.selectSalesforcePicklist(this.caseStatus, ['New', 'Working', 'Escalated'], status);
    cy.selectSalesforcePicklist(this.casePriority, ['High', 'Medium', 'Low'], priority);
    cy.selectSalesforcePicklist(this.caseOrigin, ['Phone', 'Email', 'Web'], origin);
    cy.selectSalesforcePicklist(this.caseType, ['Mechanical', 'Electrical', 'Electronic','Structural','Other'], type);
    cy.selectSalesforcePicklist(this.caseReason, ['Installation', 'Equipment Complexity', 'Performance','Breakdown','Equipment Design','Feedback','Other'], reason);
    elementExist.type(this.caseWebEmail, email, true, false, false, true);
    elementExist.type(this.caseWebPhone, phone, true, false, false, true);
    elementExist.click(this.caseSaveButton, true, true);
  }
} 

export default CaseCreationPage;
