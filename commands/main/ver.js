module.exports = {
  name: "version",
  executeAt: "both",
  aliases: ["ver", "changelog"],
  info: {
    description: "View the current release of Askers"
  },
  code: `$title[1.0.3-beta2, Perfection!]
  $description[
    **changes**
    changed the ram on how it's shown in \`stats\` to look better.
    updated djs (again).
    added colors option finally after a while.
    if the amount of users of the bot is large then separate them, for example \`1000\` would be \`1,000\`.
    and other changes....

    **fixes**
    fixed \`func\` being usable by everyone than just the dev of the bot
    add errors to \`func\` to clear confusion

    **other**
   added \`readfile\` command for devs (run \`devcmds\` command for information).
   moved interaction files of the bot and it's ready file to an folder named \`automation\`
   make \`devcmds\` include Aliases of each bot owner command just like help command.
   use \`#CHAR#commandInfo\` to return command descriptions instead of using the Classical method of writing descriptions manually at each comand.


  ]
  $color[Yellow]
`
}
