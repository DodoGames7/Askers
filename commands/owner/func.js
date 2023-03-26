module.exports = [{
    name: "func",
    aliases: "aoi",
    executeAt: "both",
    info: {
      description: "look for information about aoi.js functions",
      usage: "a!func < function name >",
      notes: "this command uses a api that contains credit, keep that in mind."
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
    $onlyIf[$checkContains[$message[1];$]==true;]
    $onlyForIDS[$botOwnerID;]`
}] // disclaimer: api has credits
