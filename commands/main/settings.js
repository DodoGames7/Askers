module.exports = {
  name: "settings",
  aliases: "setting",
  $if: "v4",
  code: `
  $title[Askers Settings]
  $description[here are the general options that you can change:
  
  **Button**: enable buttons mode
  **Mode**: change the game mode
  
  **Status**
  Button: \`$getServerVar[akin_buttons]\`
  Mode: \`$getServerVar[akin_gametype]\`
  ]
  $addButton[1;Mode;primary;mode_$authorID;no]
  $addButton[1;Button;primary;button_$authorID;no]
  $color[YELLOW]
  $onlyPerms[manageserver;you need \`MANAGE_SERVER\` Permission in order to change on how i should start akinator game]
  `
}
