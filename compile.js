const path = require("path");
const fs = require("fs");
const solc = require("solc");
const inboxPath = path.resolve(__dirname, "contract", "inbox.sol");
const source = fs.readFileSync(inboxPath, "utf-8");
console.log(source);
module.exports = solc.compile(source, 1).contracts[":Inbox"];
