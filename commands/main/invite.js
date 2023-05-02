module.exports = {
  name: "invite",
  executeAt: "both",
  info: {
    description: "There is a reason on why this exists"
  },
  code: `$title[Inviting Askers]
  $description[You can invite Askers to your discord server by clicking on the button Below.]
  $addButton[1;Invite;5;$nonEscape[$getClientInvite[sendmessages;viewchannel;managemessages]];false]
  `
}