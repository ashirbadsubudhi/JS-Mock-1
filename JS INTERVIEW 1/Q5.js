// How to call the function display() in the following code such that it logs the given object on the screen

Object.prototype.display = function(){
    console.log(this);
}

let obj = {a: 100};
obj.display(); // calling display() should output {a: 100}