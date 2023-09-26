function generateFibonacci(n) {
    var fibonacciArray = [];
    if (n >= 1) {
        fibonacciArray.push(0);
    }
    if (n >= 2) {
        fibonacciArray.push(1);
    }

    for (var i = 2; i < n; i++) {
        var nextNumber = fibonacciArray[i - 1] + fibonacciArray[i - 2];
        fibonacciArray.push(nextNumber);
    }

    return fibonacciArray;
}

var n = 10; 
var fibonacciSequence = generateFibonacci(n);
console.log("前 " + n + " 个斐波那契数列：");
console.log(fibonacciSequence);