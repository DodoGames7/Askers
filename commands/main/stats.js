module.exports = {
  name: "stats",
  aliases: "botinfo",
  code: `$title[Askers's stats]
  $addField[Uptime;$uptime[humanize]]
  $addField[Askers version;1.0.1-alpha]
  $addField[Library Language;Aoi.js;yes]
  $addField[Amount of ram;$ram;yes]
  $addField[Amount of CPU;$cpu;yes]
  $addField[node.js;$nodeVersion;yes]
  $addField[Servers;$serverCount;yes]
  $addField[Users;$allMembersCount;yes]
  
  `
}