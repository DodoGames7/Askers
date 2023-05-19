module.exports = {
name: "update",
aliases: ["restartcmds", "reloadcmds"],
executeAt: "both",
info: {
    description: "Restarts the entire commands of the bot"
  },
code: `Successfully updated all commands.
$addButton[1;Total: $commandsCount;2;uselesscustomid;true]
$updateCommands
$onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
`
}
