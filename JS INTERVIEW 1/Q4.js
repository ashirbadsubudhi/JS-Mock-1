// Implement a function sum() in the following way such that it gives the sum of two numbers

function sum(para1){
    return function(para2){
        return para1 + para2;
    };
}


console.log(sum(1)(2)); // should output 3
console.log(sum(10)(2)); // should output 12