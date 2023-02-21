module.exports = {
  name: "version",
  aliases: "ver",
  code: `$title[1.0.2-patched]
  $description[
    **fixes**
    fixed the bot being able to respond to other bots if it has commands triggered (this was a issue on aoi.js so you can most likely say that it was a bug from it)
    fixed \`update\` command for bots devs being not actually reloading commands
    
    **changes**
    updated to 6.1.1 of aoi.js version 6
    removed the \`(Experimental)\` tag from the description regarding \`Language\` in \`settings\` cmd
  ]
  $color[Yellow]
  $footer[there we go again!]
`
}
