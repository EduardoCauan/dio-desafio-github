function substituirArray(array){
    if (!array) return -1;
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 == 0){
            array[i] = 0;
        }
    }
    return array;
}

let a = [1, 2, 3, 6, 8];
console.log(substituirArray(a));