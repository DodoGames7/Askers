module.exports = {
  name: "version",
  aliases: "ver",
  code: `$title[1.0.3-alpha, colors?]
  $description[
    new akinator option: \`color\`

    **what is this?**
    this allows you to change the embed color that is used in the command \`start\`
    you can choose from colors like red, blue, black, etc to interesting ones like Rainbow (aka random color) and more!

    **fixes**
    fixed the bot being able to respond to other bots if commands got triggered
    fixed the lacking of information regarding akinator color feature in \`settings\` cmd
    fixed other issues with embeds since it wasn't synced with the latest changes of aoi
    for bot devs: fixed the \`update\` cmd being broken (i forget to update it in the alpha version)

  ]
  $footer[new alpha build, new me!]
  $color[Yellow]
`
}