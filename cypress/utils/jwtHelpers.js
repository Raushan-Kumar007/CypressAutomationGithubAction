const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

/**
 * Generates a Salesforce-compatible JWT token.
 * @param {Object} options
 * @param {string} options.username - Salesforce username.
 * @param {string} options.clientId - Connected App client ID.
 * @returns {string} JWT token.
 */
function generateJwtToken({ username, clientId }) {
  const keyPath = path.resolve(__dirname, '../fixtures/server.key'); // Adjust path if needed
  const privateKey = fs.readFileSync(keyPath, 'utf8');
  const audience = 'https://login.salesforce.com';

  return jwt.sign(
    {
      iss: clientId,
      sub: username,
      aud: audience,
      exp: Math.floor(Date.now() / 1000) + 3 * 60, // Expires in 3 mins
    },
    privateKey,
    { algorithm: 'RS256' }
  );
}
module.exports = {
  generateJwtToken
};
