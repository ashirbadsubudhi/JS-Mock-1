// Implement customMap() function for JS arrays. 
// The functionality should be exactly the same as that of JS native .map() function. 
// Function customMap() should return a new array and not change the array on which we are mapping

Array.prototype.customMap = function(callback) {
    let ans = [];
    for(let i=0; i<this.length; ++i){
        ans.push(callback(this[i], i, this));
    }
    return ans;
}

let arr = [1, 2, 3];
let squaredNums = arr.customMap((item, index) => {
	return item * item;
}); 
console.log(squaredNums); // should output [1, 4, 9]
console.log(arr); // should output [1, 2, 3]
