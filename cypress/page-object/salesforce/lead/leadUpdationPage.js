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
    convertLeadPath = "(//a[@role='option' and @title='Converted'])[1]";
    clickOnConvertStatus = "//button/span[text()='Select Converted Status']";
    verifyLeadConversionTitle = "//div/h1[text()='Convert Lead ']";
    convertLeadButton = "//button[text()='Convert']";
    verifyLeadConversionHeading = "//h2[text()='Your lead has been converted']";
    navigateToLeadButton = "//button[text()='Go to Leads']";
    verifyRecentList = "//h1//span[text()='Recently Viewed']";
    verifyEditPage = "//div/h2[contains(text(),'Edit')]";
    editFieldOfLead(company, leadStatus, phone, email, leadSource, rating, industry) {
        elementExist.click(this.detailPageshowMoreActions, true, true);
        elementExist.click(this.detailPageEdit, true, true);
        assert.contains(this.verifyEditPage, 'Edit', true);
    
        if (company) {
            elementExist.type(leadCreation.leadCompany, `${company} Pvt Ltd`, true, true, false, true);
        }
    
        if (phone) {
            elementExist.type(leadCreation.leadPhone, `${phone}789`, true, true, false, true);
        }
        if (email) {
            const dummyEmail = `${email.toLowerCase().replace(/[^a-z0-9]/g, '')}@demo.com`;
            elementExist.type(leadCreation.leadEmail, dummyEmail, true, true, false, true);
        }        
        if (leadStatus) {
            cy.selectSalesforcePicklist(
                leadCreation.leadStatusField,
                ['Open - Not Contacted', 'Working - Contacted', 'Closed - Converted', 'Closed - Not Converted'],
                leadStatus || 'Working - Contacted'
            );
        }
    
        if (leadSource) {
            cy.selectSalesforcePicklist(
                leadCreation.leadSourceField,
                ['Web', 'Phone Inquiry', 'Partner Referral', 'Purchased List', 'Other'],
                leadSource || 'Web'
            );
        }
    
        if (rating) {
            cy.selectSalesforcePicklist(
                leadCreation.leadRating,
                ['Hot', 'Warm', 'Cold'],
                rating || 'Hot'
            );
        }
    
        if (industry) {
            cy.selectSalesforcePicklist(
                leadCreation.leadIndustry,
                ['Agriculture', 'Apparel', 'Banking', 'Biotechnology', 'Chemicals'],
                industry || 'Banking'
            );
        }
    
        elementExist.click(leadCreation.saveButton, true, true);
    }    
    
    leadConvertPageWithOpp(leadName){
        cy.navigateToSalesforceRecord('Lead', 'Name', leadName);
        elementExist.click(this.convertLeadPath, true, true);
        elementExist.click(this.clickOnConvertStatus, true, true);
        assert.contains(this.verifyLeadConversionTitle, 'Convert Lead', true);
        elementExist.click(this.convertLeadButton, true, true);
        assert.have(this.verifyLeadConversionHeading, 'Your lead has been converted', true,10000);
        elementExist.click(this.navigateToLeadButton, true, true);
        assert.have(this.verifyRecentList, 'Recently Viewed', true);
    }
}
export default LeadUpdationPage; 