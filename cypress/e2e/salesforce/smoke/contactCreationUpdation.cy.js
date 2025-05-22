import HomePage from '../../../page-object/common/homePage';
import ContactCreationPage from '../../../page-object/salesforce/contact/contactCreationPage';
import ContactUpdationPage from '../../../page-object/salesforce/contact/contactUpdationPage';
import CommonUtilities from '../../../page-object/common/commonUtilities';
describe('Salesforce Smoke Test - Contact Creation and Updation', () => {
    const homePage = new HomePage();
    const contactCreationPage = new ContactCreationPage();
    const contactUpdationPage = new ContactUpdationPage();
    const commonUtilities = new CommonUtilities();
    let firstName, lastName, phone,birthdate,leadSource;
    before(() => {
        firstName = 'Test Contact';
        lastName = commonUtilities.genericRandomText(5, 8);
        phone = commonUtilities.getRandomPhoneNumber();
        birthdate = commonUtilities.getYesterdayDate();
        leadSource = 'Web';
    });
    it('Create a new Contact', () => {
        cy.loginToSalesforceJWT('frank123@gmail.com');
        homePage.clickOnSelectedApp('Contacts');
        contactCreationPage.createContact(firstName, lastName, phone,birthdate);
    });
    it('Update the Contact fields', () => {
        cy.loginToSalesforceJWT('developerorg1999@gmail.com');
        cy.navigateToSalesforceRecord('Contact', 'Name', `${firstName} ${lastName}`);
        contactUpdationPage.editFieldOfContact(firstName, lastName, phone, birthdate,leadSource);

    });
});