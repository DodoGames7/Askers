module.exports = {
    name: "slash",
    executeAt: "guild",
    info: {
        description: "Enable slash commands for this server."
      },
    code: `$title[Slash Commands support]
    $description[We're currently offering an experimental support for Slash Commands. This is where you can play Askers game without using the prefix commands to do that! Have in mind that there are limits such as:
> 1. Text mode is not avaliable on Slash commands support as slash only focuses on interaction, and so therefore it does not work with message stuff from prefix.
> 2. You can only enable this Feature once. If you want to disable it then click on "Disable" button.
> 3. You can only enable/disable this Feature per 15 seconds, this is so to prevent spamming discord api.

In case, if you're ready, click on the "Enable" button. This process will take few moments
$get[slashsettingchecker]
]
$color[Yellow]
$addButton[1;Disable;4;slashdisable_$authorID;false]
$addButton[1;Enable;3;slashenable_$authorID;false]
$onlyPerms[manageguild;You must have \`ManageServer\` permission to use this.]
$let[slashsettingchecker;$replaceText[$replaceText[$getGuildVar[akin_isslashenabled];true;*This feature is currently enabled.*];false;*This feature is currently disabled.*]]`
}