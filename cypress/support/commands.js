// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('loginToSalesforceJWT', (username) => {
    const clientId = Cypress.env('SF_CLIENT_ID');
    cy.task('generateJWT', { username, clientId }).then((jwtToken) => {
      cy.request({
        method: 'POST',
        url: 'https://login.salesforce.com/services/oauth2/token',
        form: true,
        body: {
          grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
          assertion: jwtToken
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
  
        const accessToken = response.body.access_token;
        const instanceUrl = response.body.instance_url;
  
        cy.setCookie('sid', accessToken, {
          domain: '.salesforce.com',
          secure: true,
          httpOnly: false,
        });
  
        cy.visit(`${instanceUrl}/lightning/page/home`);
      });
    });
  });
  Cypress.Commands.add('selectSalesforcePicklist', (xpathToPicklistButton, expectedValues, valueToSelect) => {
    // Click the picklist button
    cy.xpath(xpathToPicklistButton)
      .click({ force: true });
  
    // Verify all options are present
    cy.xpath('//div//lightning-base-combobox-item')
      .should('have.length.at.least', expectedValues.length)
      .then(items => {
        const actualValues = [...items].map(el => el.innerText.trim());
        expect(actualValues).to.include.members(expectedValues);
      });
  
    // Click the value you want to select
    cy.xpath('//div//lightning-base-combobox-item')
      .contains(valueToSelect)
      .click({ force: true });
  });