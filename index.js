const aoijs = require('aoi.js')


const bot = new aoijs.AoiClient({
   token: process.env.TOKEN, // token (env is likely used for securing bot token, do not remove)
   prefix: ["a!", "<@$clientID>"],  //Discord Bot Prefix
   intents: ["MessageContent", "Guilds", "GuildMessages"], // the discord.js intents
   aoiLogs: false, // get rid of aoi.js ready logs
   events: ["onMessage", "onInteractionCreate"], // events
   options: {
     reverse: true // bottom to top again
   }
 })



// handlers
bot.variables(require("./handlers/variables.js")); // for bot variables (important, do not delete)


const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./commands/")

 /*
 bot.cmd is object of Collections where the command data will be stored
 "./commands/" is the path of folder where all the commands' code will be present
 */

bot.start()
