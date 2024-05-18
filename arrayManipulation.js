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

function formatArrayStrings(strings, numbers) {
    var formattedStrings = [];
    

    for (var i = 0; i < strings.length; i++) { 
        if (numbers[i] % 2 === 0) {
            formattedStrings.push(strings[i].toUpperCase());
        } else {
            formattedStrings.push(strings[i].toLowerCase());
        }
    }
    
    return formattedStrings;
}

var inputStrings = ["Hi", "Terry", "Python", "Coding"];
var inputNumbers = [1, 2, 3, 4];
var processedNumbers = processArray(inputNumbers);
var formattedStrings = formatArrayStrings(inputStrings, processedNumbers);
console.log(formattedStrings);