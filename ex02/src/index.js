//Only change code below this line
function myCounter(n) {
    if (n < 1) {
        return [];
    }
    else {
        const counter = myCounter(n-1)
        counter.unshift(n);
        return counter;
    }
}

//Only change code above this line
console.log(myCounter(-1));
console.log(myCounter(10));
console.log(myCounter(5));
module.exports = myCounter;