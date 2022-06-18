arr = [30, 30, 40, 5, 223, 2049, 3034, 5];

function getUniqueValue(array) {
    set = new Set(arr);
    return [...set];
}
console.log(getUniqueValue(arr));