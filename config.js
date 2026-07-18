const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Nimasha2010/NIMIYA-MD/blob/main/images/WhatsApp%20Image%202026-07-15%20at%2014.27.07.jpeg?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 NIMIYA-MD Is Alive Now😍*",
BOT_OWNER: '94776121326',  // Replace with the owner's phone number



};
