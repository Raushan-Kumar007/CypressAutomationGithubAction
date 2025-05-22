import AssertText from "../../../utils/assert";
import Element from "../../../utils/element";
const assert = new AssertText();
const elementExist = new Element();
class ContactCreationPage {
    contactNewButton = "//li/a[@title='New']";
    conFirstName = "//input[@name='firstName']";
    conLastName = "//input[@name='lastName']";
    conPhone = "//input[@name='Phone']";
    conBirthdate = "//input[@name='Birthdate']";
    conSaveButton = "//button[@name='SaveEdit']";
    verifyContactHeader = "//div/h1[text() = 'Contacts']";
    conLeadSource = "//div/button[@aria-label='Lead Source']";
    createContact(firstName, lastName, phone, birthdate) {
        assert.contains(this.verifyContactHeader, 'Contacts', true);
        elementExist.click(this.contactNewButton, true, true);
        elementExist.type(this.conFirstName, firstName, true, false, false, true);
        elementExist.type(this.conLastName, lastName, true, false, false, true);
        elementExist.type(this.conPhone, phone, true, false, false, true);
        elementExist.type(this.conBirthdate,birthdate, true, false, false, true);
        elementExist.click(this.conSaveButton, true, true);
    }
}
export default ContactCreationPage;