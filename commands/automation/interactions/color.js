module.exports = [{
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[choose a color from the list.;;{actionRow:{selectMenu:colormenu:Color Selection:1:1:false:{selectMenuOptions:Default:default:default used color:false}{selectMenuOptions:Red:red:set color to Red:false}{selectMenuOptions:Blue:blue:set color to Blue:false}{selectMenuOptions:Green:green:set color to Green:false}{selectMenuOptions:Orange:orange:set color to Orange:false}{selectMenuOptions:Black:black:set color to Black:false}{selectMenuOptions:White:White:set color to White:false}{selectMenuOptions:Gold:gold:definitely something rich people would use:false}{selectMenuOptions:Old Blurple:oldblurple:discord's original blurple:false}{selectMenuOptions:Blurple:blurple:discord's default branding color:false}{selectMenuOptions:Luminous Vivid Pink:LuminousVividPink:pink color but a bit different:false}{selectMenuOptions:invisible:invisible:makes embed color invisible (works only on Dark Mode.):false}{selectMenuOptions:Rainbow:rainbow:makes embed color randomly change in each game:false}{selectMenuOptions:Fuchsia:pink:set color to pink:false}{selectMenuOptions:Custom:custom:use your own color. (Experimental):false}}};;all;true]

  $onlyif[$get[authorID]==$interactionData[author.id];
  You aren't the author of this interaction.
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyif[$get[customId]==color;]

$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_]
`
},{
    name: "colormenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `$setGuildVar[akin_embedcolor;#1F1E33]
$interactionReply[changed color to \`Default\`;;;;all;true]

$onlyIf[$getGuildVar[akin_embedcolor]!=#1F1E33;
that's already being used
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$interactionData[values[0]]==default;]
`
},{
    name: "colormenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `$setGuildVar[akin_embedcolor;Red]
$interactionReply[changed color to \`Red\`;;;;all;true]

$onlyIf[$getGuildVar[akin_embedcolor]!=Red;
that's already being used
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$interactionData[values[0]]==red;]
`
},{
    name: "colormenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `$setGuildVar[akin_embedcolor;Blue]
$interactionReply[changed color to \`Blue\`;;;;all;true]

$onlyIf[$getGuildVar[akin_embedcolor]!=Blue;
that's already being used
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$interactionData[values[0]]==blue;]
`
},{
    name: "colormenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `$setGuildVar[akin_embedcolor;Green]
$interactionReply[changed color to \`Green\`;;;;all;true]

$onlyIf[$getGuildVar[akin_embedcolor]!=Green;
that's already being used
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$interactionData[values[0]]==green;]
`
},{
    name: "colormenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `$setGuildVar[akin_embedcolor;Orange]
$interactionReply[changed color to \`Orange\`;;;;all;true]

$onlyIf[$getGuildVar[akin_embedcolor]!=Orange;
that's already being used
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$interactionData[values[0]]==orange;]
`
},{
    name: "colormenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `$setGuildVar[akin_embedcolor;Default]
$interactionReply[changed color to \`Black\`;;;;all;true]

$onlyIf[$getGuildVar[akin_embedcolor]!=Default;
that's already being used
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$interactionData[values[0]]==black;]
`
},{
    name: "colormenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `$setGuildVar[akin_embedcolor;White]
$interactionReply[changed color to \`White\`;;;;all;true]

$onlyIf[$getGuildVar[akin_embedcolor]!=White;
that's already being used
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$interactionData[values[0]]==white;]
`
},{
    name: "colormenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `$setGuildVar[akin_embedcolor;Gold]
$interactionReply[changed color to \`Gold\`;;;;all;true]

$onlyIf[$getGuildVar[akin_embedcolor]!=Gold;
that's already being used
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$interactionData[values[0]]==gold;]
`
},{
    name: "colormenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `$setGuildVar[akin_embedcolor;Blurple]
$interactionReply[changed color to \`Blurple\`;;;;all;true]

$onlyIf[$getGuildVar[akin_embedcolor]!=Blurple;
that's already being used
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$interactionData[values[0]]==blurple;]
`
},{
    name: "colormenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `$setGuildVar[akin_embedcolor;LuminousVividPink]
$interactionReply[changed color to \`Luminous Vivid Pink\`;;;;all;true]

$onlyIf[$getGuildVar[akin_embedcolor]!=LuminousVividPink;
that's already being used
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$interactionData[values[0]]==LuminousVividPink;]
`
},{
    name: "colormenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `$setGuildVar[akin_embedcolor;#2f3136]
$interactionReply[changed color to \`invisible\`;;;;all;true]

$onlyIf[$getGuildVar[akin_embedcolor]!=#2f3136;
that's already being used
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$interactionData[values[0]]==invisible;]
`
},{
    name: "colormenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `$setGuildVar[akin_embedcolor;Random]
$interactionReply[changed color to \`Random\`;;;;all;true]

$onlyIf[$getGuildVar[akin_embedcolor]!=Random;
that's already being used
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$interactionData[values[0]]==rainbow;]
`
},{
    name: "colormenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `$setGuildVar[akin_embedcolor;#7289DA]
$interactionReply[changed color to \`Old Blurple\`;;;;all;true]

$onlyIf[$getGuildVar[akin_embedcolor]!=#7289DA;
that's already being used
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$interactionData[values[0]]==oldblurple;]
`
},{
    name: "colormenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `$interactionModal[Set your own Color!;customcolormenu;
        {actionRow:
          {textInput:hex code?:1:hexInput:true:e.g #FF0000:7:7}
        }

$onlyIf[$interactionData[values[0]]==custom;]
`
},{
    name: "customcolormenu",
    type: "interaction",
    prototype: "modal",
    code: `$setGuildVar[akin_embedcolor;$textInputValue[hexInput]]
    $interactionReply[Changed color to hex code \`$textInputValue[hexInput]\`.;;;;all;true]
    
    $onlyIf[$checkContains[$textInputValue[hexInput];#]==true;You must use \`#\` before you can insert hex code, example#COLON# \`#1F1E33\`.
    {options:{ephemeral: true}}
    {extraOptions:{interaction: true}}
    ]
    
    $onlyIf[$isValidHex[$textInputValue[hexInput]]==true;Your hex code is invalid, please try to insert an valid hex code.
    {options:{ephemeral: true}}
    {extraOptions:{interaction: true}}
    ]

    $onlyIf[$getGuildVar[akin_embedcolor]!=$textInputValue[hexInput];
that's already being used
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]


    `
}]