module.exports = {
  name: "InviteLogger",
  channel: "",
  type: "ready",
  code: `$log[Ready! Invite the bot here: $getClientInvite[sendmessages;viewchannel;managemessages]
  WARNING: you're using an Preview build of Askers. Stuff like features in this version are subject to change before the final release.]
`
}
