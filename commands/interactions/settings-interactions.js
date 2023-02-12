module.exports = [{
  type: "interaction",
  $if: "old",
  prototype: "button",
  code: `$if[$getGuildVar[akin_buttons]==false]
  $interactionReply[Successfully enabled Akinator discord buttons;;;;all;true]
  $setGuildVar[akin_buttons;true]
  $elseif[$getGuildVar[akin_buttons]==true]
  $interactionReply[Successfully disabled Akinator discord buttons;;;;all;true]
  $setGuildVar[akin_buttons;false]
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
  $interactionReply[what do you want to use;;{actionRow:{button:Character:primary:character_$get[authorID]:false}{button:Animal:primary:animal_$get[authorID]:false}{button:Object:primary:object_$get[authorID]:false}};;all;true]


  
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
  code: `$interactionReply[changed game type to \`Character\`;;;;all;true]
  $setGuildVar[akin_gametype;character]

  $onlyIf[$getGuildVar[akin_gametype]!=character;
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
  code: `$interactionReply[changed game type to \`Animal\`;;;;all;true]
  $setGuildVar[akin_gametype;animal]

  $onlyIf[$getGuildVar[akin_gametype]!=animal;
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
  code: `$interactionReply[changed game type to \`Object\`;;;;all;true]
  $setGuildVar[akin_gametype;object]

  $onlyIf[$getGuildVar[akin_gametype]!=object;
that's already being used.
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
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
  code: `$interactionReply[please select the Available language you would like to be used in akin start;;{actionRow:{selectMenu:akinmenu:Language:1:1:false:{selectMenuOptions:Arabic:ar:Arabic Language:false}{selectMenuOptions:English:en:Main Language:false}{selectMenuOptions:French:fr:French Language:false}{selectMenuOptions:German:de:German Language:false}{selectMenuOptions:italian:it:italian Language:false}{selectMenuOptions:Polish:pl:Polish Language:false}{selectMenuOptions:Portuguese:pt:Portuguese Language:false}{selectMenuOptions:Russian:ru:Russian Language:false}{selectMenuOptions:Turkish:tr:Turkish Language:false}{selectMenuOptions:Japanese:ja:Japanese Language:false}{selectMenuOptions:Spanish:es:Spanish Language:false}{selectMenuOptions:Hindi:hi:Hindi Language:false}{selectMenuOptions:Bengali:bn:Bengali Language:false}}};;users;true]


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
    code: `$setGuildVar[akin_language;ar]
$interactionReply[language set to \`Arabic\`;;;;all;true]

$onlyIf[$getGuildVar[akin_language]!=ar;
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
    code: `$setGuildVar[akin_language;de]
$interactionReply[language set to \`German\`;;;;all;true]

$onlyIf[$getGuildVar[akin_language]!=de;
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
    code: `$setGuildVar[akin_language;it]
$interactionReply[language set to \`italian\`;;;;all;true]

$onlyIf[$getGuildVar[akin_language]!=it;
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
    code: `$setGuildVar[akin_language;pl]
$interactionReply[language set to \`Polish\`;;;;all;true]

$onlyIf[$getGuildVar[akin_language]!=pl;
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
    code: `$setGuildVar[akin_language;en]
$interactionReply[language set to \`English\`;;;;all;true]

$onlyIf[$getGuildVar[akin_language]!=en;
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
    code: `$setGuildVar[akin_language;fr]
$interactionReply[language set to \`French\`;;;;all;true]

$onlyIf[$getGuildVar[akin_language]!=fr;
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
    code: `$setGuildVar[akin_language;pt]
$interactionReply[language set to \`Portuguese\`;;;;all;true]

$onlyIf[$getGuildVar[akin_language]!=pt;
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
    code: `$setGuildVar[akin_language;ru]
$interactionReply[language set to \`Russian\`;;;;all;true]

$onlyIf[$getGuildVar[akin_language]!=ru;
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
    code: `$setGuildVar[akin_language;tr]
$interactionReply[language set to \`Turkish\`;;;;all;true]

$onlyIf[$getGuildVar[akin_language]!=tr;
that's already being used
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$interactionData[values[0]]==tr;]
`
},{
    name: "akinmenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `$setGuildVar[akin_language;ja]
$interactionReply[language set to \`Japanese\`;;;;all;true]

$onlyIf[$getGuildVar[akin_language]!=ja;
that's already being used
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$interactionData[values[0]]==ja;]
`
},{
    name: "akinmenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `$setGuildVar[akin_language;es]
$interactionReply[language set to \`Spanish\`;;;;all;true]

$onlyIf[$getGuildVar[akin_language]!=es;
that's already being used
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$interactionData[values[0]]==es;]
`
},{
    name: "akinmenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `$setGuildVar[akin_language;hi]
$interactionReply[language set to \`Hindi\`;;;;all;true]

$onlyIf[$getGuildVar[akin_language]!=hi;
that's already being used
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$interactionData[values[0]]==hi;]
`
},{
    name: "akinmenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `$setGuildVar[akin_language;bn]
$interactionReply[language set to \`Bengali\`;;;;all;true]

$onlyIf[$getGuildVar[akin_language]!=bn;
that's already being used
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$interactionData[values[0]]==bn;]
`
}]
