module.exports = {
  name: "e",
  code: `$eval[$message]
  $onlyIf[$message!=;please evaluate something else to execute!]
  $onlyForIDS[$botOwnerid;]`
}