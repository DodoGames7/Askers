module.exports = {
  name: "version",
  executeAt: "both",
  aliases: ["ver", "changelog"],
  info: {
    description: "View the current release of Askers"
  },
  code: `$title[1.0.4-alpha, Nice!]
  $description[
    **Slash Command support**
    Askers is introducing support to slash commands! This feature is currently experimental and does not work considering that this is alpha.
    Stay tuned!

    **other**
    Added alias \`restartcmds\` and \`reloadcmds\` to dev command \`update\`.
    Added alias \`h\` for \`help\` command.

  ]
  $color[Yellow]
`
}
