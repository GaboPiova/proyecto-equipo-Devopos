const { execSync } = require('child_process');

function checkDisco() {
    try {
        // Ejecutamos el comando 'df' de Linux para ver el espacio en la raíz (/)
        const stdout = execSync('df -h / --output=size,used,avail,pcent').toString();
        
        // Limpiamos la salida para obtener solo los datos
        const lineas = stdout.trim().split('\n');
        const datos = lineas[1].trim().split(/\s+/);

        const total = datos[0];
        const usado = datos[1];
        const disponible = datos[2];
        const porcentaje = datos[3];

        return `DISCO: Total: ${total} | Usado: ${usado} | Disponible: ${disponible} | Uso: ${porcentaje}`;
    } catch (error) {
        return "DISCO: No se pudo obtener la información (Error de sistema)";
    }
}

module.exports = checkDisco;
