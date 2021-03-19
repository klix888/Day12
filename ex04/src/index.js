function sumFibonacci(num) {
    var previusNum = 0;
    var currentNum = 1;
    var result = 0;
   
    while (currentNum <= num) {
        if (currentNum % 2 != 0) {
            result += currentNum;
        }
        if (num === 1) {
            result = 1;
        }
       
        currentNum += previusNum;
        previusNum = currentNum - previusNum;
    }
    
    return result;
}
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;