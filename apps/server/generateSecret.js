const crypto = require("crypto");

const secret = crypto.randomBytes(32).toString("hex");

console.log("psst, here's your secret", secret);