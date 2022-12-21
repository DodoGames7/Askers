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
        $cooldown[5s;just wait for about %time% before you can use this command again]`
}