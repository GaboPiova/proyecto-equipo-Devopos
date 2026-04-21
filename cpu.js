const os = require('os');

function checkCPU() {
    const cpus = os.cpus(); // devuelve un array con info de cada núcleo
    const modelo = cpus[0].model; // modelo del primer núcleo
    const velocidad = cpus[0].speed; // velocidad en MHz
    const cantidadNucleos = cpus.length;

    return `CPU: ${modelo} - Velocidad: ${velocidad} MHz - Núcleos: ${cantidadNucleos}`;
}

module.exports = checkCPU;