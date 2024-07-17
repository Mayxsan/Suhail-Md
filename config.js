const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://wa.me/message/SHUL2VJTYOORM1";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "|BOW TO MAYX OR BURN|" 


global.devs = "2349016595825" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349016595825";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_34_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTksXG4gICAgICAgIDUyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA5NixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxODgsXG4gICAgICAgIDgzLFxuICAgICAgICA4NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDUwLFxuICAgICAgICAxMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4MixcbiAgICAgICAgMjQxLFxuICAgICAgICA2NixcbiAgICAgICAgMjEwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NixcbiAgICAgICAgOTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTExLFxuICAgICAgICA0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk5LFxuICAgICAgICAyOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDksXG4gICAgICAgIDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDUsXG4gICAgICAgIDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDcxLFxuICAgICAgICA2NyxcbiAgICAgICAgODgsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1LFxuICAgICAgICA3MixcbiAgICAgICAgMTExLFxuICAgICAgICAzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDkxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDcyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDc0LFxuICAgICAgICA3NixcbiAgICAgICAgMzAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTExLFxuICAgICAgICA3NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA5NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkNianlkalVwN2JQanFzZnlVM3BpS2VVb3pUN251bVZ2anAxcHJhdXF3Y2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRmWlA1NXpyVFQyQU9NYjZmYmQzOXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzY3OTEyZmMtM2Q4Ni00MDAwLTljYmMtYTZmZGM4NTM0MjhkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyLFxuICAgICAgMTg3LFxuICAgICAgMTk1LFxuICAgICAgMjQ1LFxuICAgICAgMjQ0LFxuICAgICAgMTExLFxuICAgICAgMTE5LFxuICAgICAgNDgsXG4gICAgICAyOSxcbiAgICAgIDExMCxcbiAgICAgIDQ4LFxuICAgICAgMTksXG4gICAgICAzOCxcbiAgICAgIDQ4LFxuICAgICAgMjE5LFxuICAgICAgMzEsXG4gICAgICA3NSxcbiAgICAgIDYwLFxuICAgICAgMTc0LFxuICAgICAgMTE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNSxcbiAgICAgIDI1MCxcbiAgICAgIDEwOSxcbiAgICAgIDMxLFxuICAgICAgMTc3LFxuICAgICAgMTc3LFxuICAgICAgMjM1LFxuICAgICAgMTE2LFxuICAgICAgNTEsXG4gICAgICAyMjIsXG4gICAgICA1NixcbiAgICAgIDIwMSxcbiAgICAgIDk1LFxuICAgICAgOTYsXG4gICAgICAxMTAsXG4gICAgICAyNixcbiAgICAgIDE0MCxcbiAgICAgIDE2MixcbiAgICAgIDEyMixcbiAgICAgIDEzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4RlNGQThSTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxNjU5NTgyNToyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1BWVhTQU4gVFZcIixcbiAgICBcImxpZFwiOiBcIjE4ODAxNjg0MDcwMDE0MDoyOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPcVZvY2NFRU5uMDNyUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjZsTUs2cTI0eHBGV2R4MkR4bjlJSkZNc0YvVmJuc1grVzFXUklabXd5QnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVHI2eDcxSk5GNGtrSmgrbTNpZWIvMTh0L0w4aW95U1RLL29oTjFVOUc1VklZWGlEOWNIb29WVEFrSWY3aDdEQ3ZYZlFiT2lIL0hnYTgrUkZhWnFUQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQXlWUmJLbE4weFNpRE9WajlaRjV5M1V0NVprTnpRNVRHMFBQQ01Kb2lYSCtiaUV4MUNmS28vR0g2dTJsOXU1SW9WcUxLZm9IRXFRaDBTdG1UNnZkaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxNjU5NTgyNToyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyMTk2NzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJY05cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUljTi5qc29uIjogIntcImtleURhdGFcIjpcIjlBZjk2eXJuaGJRaTEzV3pJeUtRalQ0TVhldFU4VmQwMmtZb3owZmFrS009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIyMzE4MzA4MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMjE5MTI2MDk5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "_",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "|BOW TO MAYX OR BURN|" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "MAYXSAN TV💅🏾✨",
  packname: process.env.PACK_NAME || "MAYX MD",
  botname : process.env.BOT_NAME  || "MAYX-ᴍᴅ✨",
  ownername:process.env.OWNER_NAME|| "MAYXSAN TV💅🏾✨",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "MAYX"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
