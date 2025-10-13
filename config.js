const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~gYRGEAKK#dsCPeI-Vllun2cIh-ure5mpeH454XABu7Pz3nE2BZJ8'
};
