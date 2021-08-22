function combinarDosArrays(arr1, arr2){
    let arr3 = [];
    let index1 = 0;
    let index2 = 0;
    
    while (index1 < arr1.length && index2 < arr2.length) {
        if(arr1[index1] == arr2[index2]){
            arr3.push(arr1[index1]);
            index1++;
            index2++;
        }
        else if(arr1[index1] < arr2[index2]){
            arr3.push(arr1[index1]);
            index1++;
        }
        else{
            arr3.push(arr2[index2]);
            index2++;
        }
    }

    while (index1 < arr1.length) {
        arr3.push(arr1[index1]);
        index1++;
    }

    while (index2 < arr2.length) {
        arr3.push(arr2[index2]);
        index2++;
    }

    return arr3;
}

function combinarNArrays(arrs){
    if(arrs.length <= 1){
        return arrs[0]
    }

    let arrFinal = [];

    for (let index = 0; index < arrs.length; index++) {
        arrFinal = combinarDosArrays(arrFinal, arrs[index]);
    }

    return arrFinal;
}

export{
    combinarDosArrays,
    combinarNArrays
}