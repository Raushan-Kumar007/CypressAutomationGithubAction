import AssertText from "../../../utils/assert";
import Element from "../../../utils/element";
import LeadCreationPage from "./leadCreationPage";
const assert = new AssertText();
const elementExist = new Element();
const leadCreation = new LeadCreationPage();
class LeadUpdationPage{
    leadListView = "//lightning-icon//span[text()='Select a List View: Leads']";
    selectListView = "//a//span[text()='All Open Leads']";
    searchBox = "//div//input[@aria-label='Search this list...']";
    verifyListViewType = "//h1//span[text()='All Open Leads']";
    verifyListItems = "//span[@aria-label='All Open Leads']";
    detailPageshowMoreActions = " (//div//ul[@role='presentation']//lightning-button-menu/button[@type='button'])[1]";
    detailPageEdit = "//span[text()='Edit']";
      updateLeadPage(leadName) {
        elementExist.click(this.leadListView, true, true);
        elementExist.click(this.selectListView, true, true);
        assert.have(this.verifyListViewType, 'All Open Leads', true);
        elementExist.click(this.searchBox, true, true);
        elementExist.type(this.searchBox, leadName+"{Enter}",false, true, true, true);
        const leadSelector = `//th//a[@title='${leadName}']`;
        assert.have(leadSelector, leadName, true);
        assert.contains(this.verifyListItems, '1 item', true);
        elementExist.click(leadSelector, true, true);
        elementExist.click(this.detailPageshowMoreActions, true, true);
        elementExist.click(this.detailPageEdit, true, true);
    }
    editFieldOfLead(company,leadStatus,phone,email,leadSource,rating,industry){
        elementExist.type(leadCreation.leadCompany,company, true, false, false, true);
        elementExist.type(leadCreation.leadPhone,phone, true, false, false, true);
        elementExist.type(leadCreation.leadEmail,email, true, false, false, true);
        cy.selectSalesforcePicklist(
            leadCreation.leadStatusField,
            ['Open - Not Contacted','Working - Contacted','Closed - Converted','Closed - Not Converted'],
            leadStatus
        );
        cy.selectSalesforcePicklist(
            leadCreation.leadSourceField,
            ['Web','Phone Inquiry','Partner Referral','Purchased List','Other'],
            leadSource
        );
        cy.selectSalesforcePicklist(
            leadCreation.leadRating,
            ['Hot','Warm','Cold'],
            rating
        );
        cy.selectSalesforcePicklist(
            leadCreation.leadIndustry,
            ['Agriculture','Apparel','Banking','Biotechnology','Chemicals'],
            industry
        ); 
        elementExist.click(leadCreation.saveButton, true, true);
    }
}
export default LeadUpdationPage; 