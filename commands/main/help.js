module.exports = {
  name: "help",
  executeAt: "guild",
  code: `$title[Asker's available commands]
  $description[**start**
  $commandInfo[start;info.description]
  aliases: \`akin\`, \`akinator\`

  **settings**
  $commandInfo[settings;info.description]
  aliases: \`setting\`
  
  **version**
  $commandInfo[version;info.description]
  aliases: \`ver\`

  **invite**
  $commandInfo[invite;info.description]

  **stats**
  $commandInfo[stats;info.description]
  aliases: \`botinfo\`

 **credits**
 $commandInfo[credits;info.description]
  ]
  $color[Yellow]
`
}