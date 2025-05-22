import AssertText from "../../../utils/assert";
import Element from "../../../utils/element";
import OpportunityCreationPage from "./opportunityCreationPage";
const assert = new AssertText();
const elementExist = new Element();
const opportunityCreation = new OpportunityCreationPage();
class OpportunityUpdationPage {
    detailPageEdit = "//span[text()='Edit']";
    detailPageshowMoreActions = "(//div//ul[@role='presentation']//lightning-button-menu/button[@type='button'])[1]";
    verifyEditPage = "//div/h2[contains(text(),'Edit')]";
    verifyOpportunityHeader = "//records-entity-label[@slot='entityLabel']";
    editFieldOfOpportunity(opportunityName, closeDate, stage, amount) {
        cy.xpath(this.verifyOpportunityHeader).should('be.visible');
        elementExist.click(this.detailPageshowMoreActions, true, true);
        elementExist.click(this.detailPageEdit, true, true);
        assert.contains(this.verifyEditPage, 'Edit', true);
        if (opportunityName) {
            elementExist.type(opportunityCreation.oppName, `${opportunityName} Dummy`, true, true, false, true);
        }

        if (closeDate) {
            cy.xpath(opportunityCreation.oppCloseDate).should('be.visible').clear();
            elementExist.type(opportunityCreation.oppCloseDate, closeDate, true, true, false, true);
        }

        if (stage) {
            cy.selectSalesforcePicklist(
                opportunityCreation.oppStage,
                ['Prospecting', 'Qualification', 'Needs Analysis', 'Value Proposition', 'Id. Decision Makers'],
                stage || 'Qualification'
            );
        }

        if (amount) {
            elementExist.type(opportunityCreation.oppAmmount, `${amount}000`, true, true, false, true);
        }
        elementExist.click(opportunityCreation.saveButton, true, true);
    }

}
export default OpportunityUpdationPage;