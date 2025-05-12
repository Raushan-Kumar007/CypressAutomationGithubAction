import AssertText from "../../../utils/assert";
import Element from "../../../utils/element";
const assert = new AssertText();
const elementExist = new Element();
class AccountCreationPage{
    accountsTab = "//a[@title='Accounts']";
    newAccountButton = "//li/a[@title='New']";
    accountNameBox = "//input[@name='Name']";
    accountNumber = "//div/input[@name='AccountNumber']";
    accountRating = "//div/button[@aria-label='Rating']";
    accountOwnerShip = "//div/button[@aria-label='Ownership']";
    saveButton = "//button[@name='SaveEdit']";
    verifyAccName = "//h1//slot[@name='primaryField']";
    errorMessage = "//div[contains(@class, 'slds-media__body')]//h2[contains(text(), 'We hit a snag.')]";
    closeErrorDialog = "//button[@title='Close error dialog']";
    closeNewAccountWindow = "//button[@title='Cancel and close']";
    phoneField = "//div/input[@name='Phone']";
    createNewAccount(accountName, phoneNumber, ratingValue,OwnershipValue) {
        elementExist.click(this.accountsTab, true, true);
        elementExist.click(this.newAccountButton, true, true);
        elementExist.type(this.accountNameBox, accountName, true, false, false, true);
        elementExist.type(this.accountNumber, accountName, true, false, false, true);
        elementExist.type(this.phoneField, phoneNumber, true, false, false, true);
        cy.selectSalesforcePicklist(
            this.accountRating,
            ['Hot', 'Warm', 'Cold'],
            ratingValue
        );
        cy.selectSalesforcePicklist(
            this.accountOwnerShip,
            ['Public', 'Private',
            'Subsidiary','Other'],
            OwnershipValue
        );
        elementExist.click(this.saveButton, true, true);
    }
}

export default AccountCreationPage;