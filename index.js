const checkCPU = require('./cpu');
const checkRAM = require('./ram');
console.log(checkRAM());
const checkDisco = require('./disco');

console.log("=== SISTEMA DE MONITOREO DEVS-OPS ===");
console.log(checkCPU());
console.log(checkRAM());
console.log(checkDisco());
console.log("=====================================");
