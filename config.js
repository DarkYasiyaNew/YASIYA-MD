const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~tAwjXBRB#3K5TvtlKt632-lrD5L2qcJg55urZQ2am4DQ5cfQ5tzk'
};
