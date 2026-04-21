const os = require('os'); // Importamos el módulo del sistema operativo

function checkRAM() {
    const memoriaTotal = os.totalmem(); // En bytes
    const memoriaLibre = os.freemem();  // En bytes
    const memoriaUsada = memoriaTotal - memoriaLibre;

    // Convertimos bytes a Gigabytes para que sea legible (1024^3)
    const totalGB = (memoriaTotal / Math.pow(1024, 3)).toFixed(2);
    const usadaGB = (memoriaUsada / Math.pow(1024, 3)).toFixed(2);
    
    // Calculamos el porcentaje de uso
    const porcentajeUso = ((memoriaUsada / memoriaTotal) * 100).toFixed(2);

    return `RAM Total: ${totalGB}GB | En uso: ${usadaGB}GB (${porcentajeUso}%)`;
}

module.exports = checkRAM;