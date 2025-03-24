console.log("----------------- os Core Built-in module -----------------");

const os = require('os');

console.log(`os hostname: ${os.hostname()}`); //gets hostname
console.log(`os type: ${os.type()}`); //gets os type
console.log(`os platform: ${os.platform()}`); //gets os platform
console.log(`os arch: ${os.arch()}`); //gets os arch
console.log(`os temp dir: ${os.tmpdir()}`); //gets os temp dir
console.log(`os release: ${os.release()}`); //gets os release
console.log(`os cpu: ${os.cpus()}`); //gets os cpu
console.log(`os total memory: ${os.totalmem()}`); //gets os total memory
console.log(`os free memory: ${os.freemem()}`); //gets os free memory
// console.log(`os user info: ${os.userInfo()}`); //gets os user info

