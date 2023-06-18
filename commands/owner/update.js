module.exports = {
name: "update",
code: `Successfully updated all commands.
$addButton[1;Total: $commandsCount;2;uselesscustomid;true]
$updateCommands
$onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
`
}
