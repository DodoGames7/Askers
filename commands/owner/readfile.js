// it's an dev command, what do i expect with an aoi error if it's advanced dev tool.
// use this with caution if you purposefully replaced env with your actual token from index.js
module.exports = {
    name: "readfile",
    aliases: ["checkfile", "viewfile"],
    executeAt: "both",
    $if: "old",
    info: {
        description: "Reads an file you specify, for example bot files of Askers itself.",
        usage: "a!readfile < file name to view (e.g package.json). >",
        notes: "Only use this if you know what you're doing."
      },
    code: `$if[$charCount[$readFile[$message]]>=2000]
    Results has exceeded 2000 characters. Creating the result as an file instead.
    $createFile[$readFile[$message];result.txt]
    $else
    \`\`\`js
    $readFile[$message]
    \`\`\`
    $endif
    $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]`

}