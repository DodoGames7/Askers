module.exports = {
  name: "version",
  aliases: "ver",
  code: `$title[1.0.2-4, 2023 June update]
  $description[
    Note: This is the last version that will include changes for version v1.2! There will be no changes after that except just for bug fixes.

    **Fixes**
    Fixed tag 0 shown in \`credits\` command
    Fixed a rare issue with database used for Askers regarding cache
    Fixed akinator language refusing to work after sometime of playing akinator?
    Fixed grammar in asker's default console message

    **Other**
    Added Support for aoi.js 6.2.6. This was originally planned in 1.0.3 but was decided later to add to version v1.2

    Because of aoi.js changes from 6.2.0, Askers now supports multiple bot owners
    
    You can now either place your token secretly using env or you can place your token in quotes on \`token:\` from index.js file. Quotes method are not recommended if using public host for the bot 
  ]
  $color[Yellow]

`
}