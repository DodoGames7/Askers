module.exports = {
  name: "stats",
  executeAt: "both",
  aliases: "botinfo",
  $if: "old",
  info: {
    description: "View some information regarding askers itself"
  },
  code: `
  $if[$isDM[$channelID]==true]
  Command was triggered in dms. Showing bot information only instead.
  $title[Askers's stats]
  $addField[Uptime;$uptime[humanize];true]
  $addField[Askers version;1.0.4-alpha;true]
  $addField[Bot Lang;[Aoi.js](https://www.npmjs.com/package/aoi.js);true]
  $addField[Amount of ram;$round[$ram]MB;true]
  $addField[Amount of CPU;$cpu;true]
  $addField[Node.js;$nodeVersion;true]
  $else
  $title[Askers's stats]
  $addField[Uptime;$uptime[humanize]]
  $addField[Askers version;1.0.4-alpha]
  $addField[Bot Lang;[Aoi.js](https://www.npmjs.com/package/aoi.js);true]
  $addField[Amount of ram;$round[$ram]MB;true]
  $addField[Amount of CPU;$cpu;true]
  $addField[Node.js;$nodeVersion;true]
  $addField[Servers;$guildCount;true]
  $addField[Users;$numberSeparator[$allMembersCount];true]
  $endif

  
  `
}