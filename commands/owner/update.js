module.exports = {
name: "update",
executeAt: "both",
info: {
    description: "restarts the entire commands of the bot"
  },
code: `Successfully updated all commands.
$addButton[1;Total: $commandsCount;2;uselesscustomid;true]
$updateCommands
$onlyForIDS[$botOwnerID;]
`
}
