module.exports = {
  name: "stats",
  code: `$title[Askers's stats]
  $addField[Askers version;1.0.0-beta]
  $addField[Library Language;Aoi.js;yes]
  $addField[Amount of ram;$ram;yes]
  $addField[Amount of CPU;$cpu;yes]
  $addField[node.js;$nodeVersion;yes]
  $addField[Servers;$serverCount;yes]
  $addField[Users;$allMembersCount;yes]
  
  `
}