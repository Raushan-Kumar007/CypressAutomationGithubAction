let sfAccessToken = null;
let sfInstanceUrl = null;
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
        sfAccessToken = accessToken;
        sfInstanceUrl = instanceUrl;
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
    cy.xpath(xpathToPicklistButton)
      .click({ force: true });
    cy.xpath('//div//lightning-base-combobox-item')
      .should('have.length.at.least', expectedValues.length)
      .then(items => {
        const actualValues = [...items].map(el => el.innerText.trim());
        expect(actualValues).to.include.members(expectedValues);
      });
    cy.xpath('//div//lightning-base-combobox-item')
      .contains(valueToSelect)
      .click({ force: true });
  });
  Cypress.Commands.add('navigateToSalesforceRecord', (objectName, field, value) => {
    const accessToken = sfAccessToken;
    const instanceUrl = sfInstanceUrl;
  
    if (!accessToken || !instanceUrl) {
      throw new Error('Salesforce access token or instance URL not set. Run loginToSalesforceJWT first.');
    }
  
    const soql = `SELECT Id FROM ${objectName} WHERE ${field} = '${value}' LIMIT 1`;
    const queryUrl = `${instanceUrl}/services/data/v58.0/query?q=${encodeURIComponent(soql)}`;
    const domain = new URL(instanceUrl).hostname;
  
    return cy.request({
      method: 'GET',
      url: queryUrl,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((queryResponse) => {
      if (queryResponse.body.records.length === 0) {
        throw new Error(`No ${objectName} found where ${field} = '${value}'`);
      }
  
      const recordId = queryResponse.body.records[0].Id;
      const recordUrl = `${instanceUrl}/lightning/r/${objectName}/${recordId}/view`;
  
      cy.setCookie('sid', accessToken, {
        domain: domain,
        secure: true,
        httpOnly: false,
      });
      cy.visit(recordUrl);
    });
  });
