//Implement a function propertyExists(obj, path) 
//that takes in an object and a path (string) as arguments 
//and returns ‘False’ if the property doesn’t exist on that object or is null, 
//else returns the value of the property

function propertyExists(obj, path){
    let pathSplit = path.split('.');
    for(let i=0; i<pathSplit.length; ++i){
        if(obj[pathSplit[i]] === undefined)
            return false;
        obj = obj[pathSplit[i]];
    }
    return obj;
}

const obj = {
    a: 1,
    b: 2,
    c: {
        d: 100,
        e: {
            f: 45
        }
    }
};
    
console.log(propertyExists(obj, "c.d")); // should output 100
console.log(propertyExists(obj, "c.d.g.h")); // should output false
console.log(propertyExists(obj, "a.b")); // should output false 
console.log(propertyExists(obj, 'c.e.f')); // should output 45