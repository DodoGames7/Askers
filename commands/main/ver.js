module.exports = {
  name: "version",
  aliases: "ver",
  code: `$title[1.0.2-extra]
  $description[
    **fixes (1.0.2-patched)**
    fixed the bot being able to respond to other bots if it has commands triggered (this was a issue on aoi.js so you can most likely say that it was a bug from it)
    fixed \`update\` command for bots devs being not actually reloading commands
    
    **changes (1.0.2-patched)**
    updated to 6.1.1 of aoi.js version 6
    removed the \`(Experimental)\` tag from the description regarding \`Language\` in \`settings\` cmd
    
    **More (1.0.2-extra aka current)**
    fix \`TextBased\` issue when clicking on a button by updating discord.js (which aoi.js is using it) to the latest, 
    for more information read the changelog about discord.js version 14.8.0
    
    **small useless message from dev**
1.0.2 more like long supported version now, lol.

  ]
  $color[Yellow]
  $footer[there we go again!]
`
}
