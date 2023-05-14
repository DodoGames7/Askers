module.exports = {
  name: "InviteLogger",
  channel: "",
  type: "ready",
  code: `$log[Ready! Invite the bot here: $getClientInvite[sendmessages;viewchannel;managemessages]
  WARNING: you're using an Alpha build of Askers. This version is subject to have bugs. Use it at your own risk!]
`
}
