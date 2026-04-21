const os = require('os');

function checkSO() {
    const type = os.type();
    const platform = os.platform();
    const release = os.release();
    const arch = os.arch();
    const hostname = os.hostname();
    const version = typeof os.version === 'function' ? os.version() : '';

    if (version) {
        return `SO: ${type} | Plataforma: ${platform} | Release: ${release} | Arquitectura: ${arch} | Host: ${hostname} | Versión: ${version}`;
    }
    return `SO: ${type} | Plataforma: ${platform} | Release: ${release} | Arquitectura: ${arch} | Host: ${hostname}`;
}

module.exports = checkSO;
