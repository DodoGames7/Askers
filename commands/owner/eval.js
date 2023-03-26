module.exports = {
  name: "eval",
  aliases: "e",
  executeAt: "both",
  info: {
    description: "eval something using aoi.js functions",
    usage: "a!eval < code to execute >"
  },
  code: `$eval[$message]
  $onlyIf[$message!=;please evaluate something else to execute!]
  $onlyForIDS[$botOwnerid;]`
}

