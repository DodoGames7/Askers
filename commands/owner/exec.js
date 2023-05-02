module.exports = {
    name: "execute",
    aliases: ["exec", "terminal"],
    executeAt: "both",
  info: {
    description: "Runs an Terminal command on Discord.",
    usage: "a!execute < terminal command to execute >"
  },
    code: `
    \`\`\`$exec[$message]\`\`\`
    $onlyIf[$message!=;please type something to execute on the terminal.]
    $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
    
    `
}