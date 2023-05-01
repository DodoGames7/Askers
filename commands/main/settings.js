module.exports = {
  name: "settings",
  aliases: "setting",
  executeAt: "guild",
  info: {
    description: "let's you change on how should akinator game starts"
  },
  code: `
  $title[Askers Settings]
  $description[Here are the general options that you can change:
  
  **Button**: Whether or not the Game should start with discord Buttons (Deprecated, may be removed anytime).
  **Mode**: Choose on what do you want from Askers in the game to ask you about.
  **Language**: Change current language Used in akinator start system.
  **Color**: Change the current embed color used in akinator cmd.
  
  **Current Settings**
  Button: \`$get[buttonsstatus]\`
  Mode: \`$getGuildVar[akin_gametype]\`
  Language: \`$getGuildVar[akin_language]\`
  Color: \`$getGuildVar[akin_embedcolor]\`
  If The Shown settings are outdated after making changes, make sure to click the button with 🔄 Emoji to show the new settings.

 **Warning**
NSFW are not supported and it will never be added to Askers. Attempting to guess an nsfw character will result in the following message: "I know who you are thinking of, but I believe this is not for young people".

  ]
  $addButton[1;Color;1;color_$authorID;false]
  $addButton[1;Language;1;language_$authorID;false]
  $addButton[1;;2;refresh_$authorID;false;🔄]
  $addButton[1;Mode;1;mode_$authorID;false]
  $addButton[1;Button;1;button_$authorID;false]
  $let[buttonsstatus;$replaceText[$replaceText[$getGuildVar[akin_buttons];true;Enabled];false;Disabled]]
  $color[Yellow]
  $onlyPerms[manageguild;you need \`ManageServer\` Permission in order to change on how i should start akinator game]
  `
}
