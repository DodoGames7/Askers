module.exports = [{
  type: "interaction",
  $if: "v4",
  prototype: "button",
  code: `$if[$getServerVar[akin_buttons]==false]
  $interactionReply[Successfully enabled Akinator discord buttons;;;;users;yes]
  $setServerVar[akin_buttons;true]
  $elseif[$getServerVar[akin_buttons]==true]
  $interactionReply[Successfully disabled Akinator discord buttons;;;;users;yes]
  $setServerVar[akin_buttons;false]
  $endelseif
  $endif
  
  $onlyif[$get[authorID]==$interactionData[author.id];{
"content" : "You aren't the author of this interaction.",
"ephemeral" : true,
"options" : { "interaction" : true }
}]

$onlyif[$get[customId]==button;]

$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_] `
},{
  type: "interaction",
  $if: "v4",
  prototype: "button",
  code: `
  $interactionReply[what do you want to use;;{actionRow:{button:Character:primary:character_$get[authorID]:no}{button:Animal:primary:animal_$get[authorID]:no}{button:Object:primary:object_$get[authorID]:no}};;users;yes]


  
  $onlyif[$get[authorID]==$interactionData[author.id];{
"content" : "You aren't the author of this interaction.",
"ephemeral" : true,
"options" : { "interaction" : true }
}]

$onlyif[$get[customId]==mode;]

$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_]
`
},{
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[changed game type to \`Character\`;;;;users;yes]
  $setServerVar[akin_gametype;character]

  $onlyIf[$getServerVar[akin_gametype]!=character;{
"content" : "that's already being used.",
"ephemeral" : true,
"options" : { "interaction" : true }
}]
  
  $onlyif[$get[authorID]==$interactionData[author.id];{
"content" : "You aren't the author of this interaction.",
"ephemeral" : true,
"options" : { "interaction" : true }
}]

$onlyif[$get[customId]==character;]

$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_]
`
},{
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[changed game type to \`Animal\`;;;;users;yes]
  $setServerVar[akin_gametype;animal]

  $onlyIf[$getServerVar[akin_gametype]!=animal;{
"content" : "that's already being used.",
"ephemeral" : true,
"options" : { "interaction" : true }
}]
  
  $onlyif[$get[authorID]==$interactionData[author.id];{
"content" : "You aren't the author of this interaction.",
"ephemeral" : true,
"options" : { "interaction" : true }
}]

$onlyif[$get[customId]==animal;]

$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_]`
},{
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[changed game type to \`Object\`;;;;users;yes]
  $setServerVar[akin_gametype;object]

  $onlyIf[$getServerVar[akin_gametype]!=object;{
"content" : "that's already being used.",
"ephemeral" : true,
"options" : { "interaction" : true }
}]
  
  $onlyif[$get[authorID]==$interactionData[author.id];{
"content" : "You aren't the author of this interaction.",
"ephemeral" : true,
"options" : { "interaction" : true }
}]

$onlyif[$get[customId]==object;]

$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_]`
}]
