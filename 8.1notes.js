function multiply(x, y){
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function subtract(x, y) {
    return x - y;
}

function add(x, y) {
    return x + y;
}

function power(x, y) {
    return x ** y;
}

const mathFuncs = [add, subtract, multiply, divide, power];

function doAllMath(a,b,mathFuncs) {
    for (let func of mathFuncs) {
        console.log(func(a,b));
    }
}

// forEach

const colors = ['red', 'green', 'blue', 'teal']

function yell(val, i) {
    const caps = val.toUpperCase()
    console.log(`At index ${i}, ${caps}`)
}

colors.forEach(yell)

// colors.forEach(function(el, index, arr)) {

// };

// myForEach

function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++){
        callback(arr[i], i);
    }
}

forEach(colors, function(color, i){
    console.log(color.toUpperCase(), 'at index of:', i);
})

colors.forEach(function(color, i) {
    console.log(color.toUpperCase(), 'at index of:', i);
});