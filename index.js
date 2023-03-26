const { AoiClient, LoadCommands } = require("aoi.js");


const bot = new AoiClient({
   token: process.env.TOKEN, // token (env is likely used for securing bot token, do not remove)
   prefix: ["a!", "<@$clientID>"],  //Discord Bot Prefix
   intents: ["MessageContent", "Guilds", "GuildMessages", "DirectMessages"], // the discord.js intents
   aoiLogs: false,
   events: ["onMessage", "onInteractionCreate"], // events
   aoiWarning: true,
   guildOnly: false
 })



// load variables
bot.variables(require("./handlers/variables.js")); // for bot variables (important, do not delete)


const loader = new LoadCommands(bot);
 loader.load(bot.cmd,"./commands/")

 /*
 bot.cmd is object of Collections where the command data will be stored
 "./commands/" is the path of folder where all the commands' code will be present
 */

 // enable aoi.parser for ephemeral messages
const { Util } = require( 'aoi.js' );
const { parse, createAst } = require( 'aoi.parser' );
const {
     parseExtraOptions
} = require( 'aoi.parser/components' );

Util.parsers.ErrorHandler = parse;

Util.parsers.OptionsParser = ( data ) => {
     return createAst( data ).children.map( parseExtraOptions );
}
