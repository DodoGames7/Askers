module.exports = {
  name: "start",
  aliases:["akin", "akinator"],
  executeAt: "guild",
  info: {
    description: "literally just starts akinator game"
  },
  code: `$djsEval[
  const akinator = require("discord.js-akinator");
const language = "$getGuildVar[akin_language]";
const childMode = true;
const gameType = "$getGuildVar[akin_gametype]";
const useButtons = $getGuildVar[akin_buttons];
const embedColor = "$getGuildVar[akin_embedcolor]";
akinator(message, {
            language: language, 
            childMode: childMode, 
            gameType: gameType, 
            useButtons: useButtons, 
            embedColor: embedColor 
        });
        ]
        $cooldown[5s;just wait for about %time% before you can use this command again]
        $onlyClientPerms[managemessages;the following permissions are required in order to start game:
\`MANAGE_MESSAGES\`
please make sure i have these permissions otherwise i won't be able to work properly
]`
}