const { AoiClient, LoadCommands, Util } = require("aoi.js");


const bot = new AoiClient({
   token: process.env.TOKEN, // token (env is likely used for securing bot token, do not remove)
   prefix: ["a!", "<@$clientID>"],  //Discord Bot Prefix
   intents: ["MessageContent", "Guilds", "GuildMessages", "DirectMessages"], // the discord.js intents
   aoiLogs: false, // disables default aoi.js message for consoles
   events: ["onMessage", "onInteractionCreate"], // events
   aoiWarning: true, // disables aoi.js update warnings
   guildOnly: false, // don't force the commands to be only executed in guild
   database: { // use aoi.db as the database for settings
     type: "aoi.db",
     db: require("aoi.db"),
     tables: ["main"],
     path: "./database/",
     extraOptions: {
         dbType: "KeyValue"
     },
 }
 })



// load variables
bot.variables(require("./handlers/variables.js")); // for bot variables (important, do not delete)


const loader = new LoadCommands(bot);
 loader.load(bot.cmd,"./commands/")

 /*
 bot.cmd is object of Collections where the command data will be stored
 "./commands/" is the path of folder where all the commands' code will be present
 */

 // Enable aoi.parser for ephemeral messages including handling Errors.
const { parse, createAst } = require( 'aoi.parser' );
const {
     parseExtraOptions
} = require( 'aoi.parser/components' );

Util.parsers.ErrorHandler = parse;

Util.parsers.OptionsParser = ( data ) => {
     return createAst( data ).children.map( parseExtraOptions );
}
