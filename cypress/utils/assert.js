/**
 * Class Assert has method to validate text content
 * Each method accept xpath and text content to ensure that text is present or not
 */

class AssertText {
    /**
     * This function will do assertion should(have.text)
     * @param {string} ele  ele should be an XPATH
     * @param {string} text  text should be an string used to check whether exists or not
     * @param {boolean} visible Default is true. If false it will check element is exists or not using should(exist)
     */
    have(ele, text, visible = true) {
      if (visible) {
        cy.xpath(ele).should("be.visible");
      } else {
        cy.xpath(ele).should("exist");
      }
      cy.xpath(ele).should("have.text", text);
    }
    /**
     * This function will do assertion should(contains, text)
     * @param {string} ele  ele should be an XPATH
     * @param {string} text  text should be an string used to check whether exists or not
     * @param {boolean} visible Default is true. If false it will check element is exists or not using should(exist)
     */
    contains(ele, text, visible = true) {
      if (visible) {
        cy.xpath(ele).should("be.visible");
      } else {
        cy.xpath(ele).should("exist");
      }
      cy.xpath(ele).invoke("text").should("contain", text);
    }
    /**
     * This function will do assertion with invoke(text).should(contain,text)
     * @param {string} ele  ele should be an XPATH
     * @param {string} text  text should be an string used to check whether exists or not
     * @param {boolean} visible Default is true. If false it will check element is exists or not using should(exist)
     */
    invoke(ele, text, visible = true) {
      if (visible) {
        cy.xpath(ele).should("be.visible");
      } else {
        cy.xpath(ele).should("exist");
      }
      cy.xpath(ele).invoke("text").should("contain", text);
    }
  
    /**
     * This function will do assertion with invoke(text).should(contain,text)
     * @param {string} ele  ele should be an XPATH
     * @param {boolean} visible Default is true. If false it will check element is exists or not using should(exist)
     */
    shouldNotBeNull(ele, visible = true) {
      if (visible) {
        cy.xpath(ele).should("be.visible");
      } else {
        cy.xpath(ele).should("exist");
      }
      cy.xpath(ele).invoke("text").should("not.be.null");
    }
  }
  
  export default AssertText;
  