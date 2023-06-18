const { AoiClient, LoadCommands, Util } = require('aoi.js')


const bot = new AoiClient({
   token: process.env.TOKEN || "", // Token (env is recommended for securing the bot token)
   prefix: ["a!", "<@$clientID>"],  //Discord Bot Prefix
   intents: ["MessageContent", "Guilds", "GuildMessages"], // The discord.js intents
   aoiLogs: false, // Get rid of aoi.js ready logs
   events: ["onMessage", "onInteractionCreate"], // Events
   database: {
     type: "aoi.db",
     db: require("aoi.db"),
     tables: ["main"],
     path: "./database/",
     extraOptions: {
         dbType: "KeyValue",
     },
 }
 })



// handlers
bot.variables(require("./handlers/variables.js")); // for bot variables (important, do not delete)


const loader = new LoadCommands(bot)
 loader.load(bot.cmd,"./commands/")

 /*
 bot.cmd is object of Collections where the command data will be stored
 "./commands/" is the path of folder where all the commands' code will be present
 */

 // parser support
const { parse, createAst} = require( 'aoi.parser' );
const {
     parseExtraOptions
} = require( 'aoi.parser/components' );

Util.parsers.ErrorHandler = parse;

Util.parsers.OptionsParser = ( data ) => {
     return createAst( data ).children.map( parseExtraOptions );
}
