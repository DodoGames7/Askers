module.exports = {
  name: "version",
  aliases: "ver",
  code: `$title[1.0.0-beta1, minor fix]
  $description[**changes**
the user should now get permissions error in case if it's missing when attempting to start the game
added credits command including an button to redirect to the source code

add alias \`ver\` for \`version\` command
add alias \`botinfo\` for \`stats\` command

**other**
added uptime counter to \`stats\` cmd
invite command now uses an link button instead of using hyperlink in embed description
removed unwanted permissions from \`invite\` cmd]
  $color[YELLOW]
`
}