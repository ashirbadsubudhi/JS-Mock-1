// Implement customMap() function for JS arrays. 
// The functionality should be exactly the same as that of JS native .map() function. 
// Function customMap() should return a new array and not change the array on which we are mapping

Array.prototype.customMap = function() {
    let ans = [];
    for(let i=0; i<this.length; ++i){
        ans.push(this[i]*this[i]);
    }
    return ans;
}

let arr = [1,2,3];
let result = arr.customMap();
console.log(result);
console.log(arr);