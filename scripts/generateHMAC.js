const crypto = require('crypto');

// Replace these with your actual values
const customerId = '7323599569198'; // Customer's ID
const customerEmail = 'nigel.david@founderandlightning.com'; // Customer's email
const apiPrivateKey = 'ebf680aeae9ca6638786e5b3abae78f193a6670b488bcd2fb8add12a89fe534b'; // Your API Private key

// Combine the Customer ID and Email into a single string
const customerData = `${customerId}${customerEmail}`;

// Create an HMAC (Hash-based Message Authentication Code) using the API Private Key
const hmac = crypto.createHmac('sha256', apiPrivateKey);
hmac.update(customerData);
const authToken = hmac.digest('hex');

console.log('Generated Auth Token:', authToken);