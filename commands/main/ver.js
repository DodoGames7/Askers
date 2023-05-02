module.exports = {
  name: "version",
  executeAt: "both",
  aliases: ["ver", "changelog"],
  info: {
    description: "View the current release of Askers"
  },
  code: `$title[1.0.3-preview, More Perfection]
  $description[
    **changes**
   Added akinator colors feature, check it within settings command.
  People who hosted the bot from the source code can now use a lot of dev commands for themselves.
  And a lot of changes, such as making ram shown short in \`stats\` command.

    **fixes**
    Updated to aoi.js 6.2.0 to fix "un-fixable" bugs in the bot itself.
    Fixed akinator color feature being accepting invisible space including not using \`#\` to enter hex code.
    Fixed Grammar of some commands.
    Re-force using aoi.db as part of aoi.js 6.2.0 changes.
    Fixed an dev command named \`eval\` regarding the part of restricting it to the bot owner.

    **other**
   Add alias \`changelog\` to \`version\` command.
   Introduce Indonesian and Ukraine support in akinator languages feature, run settings command to check them out.
   Bot now supports multiple bot owners if the bot hosted using Asker's source code was made in a discord team.


  ]
  $color[Yellow]
`
}
