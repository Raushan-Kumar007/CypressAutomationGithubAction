import AssertText from "../../../utils/assert";
import Element from "../../../utils/element";
const assert = new AssertText();
const elementExist = new Element();
class OpportunityCreationPage{
    newOppButton = "//a/div[@title='New']"
    oppName = "//input[@name='Name']";
    oppType = "//div/button[@aria-label='Type']";
    oppLeadSource = "//div/button[@aria-label='Lead Source']";
    oppCloseDate = "//input[@name='CloseDate']";
    oppStage = "//div/button[@aria-label='Stage']";
    oppAmmount = "//input[@name='Amount']";
    saveButton = "//button[@name='SaveEdit']";
    verifyOppHeader = "//div/h1[text() = 'Opportunities']";
    createOpportunity(oppName,oppType,oppLeadSource,oppCloseDate,oppStage){
        assert.contains(this.verifyOppHeader, 'Opportunities', true);
        elementExist.click(this.newOppButton, true, true);
        elementExist.type(this.oppName,oppName,true,false,false,true);
        cy.selectSalesforcePicklist(
            this.oppType,
            ['Existing Customer - Upgrade','Existing Customer - Replacement','Existing Customer - Downgrade','New Customer'],
            oppType
        );
        cy.selectSalesforcePicklist(
            this.oppLeadSource,
            ['Web','Phone Inquiry','Partner Referral','Purchased List','Other'],
            oppLeadSource
        );
        elementExist.type(this.oppCloseDate,oppCloseDate,true,false,false,true);
        cy.selectSalesforcePicklist(
            this.oppStage,
            ['Prospecting','Qualification','Needs Analysis','Value Proposition'],
            oppStage
        );
        elementExist.click(this.saveButton,true,true);
    }
}
export default OpportunityCreationPage;