function transformarStringEnArrayDeNumeros(texto, separador){
    if(texto == null || texto == '')
        return [];
    
    let splitted = texto.split(separador);

    return removerElementosNoNumericos(splitted);
}

function removerElementosNoNumericos(arr){
    let numberArray = [];

    for (let index = 0; index < arr.length; index++) {
        const number = Number(arr[index]);
        
        if(isFinite(number)){
           numberArray.push(number);
        }
    }

    return numberArray;
}

function transformarArrayDeNumerosAUnSoloString(arr, separador){
    return arr.join(separador);
}

export {
    transformarStringEnArrayDeNumeros,
    transformarArrayDeNumerosAUnSoloString
}