module.exports = {
  name: "stats",
  aliases: "botinfo",
  code: `$title[Askers's stats]
  $addField[Uptime;$uptime[humanize]]
  $addField[Askers version;1.0.2-extra]
  $addField[Library Language;Aoi.js;true]
  $addField[Amount of ram;$ram;true]
  $addField[Amount of CPU;$cpu;true]
  $addField[node.js;$nodeVersion;true]
  $addField[Servers;$guildCount;true]
  $addField[Users;$allMembersCount;true]
  
  `
}
