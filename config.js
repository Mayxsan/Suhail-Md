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
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
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
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_07_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjcsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDMzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA1OSxcbiAgICAgICAgODEsXG4gICAgICAgIDMzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMyxcbiAgICAgICAgMixcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI3LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDczLFxuICAgICAgICA3NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzIsXG4gICAgICAgIDU3LFxuICAgICAgICA3NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzksXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICA4NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NixcbiAgICAgICAgNDgsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM0LFxuICAgICAgICA1NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTExLFxuICAgICAgICA5OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDU0LFxuICAgICAgICA0NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlJjeTc2U1lBWGpCelA0dVJNZnd1ZGdEcWJGdFdtQ2ZXK1MxQWlEakRvQ2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk4xcWIyT1FaUVhPeW13ZXpVWEFjQ2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNThhNGMwNTAtY2QwMy00N2Y2LWEzNmUtNzE1M2Y1NGQzODIwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYyLFxuICAgICAgMTUyLFxuICAgICAgMTAyLFxuICAgICAgMzgsXG4gICAgICAyNDQsXG4gICAgICAxODEsXG4gICAgICAxMzcsXG4gICAgICAyOSxcbiAgICAgIDIzNyxcbiAgICAgIDExOSxcbiAgICAgIDEyNixcbiAgICAgIDE0MSxcbiAgICAgIDI0NSxcbiAgICAgIDEyMSxcbiAgICAgIDExMyxcbiAgICAgIDIzMSxcbiAgICAgIDI0NCxcbiAgICAgIDY5LFxuICAgICAgMjI1LFxuICAgICAgMTI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY2LFxuICAgICAgMTY4LFxuICAgICAgMjU0LFxuICAgICAgMzIsXG4gICAgICAyNixcbiAgICAgIDI5LFxuICAgICAgMjA3LFxuICAgICAgMTIwLFxuICAgICAgMjQ5LFxuICAgICAgMjIzLFxuICAgICAgMTAwLFxuICAgICAgMjEyLFxuICAgICAgNzAsXG4gICAgICAyNDcsXG4gICAgICAzMyxcbiAgICAgIDE3NCxcbiAgICAgIDEzLFxuICAgICAgMTcwLFxuICAgICAgMjI0LFxuICAgICAgMTk3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlM3UkM4QzFDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDE2NTk1ODI1OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTUFZWFNBTiBUVlwiLFxuICAgIFwibGlkXCI6IFwiMTg4MDE2ODQwNzAwMTQwOjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01TTGxOY0ZFTHY1b2JRR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiR3JFRktoOUtkVit3L3h6amFFeDc5VW5MOS9PVWlHNHh1V3BjazlpWXhYOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBdlIvZjJkbzZMOTBGQVRKQW90WDc5Y3RCUHdGNUNKL1F3QmEwS09rSVNkb3NIZWV3WmRlZVgwVDZVVUJxRnpPWGtXRE1ySnpBT21CWlpyanc3bXpDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoK0szQ3RUUmtQSVh2OFR1Zk1TTGE4akd3aXY2dWdUbStxd1N6MGRkaDlqL0taTHRkbGxxZTlGUzlTd1pHTnI1QUM1VDFrY3BQS2diQkQyaUFHMWlndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDE2NTk1ODI1OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjIwODYzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRGx6XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEbHouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJaeEltd1VwY2N2RytMbmJ6WWV1RlpkUk1jTThPODIyeGYzY0RDNEhaMDU4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MjQ5NTg2NjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDA0NjUwNTY4NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "_",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "MAYX-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "MAYXSAN",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
