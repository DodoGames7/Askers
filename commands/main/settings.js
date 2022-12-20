module.exports = {
  name: "settings",
  aliases: "setting",
  $if: "v4",
  code: `
  $title[Askers Settings]
  $description[here are the general options that you can change:
  
  **Button**: enable buttons mode
  **Mode**: change the game mode
  **Language**: change current language of akinator start system
  
  **Status**
  Button: \`$getServerVar[akin_buttons]\`
  Mode: \`$getServerVar[akin_gametype]\`
  Language: \`$getServerVar[akin_language]\`
  
 **Warning**
NSFW are not supported and it will never be added to Askers, attempting to guess an nsfw character will result in an message saying "I know who you are thinking of, but I believe this is not for young people"

  ]
  $addButton[1;Language;primary;language_$authorID;no]
  $addButton[1;Mode;primary;mode_$authorID;no]
  $addButton[1;Button;primary;button_$authorID;no]
  $color[YELLOW]
  $onlyPerms[manageserver;you need \`MANAGE_SERVER\` Permission in order to change on how i should start akinator game]
  `
}
