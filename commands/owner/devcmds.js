module.exports = {
    name: "devcmds",
    executeAt: "both",
    code: `$title[Dev Commands list]
    $description[Welcome to the dev commands list, this command just shows the available dev commands you can use as the bot owner.
    
    **eval**
    $commandInfo[eval;info.description]
    Usage: \`$commandInfo[eval;info.usage]\`
    Aliases: \`e\`

    **execute**
    $commandInfo[execute;info.description]
    Usage: \`$commandInfo[execute;info.usage]\`
    Aliases: \`exec\`, \`terminal\`

    **update**
    $commandInfo[update;info.description]

    **func**
    $commandInfo[func;info.description]
    Usage: \`$commandInfo[func;info.usage]\`
    Notes: \`$commandInfo[func;info.notes]\`
    Aliases: \`aoi\`

    **readfile**
    $commandInfo[readfile;info.description]
    Usage: \`$commandInfo[readfile;info.usage]\`
    Notes: \`$commandInfo[readfile;info.notes]\`
    Aliases: \`checkfile\`, \`viewfile\`
    ]
    $color[Yellow]
    $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]

    `
}