module.exports = {
  name: "version",
  aliases: "ver",
  code: `$title[1.0.2-3, important update]
  $description[
    **Developer message**
   Hey folks! Another bug fix update for 1.0.2 as 1.0.3 still hasn't released yet! This version fixes the issue with \`start\` command which suddenly became unusable.

   **What happened?**
   The akinator api npm package which Askers uses for akinator experience has been experiencing some strange issues. 
   The certificates was installed incorrectly which caused all discord bots that uses the package to not function at all, and so Askers got affected by this.

   **Note**: despite the fix being implemented, it's possible that all akinator bots which is using this package will now get high ram usage which is something i cannot control sadly.
   Be aware!
  ]
  $color[Yellow]

`
}