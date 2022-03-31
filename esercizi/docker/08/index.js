const os = require("os");
const hostname = os.hostname();

const message = process.argv.slice(2).join(" ");

console.log("hello from " + (message.length > 0 ? message : hostname));
