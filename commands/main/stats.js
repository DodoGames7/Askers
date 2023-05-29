module.exports = {
  name: "stats",
  executeAt: "guild",
  aliases: "botinfo",
  info: {
    description: "View some information regarding askers itself"
  },
  code: `$title[Askers's stats]
  $addField[Uptime;$uptime[humanize];true]
  $addField[Askers version;1.0.3;true]
  $addField[Bot Lang;[Aoi.js](https://www.npmjs.com/package/aoi.js);true]
  $addField[Amount of ram;$round[$ram]MB;true]
  $addField[Amount of CPU;$cpu;true]
  $addField[Node.js;$nodeVersion;true]
  $addField[Servers;$guildCount;true]
  $addField[Users;$numberSeparator[$allMembersCount];true]
  
  `
}