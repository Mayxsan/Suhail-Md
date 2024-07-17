const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "https://www.instagram.com/reel/C9ZQCO_IUGc/?igsh=MTV1Y2V1Ymx5aGgxNw==" ;
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_19_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzIsXG4gICAgICAgIDgzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTczLFxuICAgICAgICA4MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDU1LFxuICAgICAgICAxODksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDUzLFxuICAgICAgICA3OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzNCxcbiAgICAgICAgNDksXG4gICAgICAgIDY2LFxuICAgICAgICA0LFxuICAgICAgICA3LFxuICAgICAgICAyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MixcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICA2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDg4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA0NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDc0LFxuICAgICAgICAyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxODksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjksXG4gICAgICAgIDExMyxcbiAgICAgICAgODcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDksXG4gICAgICAgIDg2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDMxLFxuICAgICAgICA4MixcbiAgICAgICAgMTIwLFxuICAgICAgICA2NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIllyeUJCU1lDRXBBaWc4MWRaa0hrb2lZdWk3dlFsd2lEMjZMWGZ5QmhNS009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjZ0UUlkaUNQUkhHYV84dGZmRzdnN2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTAyOTM0OWYtYzE4NS00NDlkLWE1NWEtODg1NmFmNTU5MmM4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc2LFxuICAgICAgMjQ2LFxuICAgICAgOTcsXG4gICAgICAxMTEsXG4gICAgICAxNDQsXG4gICAgICA0MSxcbiAgICAgIDIwNyxcbiAgICAgIDIyMCxcbiAgICAgIDQ1LFxuICAgICAgMjE0LFxuICAgICAgODMsXG4gICAgICA4MixcbiAgICAgIDIyLFxuICAgICAgMjE0LFxuICAgICAgMTM5LFxuICAgICAgMTM5LFxuICAgICAgMTMyLFxuICAgICAgMTIsXG4gICAgICAyMDUsXG4gICAgICAyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjcsXG4gICAgICA3NSxcbiAgICAgIDEwMixcbiAgICAgIDkxLFxuICAgICAgMTQxLFxuICAgICAgMTgzLFxuICAgICAgMTUyLFxuICAgICAgMTUxLFxuICAgICAgMTg3LFxuICAgICAgMjMsXG4gICAgICAyMSxcbiAgICAgIDk5LFxuICAgICAgNixcbiAgICAgIDI0NyxcbiAgICAgIDc5LFxuICAgICAgMjU0LFxuICAgICAgMTUwLFxuICAgICAgODYsXG4gICAgICA2NyxcbiAgICAgIDEwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFUlhTQUNXUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxNjU5NTgyNToyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1BWVhTQU4gVFZcIixcbiAgICBcImxpZFwiOiBcIjE4ODAxNjg0MDcwMDE0MDoyN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMbTV4SWtFRUpXYzNMUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkV3czdnQ0Z1aVFrT3U4d0RGNGdEdUpITUVMSWV1NHhvZ2NGNktsbjh1SHM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWlYzWWhiN1dYc25VNVh1aWRVcVVqRTg2S1VsM0dETkFwWHpHSVlrTHM0VWJlTHpRcjFnMVVLSzgzcVpuUThYSHpNYmtFalhHcERBVDVQZTRLZkVRQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTU9UQ0prVkk5RWQ0aWVvU1dYTGdhdTZ5WEJKZWc5TnBZTnV3WDBQc3FJZFNYZnBVNmNZVFh6eXRlM0VyVkZJSDNmUWMra0xvT0t4SGNtU1NOMDhTaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxNjU5NTgyNToyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMTc1NTc2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
