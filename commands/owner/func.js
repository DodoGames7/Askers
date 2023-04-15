module.exports = [{
    name: "func",
    aliases: "aoi",
    executeAt: "both",
    info: {
      description: "Look for information about aoi.js functions",
      usage: "a!func < function name (with the dollar sign $ at the start.) >",
      notes: "This command uses a api that contains credit, keep that in mind."
    },
    code: `
    $author[$userTag[$authorID];$userAvatar[$authorID]]
    $title[$advancedTextSplit[$getObjectProperty[usage];[;1]]
    $addField[Example;$getObjectProperty[example]]
    $addField[Usage;\`$replaceText[$getObjectProperty[usage];\r;]\`]
    $addField[Description;$getObjectProperty[desc]]
    $color[White]
    $addTimestamp
    $addButton[1;Source Code;link;$nonEscape[$getObjectProperty[src]];false]
    $addButton[1;Documentation;link;$nonEscape[$getObjectProperty[link]];false]
    $onlyIf[$getObjectProperty[err]!=DOCS NOT FOUND;]
    $createObject[$jsonRequest[https://aoijs-api.bumblebeerox1.repl.co/api/aoijs/function?name=$message]]
    $onlyIf[$checkContains[$message[1];$]==true; your command argument must contain the dollar sign \`$\` first.]
    $onlyIf[$message[1]!=;provide an function name first.]
    $onlyForIDS[$botOwnerid;]
    `
}] // disclaimer: api has credits
