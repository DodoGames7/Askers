module.exports = {
  name: "version",
  executeAt: "both",
  aliases: ["ver", "changelog"],
  info: {
    description: "View the current release of Askers"
  },
  code: `$title[1.0.3-preview1, Emergency Update]
  $description[
    This update is here to fix aoi.js mistakes where it caused the bot to be very broken. I apologize if this has annoyed you.

   **fixes**
Fixed \`isJSONEncodable\` Issue which causes the bot to be unusable.
Updated djs to the latest since it appears to be broken by json error as well.

To make sure that this is permanent fix, i have updated to aoi.js 6.2.6 which fixes this issue alongside with installing discord.js builders version 1.6.2.


**other**
Move the option \`English\` from language feature to the top rather than \`Arabic\`.
Changed permission error messages to not use capital letters for the permission name it wants anymore.

**notice from dev**
If you have missed on what has been changed in Askers Preview Release for 1.0.3, then you can visit the changelog [here](https://github.com/DodoGames7/Askers/releases/tag/1.0.3-preview).
  ]
  $color[Yellow]
`
}
