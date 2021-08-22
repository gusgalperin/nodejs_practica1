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

/*
https://nodejs.org/api/fs.html#fs_file_system_flags 

'w': Open file for writing. The file is created (if it does not exist) or truncated (if it exists).

'wx': Like 'w' but fails if the path exists.
*/

function escribirTextoEnArchivo(ruta, texto, crearSiNoExiste){
    try{
        fs.writeFileSync(ruta, texto, {flag : crearSiNoExiste ? 'w' : 'wx'});
    }
    catch(err){
        throw new Error(err);
    }
}

export {
    leerArchivoComoString,
    escribirTextoEnArchivo
}