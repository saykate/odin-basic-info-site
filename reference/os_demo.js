const os = require('os');

//Platform = darwin (for mac)
console.log(os.platform())

//CPU Arch = arm64
console.log(os.arch())

//CPU Core Info
console.log(os.cpus())

//Free memory
console.log(os.freemem())

//Total memory
console.log(os.totalmem())

//Home directory
console.log(os.homedir())

//Uptime = the time in seconds your system has be up
console.log(os.uptime())