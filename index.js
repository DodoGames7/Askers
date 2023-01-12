const aoijs = require('aoi.js')


const bot = new aoijs.AoiClient({
   token: process.env.TOKEN, // token (env is likely used for securing bot token, do not remove)
   prefix: ["a!", "<@$clientID>"],  //Discord Bot Prefix
   intents: ["MessageContent", "Guilds", "GuildMessages"], // the discord.js intents
   disableLogs: true
 })



// handlers
bot.variables(require("./handlers/variables.js")); // for bot variables (important, do not delete)
require('./handlers/callbacks')(bot) // for loading most callbacks used in bot 


const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./commands/")

 /*
 bot.cmd is object of Collections where the command data will be stored
 "./commands/" is the path of folder where all the commands' code will be present
 */
