module.exports = {
  name: "InviteLogger",
  channel: "",
  type: "ready",
  code: `$log[Ready! Invite the bot here: $getClientInvite[sendmessages;viewchannel;managemessages]
  Tip: run "devcmds" to see list of dev commands that you can use.]
`
}
