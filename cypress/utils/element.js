class Element {
    /**
     * This function click the element based on XPATH
     * @param {string} element XPATH of element to click
     * @param {boolean} scroll Scroll an element into view if true.
     * @param {boolean} force Forces the action if true
     */
    click(element, scroll = false, force = false) {
      if (scroll) {
        cy.xpath(element).scrollIntoView();
      }
      cy.xpath(element).should("exist");
      if (force) {
        // eslint-disable-next-line cypress/no-force
        cy.xpath(element).click({ force: true });
      } else {
        cy.xpath(element).click();
      }
    }
  
    /**
     * This function enter the value into the input type text
     * @param {string} element XPATH of element to click
     * @param {string} data Test data, can be string or number or date
     * @param {boolean} scroll Scroll an element into view if true.
     * @param {boolean} clear Clear the value of input or textarea if true
     * @param {boolean} click Click a DOM element
     * @param {boolean} force Forces the action if true
     */
    type(
      element,
      data,
      scroll = true,
      clear = false,
      click = false,
      force = false,
    ) {
      if (scroll) {
        cy.xpath(element).scrollIntoView();
      }
      cy.xpath(element).should("exist");
      if (click) {
        cy.xpath(element).click();
      }
      if (clear) {
        cy.xpath(element).clear();
      }
      if (force) {
        // eslint-disable-next-line cypress/no-force
        cy.xpath(element).type(data, { force: true });
      } else {
        cy.xpath(element).type(data);
      }
    }
  
    /**
     * This function trigger the event based on specified event name
     * @param {string} eventName XPATH of element to click
     * @param {string} element Name of the event
     * @param {boolean} force Forces the action if true
     * @param {boolean} scroll Scroll an element into view if true.
     */
    trigger(eventName = "mouseover", element, force = false, scroll = false) {
      if (scroll) {
        cy.xpath(element).scrollIntoView();
      }
      cy.xpath(element).should("be.visible");
      if (force) {
        // eslint-disable-next-line cypress/no-force
        cy.xpath(element).trigger(eventName, {
          force: true,
        });
      } else {
        cy.xpath(element).trigger(eventName);
      }
    }
  
    /**
     * This function verifies element visibile or not
     * @param {string} element Name of the element
     */
    elementVisible(element) {
      cy.xpath(element).should("be.visible");
    }
  
    /**
     * This function verifies element exists or not
     * @param {string} element Name of the element
     */
    elementExist(element) {
      cy.xpath(element).should("exist");
    }
  
    /**
     * This function scrollTo given element
     * @param {string} element Name of the element
     */
    scrollToElement(element) {
      cy.xpath(element).scrollIntoView();
    }
  }
  
  export default Element;
  