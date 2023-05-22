module.exports = {
  name: "help",
  aliases: "h",
  executeAt: "both",
  code: `$title[Asker's available commands]
  $description[**start**
  $commandInfo[start;info.description]
  aliases: \`akin\`, \`akinator\`

  **settings**
  $commandInfo[settings;info.description]
  aliases: \`setting\`
  
  **version**
  $commandInfo[version;info.description]
  aliases: \`ver\`, \`changelog\`

  **invite**
  $commandInfo[invite;info.description]

  **stats**
  $commandInfo[stats;info.description]
  aliases: \`botinfo\`

 **credits**
 $commandInfo[credits;info.description]

 **slash**
 $commandInfo[slash;info.description]
  ]
  $color[Yellow]
`
}