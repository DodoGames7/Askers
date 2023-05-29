module.exports = {
  name: "version",
  executeAt: "both",
  aliases: ["ver", "changelog"],
  info: {
    description: "View the current release of Askers"
  },
  code: `$title[1.0.3 - it's finally here!]
  $description[
    **Hey there!**
   1.0.3 preview circle is almost over! This release took a lot of months to fix bugs and mistakes in the bot which is why 1.0.2 was still maintained for months!
   In the meantime, feel free to try out this version. Enjoy your akinator game!
   
   **changes**
   You can now change embed color used in \`start\` command! Check out \`settings\` command for more information.
   People who hosted the bot will now have access to more dev commands! 
   In addition to this, people in a discord team with the bot used can also now use dev commands as well!
   Added \`changelog\` alias to \`version\` command

   **fixes**
   Fixed the infamous permission error that gets triggered when you have buttons enabled. It was useless for buttons so this was annoying.
   Lot of grammar fixes and minor changes to stuff to make more sense
   Fixed \`library\` being mentioned twice in \`stats\` command
   Updated aoi.js to fix bugs related to the package that isn't part of the bot

   **other**
   Make ram shown in \`stats\` shorter
   Added important note to permission error \`managemessages\` if buttons are disabled
   Askers now uses \`#CHAR#commandInfo\` to return command informations and more!
   Support for more languages in \`settings\`
   The text "Aoi.js" now has an hyperlink which returns the link to aoi.js package on npm site
  ]
  $color[Yellow]
`
}
