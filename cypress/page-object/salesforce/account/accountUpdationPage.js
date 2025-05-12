import AssertText from "../../../utils/assert";
import Element from "../../../utils/element";
import AccountCreationPage from "./accountCreationPage";
const assert = new AssertText();
const elementExist = new Element();
const accountCreation = new AccountCreationPage();
class AccountUpdationPage {
    detailPageEdit = "//span[text()='Edit']";
    detailPageshowMoreActions = "(//div//ul[@role='presentation']//lightning-button-menu/button[@type='button'])[1]";
    verifyEditPage = "//div/h2[contains(text(),'Edit')]";
    editFieldOfAccount(accountName, phone, accountNumber, rating, ownership) {
        elementExist.click(this.detailPageshowMoreActions, true, true);
        elementExist.click(this.detailPageEdit, true, true);
        assert.contains(this.verifyEditPage, 'Edit', true);
        if (accountName) {
            elementExist.type(accountCreation.accountNameBox, `${accountName} Dummy Inc`, true, true, false, true);
        }
    
        if (phone) {
            elementExist.type(accountCreation.phoneField, `${phone}123`, true, true, false, true);
        }
    
        if (accountNumber) {
            elementExist.type(accountCreation.accountNumber, `${accountNumber}XYZ`, true, true, false, true);
        }
    
        if (rating) {
            cy.selectSalesforcePicklist(
                accountCreation.accountRating,
                ['Hot', 'Warm', 'Cold'],
                rating || 'Warm'
            );
        }
    
        if (ownership) {
            cy.selectSalesforcePicklist(
                accountCreation.accountOwnerShip,
                ['Public', 'Private', 'Subsidiary', 'Other'],
                ownership || 'Private'
            );
        }
        elementExist.click(accountCreation.saveButton, true, true);
    }    
}
export default AccountUpdationPage;

