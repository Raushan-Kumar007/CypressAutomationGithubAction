import AssertText from "../../../utils/assert";
import Element from "../../../utils/element";
const assert = new AssertText();
const elementExist = new Element();
class LeadCreationPage {
    newLeadButton = "//a/div[@title='New']";
    leadSalutation = "//div/button[@name='salutation']";
    leadFirstName = "//input[@placeholder='First Name']";
    leadLastName = "//input[@placeholder='Last Name']";
    leadCompany = "//div/input[@name='Company']";
    leadSourceField = "//div/button[@aria-label='Lead Source']";
    leadIndustry = "//div/button[@aria-label='Industry']";
    leadStatusField = "//div/button[@aria-label='Lead Status']";
    leadRating = "//div/button[@aria-label='Rating']";
    leadPhone = "//input[@name='Phone']";
    leadEmail = "//input[@name='Email']";
    saveButton = "//button[@name='SaveEdit']";
    createNewLead(salutation,firstName,lastName,company,leadStatus,phone,email,leadSource,rating,industry){
        elementExist.click(this.newLeadButton, true, true);
        cy.selectSalesforcePicklist(
            this.leadSalutation,
            ['Mr.', 'Ms.', 'Mrs.','Dr.','Prof.','Mx.'],
            salutation
        )
        elementExist.type(this.leadFirstName, firstName, true, false, false, true);
        elementExist.type(this.leadLastName, lastName, true, false, false, true);
        elementExist.type(this.leadCompany,company, true, false, false, true);
        elementExist.type(this.leadPhone,phone, true, false, false, true);
        elementExist.type(this.leadEmail,email, true, false, false, true);

        cy.selectSalesforcePicklist(
            this.leadStatusField,
            ['Open - Not Contacted','Working - Contacted','Closed - Converted','Closed - Not Converted'],
            leadStatus
        );
        cy.selectSalesforcePicklist(
            this.leadSourceField,
            ['Web','Phone Inquiry','Partner Referral','Purchased List','Other'],
            leadSource
        );
        cy.selectSalesforcePicklist(
            this.leadRating,
            ['Hot','Warm','Cold'],
            rating
        );
        cy.selectSalesforcePicklist(
            this.leadIndustry,
            ['Agriculture','Apparel','Banking','Biotechnology','Chemicals'],
            industry
        );
        elementExist.click(this.saveButton, true, true);
    }

}

export default LeadCreationPage;   