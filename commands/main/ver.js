module.exports = {
  name: "version",
  executeAt: "both",
  aliases: "ver",
  info: {
    description: "view the current release of Askers"
  },
  code: `$title[1.0.3-beta, no more alpha]
  $description[
    **changes**
    status for button option now says \`Enabled/Disabled\` instead of \`true/false\`
    added refresh button to update status of options in \`settings\`
    added \`devcmds\` command for the user who is bot owner of his bot.
    added \`func\` to look for information about aoi.js functions (bot owner only)

    **other**
    added an button dedicated to Asker's Support server in \`credits\` command.
    added dm support (Experimental), some commands may only work in a server, some works in both server and dms.

  ]
  $color[Yellow]
`
}