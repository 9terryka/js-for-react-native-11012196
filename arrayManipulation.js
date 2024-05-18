function processArray(array) {
    var result = [];
    
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) { 
            result.push(array[i] * array[i]);
        } else {
            result.push(array[i] * 3);
        }
    }
    
    return result;
}

var inputArray = [1, 2, 3, 4, 5];
var outputArray = processArray(inputArray);
console.log(outputArray);