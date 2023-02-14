const aoijs = require('aoi.js')


const bot = new aoijs.AoiClient({
   token: process.env.TOKEN, // token (env is likely used for securing bot token, do not remove)
   prefix: ["a!", "<@$clientID>"],  //Discord Bot Prefix
   intents: ["MessageContent", "Guilds", "GuildMessages"], // the discord.js intents
   aoiLogs: false,
   events: ["onMessage", "onInteractionCreate"] // events
 })



// handlers
bot.variables(require("./handlers/variables.js")); // for bot variables (important, do not delete)


const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./commands/")

 /*
 bot.cmd is object of Collections where the command data will be stored
 "./commands/" is the path of folder where all the commands' code will be present
 */

 // parser support
const { Util } = require( 'aoi.js' );
const { parse, createAst} = require( 'aoi.parser' );
const {
     parseEmbed,
     parseExtraOptions
} = require( 'aoi.parser/components' );

Util.parsers.ErrorHandler = parse;

Util.parsers.EmbedParser = ( data ) => {
     return createAst( data ).children.map( parseEmbed );
}

Util.parsers.OptionsParser = ( data ) => {
     return createAst( data ).children.map( parseExtraOptions );
}
