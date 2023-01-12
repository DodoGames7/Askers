module.exports = [{
  type: "interaction",
  $if: "old",
  prototype: "button",
  code: `$if[$getServerVar[akin_buttons]==false]
  $interactionReply[Successfully enabled Akinator discord buttons;;;;all;yes]
  $setServerVar[akin_buttons;true]
  $elseif[$getServerVar[akin_buttons]==true]
  $interactionReply[Successfully disabled Akinator discord buttons;;;;all;yes]
  $setServerVar[akin_buttons;false]
  $endelseif
  $endif
  
  $onlyif[$get[authorID]==$interactionData[author.id];
  You aren't the author of this interaction.
  {options:{ephemeral: true}}
  {extraOptions:{interaction: true}}
  ]

$onlyif[$get[customId]==button;]

$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_] `
},{
  type: "interaction",
  $if: "old",
  prototype: "button",
  code: `
  $interactionReply[what do you want to use;;{actionRow:{button:Character:1:character_$get[authorID]:no}{button:Animal:1:animal_$get[authorID]:no}{button:Object:1:object_$get[authorID]:no}};;all;yes]


  
  $onlyif[$get[authorID]==$interactionData[author.id]; 
  You aren't the author of this interaction.
  {options:{ephemeral: true}}
  {extraOptions:{interaction: true}}
  ]

$onlyif[$get[customId]==mode;]

$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_]
`
},{
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[changed game type to \`Character\`;;;;all;yes]
  $setServerVar[akin_gametype;character]

  $onlyIf[$getServerVar[akin_gametype]!=character;
  that's already being used.
  {options:{ephemeral: true}}
  {extraOptions:{interaction: true}}
]
  
  $onlyif[$get[authorID]==$interactionData[author.id];
  You aren't the author of this interaction.
  {options:{ephemeral: true}}
  {extraOptions:{interaction: true}}
  ]

$onlyif[$get[customId]==character;]

$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_]
`
},{
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[changed game type to \`Animal\`;;;;all;yes]
  $setServerVar[akin_gametype;animal]

  $onlyIf[$getServerVar[akin_gametype]!=animal;
that's already being used.
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
  
  $onlyif[$get[authorID]==$interactionData[author.id]; 
  You aren't the author of this interaction.
  {options:{ephemeral: true}}
  {extraOptions:{interaction: true}}
  ]

$onlyif[$get[customId]==animal;]

$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_]`
},{
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[changed game type to \`Object\`;;;;all;yes]
  $setServerVar[akin_gametype;object]

  $onlyIf[$getServerVar[akin_gametype]!=object;
  that's already being used.
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}} 
]
  
  $onlyif[$get[authorID]==$interactionData[author.id];
  You aren't the author of this interaction.
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyif[$get[customId]==object;]

$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_]`
}]
