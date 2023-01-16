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
},{ 
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[please select the Available language you would like to be used in akin start;;{actionRow:{selectMenu:akinmenu:Language:1:1:no:{selectMenuOptions:Arabic:ar:Arabic Language:no}
         {selectMenuOptions:English:en:Main Language:no}{selectMenuOptions:Franch:fr:French Language:no}{selectMenuOptions:German:de:German Language:no}{selectMenuOptions:italian:it:italian Language:no}{selectMenuOptions:Polish:pl:Polish Language:no}{selectMenuOptions:Portuguese:pt:Portuguese Language:no}{selectMenuOptions:Russian:ru:Russian Language:no}{selectMenuOptions:Turkish:tr:Turkish Language:no}}};;all;yes]


$onlyif[$get[authorID]==$interactionData[author.id];
  You aren't the author of this interaction.
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyif[$get[customId]==language;]

$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_]
`
    
},{
    name: "akinmenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `$setServerVar[akin_language;ar]
$interactionReply[language set to \`Arabic\`;;;;all;yes]

$onlyIf[$getServerVar[akin_language]!=ar;
that's already being used
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$interactionData[values[0]]==ar;]
`
},{
    name: "akinmenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `$setServerVar[akin_language;de]
$interactionReply[language set to \`German\`;;;;all;yes]

$onlyIf[$getServerVar[akin_language]!=de;
that's already being used
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$interactionData[values[0]]==de;]
`
},{
    name: "akinmenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `$setServerVar[akin_language;it]
$interactionReply[language set to \`italian\`;;;;all;yes]

$onlyIf[$getServerVar[akin_language]!=it;
that's already being used
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$interactionData[values[0]]==it;]
`
},{
    name: "akinmenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `$setServerVar[akin_language;pl]
$interactionReply[language set to \`Polish\`;;;;all;yes]

$onlyIf[$getServerVar[akin_language]!=pl;
that's already being used
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$interactionData[values[0]]==pl;]
`
},{
    name: "akinmenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `$setServerVar[akin_language;en]
$interactionReply[language set to \`English\`;;;;all;yes]

$onlyIf[$getServerVar[akin_language]!=en;
that's already being used
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$interactionData[values[0]]==en;]
`
},{
    name: "akinmenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `$setServerVar[akin_language;fr]
$interactionReply[language set to \`French\`;;;;all;yes]

$onlyIf[$getServerVar[akin_language]!=fr;
that's already being used
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$interactionData[values[0]]==fr;]
`
},{
    name: "akinmenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `$setServerVar[akin_language;pt]
$interactionReply[language set to \`Portuguese\`;;;;all;yes]

$onlyIf[$getServerVar[akin_language]!=pt;
that's already being used
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$interactionData[values[0]]==pt;]
`
},{
    name: "akinmenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `$setServerVar[akin_language;ru]
$interactionReply[language set to \`Russian\`;;;;all;yes]

$onlyIf[$getServerVar[akin_language]!=ru;
that's already being used
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$interactionData[values[0]]==ru;]
`
},{
    name: "akinmenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `$setServerVar[akin_language;tr]
$interactionReply[language set to \`Turkish\`;;;;all;yes]

$onlyIf[$getServerVar[akin_language]!=tr;
that's already being used
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$interactionData[values[0]]==tr;]
`
}]
