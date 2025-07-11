const { defineConfig } = require("cypress");
const { generateJwtToken } = require('./cypress/utils/jwtHelpers')
module.exports = defineConfig({
  e2e: {
    experimentalSessionAndOrigin: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    setupNodeEvents(on, config) {
      on('task', {
        generateJWT({ username, clientId }) {
          const token = generateJwtToken({ username, clientId });
          return token;
        }
      });
      return config;
    }
  },
  env: {
    SF_CLIENT_ID: process.env.SF_CLIENT_ID,
    SF_USERNAME: process.env.SF_USERNAME
  }
});
