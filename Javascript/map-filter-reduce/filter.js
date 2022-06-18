nums = [1, 2, 3, 4, 5, 6 ,7, 8];

function numerosPares(array){
    return array.filter(callback);
}

function callback(item){
    return item % 2 == 0;
}

console.log(numerosPares(nums));