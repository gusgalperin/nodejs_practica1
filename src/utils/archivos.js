import fs from 'fs'

function leerArchivoComoString(ruta){
    try {
        return fs.readFileSync(ruta, 'utf-8');
    }
    catch (err) {
        console.log(`error leyendo archivo: ${err}`);
        return '';
    }
}

function escribirTextoEnArchivo(ruta, texto, crearSiNoExiste){
    let archivoExiste = fs.existsSync(ruta);

    if(!archivoExiste && !crearSiNoExiste)
        throw new Error("el archivo no existe");

    fs.writeFileSync(ruta, texto);
}

export {
    leerArchivoComoString,
    escribirTextoEnArchivo
}