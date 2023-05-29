module.exports = {
  name: "help",
  executeAt: "guild",
  code: `$title[Asker's available commands]
  $description[**start**
  $commandInfo[start;info.description]
  Aliases: \`akin\`, \`akinator\`

  **settings**
  $commandInfo[settings;info.description]
  Aliases: \`setting\`
  
  **version**
  $commandInfo[version;info.description]
  Aliases: \`ver\`, \`changelog\`

  **invite**
  $commandInfo[invite;info.description]

  **stats**
  $commandInfo[stats;info.description]
  Aliases: \`botinfo\`

 **credits**
 $commandInfo[credits;info.description]
  ]
  $color[Yellow]
`
}