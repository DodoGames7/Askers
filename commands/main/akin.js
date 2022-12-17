module.exports = {
  name: "start",
  aliases:["akin"],
  code: `$djsEval[
  const akinator = require("discord.js-akinator");
const language = "$getServerVar[akin_language]";
const childMode = true;
const gameType = "$getServerVar[akin_gametype]";
const useButtons = $getServerVar[akin_buttons];
const embedColor = "#1F1E33";
akinator(message, {
            language: language, 
            childMode: childMode, 
            gameType: gameType, 
            useButtons: useButtons, 
            embedColor: embedColor 
        });
        ]
        $onlyBotPerms[managemessages;the following permissions are required in order to start game:
          \`MANAGE_MESSAGES\`
          please make sure i have these permissions otherwise i won't be able to work properly
          ]
          `
}