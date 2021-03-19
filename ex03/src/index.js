function rangeOfNumbers(startN, endN) {
    if (endN - startN === 0) {
        return [startN];
    }
    else {
        if (startN > endN){
            return "The starting number will always be less than or equal to the ending number"
        }
        const range = rangeOfNumbers(startN, endN - 1);
        range.push(endN);
        return range;

    }
}

console.log(rangeOfNumbers(1, 3));
console.log(rangeOfNumbers(3, 10));
console.log(rangeOfNumbers(5, 5));
console.log(rangeOfNumbers(7, 5));
module.exports = rangeOfNumbers;