const checkCPU = require('./cpu');
const checkRAM = require('./ram');
// const checkDisco = require('./disco');  <-- Comentado

console.log("=== SISTEMA DE MONITOREO DEVS-OPS ===");
console.log(checkCPU());
console.log(checkRAM());
console.log(checkDisco());
console.log("=====================================");
