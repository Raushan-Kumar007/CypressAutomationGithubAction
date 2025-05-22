import AssertText from "../../../utils/assert";
import Element from "../../../utils/element";
import ContactCreationPage from "./contactCreationPage";
const assert = new AssertText();
const elementExist = new Element();
const contactCreation = new ContactCreationPage();
class ContactUpdationPage{
    detailPageEdit = "//span[text()='Edit']";
    detailPageshowMoreActions = "(//div//ul[@role='presentation']//lightning-button-menu/button[@type='button'])[1]";
    verifyEditPage = "//div/h2[contains(text(),'Edit')]";
    verifyContactHeader = "//records-entity-label[@slot='entityLabel']";
    editFieldOfContact(firstName, lastName, phone, birthdate,leadSource) {
        cy.xpath(this.verifyContactHeader).should('be.visible');
        elementExist.click(this.detailPageshowMoreActions, true, true);
        elementExist.click(this.detailPageEdit, true, true);
        assert.contains(this.verifyEditPage, 'Edit', true);
        if (firstName) {
            elementExist.type(contactCreation.conFirstName, `${firstName} Dummy`, true, true, false, true);
        }
    
        if (phone) {
            elementExist.type(contactCreation.conPhone, `${phone}123`, true, true, false, true);
        }
    
        if (lastName) {
            elementExist.type(contactCreation.conLastName, `${lastName} Dummy`, true, true, false, true);
        }
    
        if (birthdate) {
            cy.xpath(contactCreation.conBirthdate).should('be.visible').clear();
            elementExist.type(contactCreation.conBirthdate,birthdate, true, false, false, true);
        }
        cy.selectSalesforcePicklist(contactCreation.conLeadSource, ['Web', 'Phone Inquiry', 'Partner Referral', 'Purchased List', 'Other'], leadSource);
        elementExist.click(contactCreation.conSaveButton, true, true);
    }
}
export default ContactUpdationPage;