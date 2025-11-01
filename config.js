const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
 YASIYA-MD~tMglVI6Y#GCPhL4OEyhI2Is4ddHgd2LuFzfty2b83JPpTHEO9YcM: process.env.SESSION_ID || ''
};
