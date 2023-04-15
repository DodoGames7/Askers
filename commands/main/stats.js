module.exports = {
  name: "stats",
  executeAt: "guild",
  aliases: "botinfo",
  info: {
    description: "view some information regarding askers itself"
  },
  code: `$title[Askers's stats]
  $addField[Uptime;$uptime[humanize]]
  $addField[Askers version;1.0.3-beta2]
  $addField[Bot Lang;[Aoi.js](https://www.npmjs.com/package/aoi.js);true]
  $addField[Amount of ram;$round[$ram]%;true]
  $addField[Amount of CPU;$cpu;true]
  $addField[node.js;$nodeVersion;true]
  $addField[Servers;$guildCount;true]
  $addField[Users;$numberSeparator[$allMembersCount];true]
  
  `
}