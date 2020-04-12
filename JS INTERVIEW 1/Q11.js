//Implement Stack class in JS

class Stack {
    constructor(){
        this.stack = [];
    }

    //push element to stack
    push(element) {
        //this.stack.push(element);
        this.stack.unshift(element);
    }

    //pop element from stack
    pop(){
        //return this.stack.pop();
        return this.stack.shift();
    }

    //return top element from stack
    peek(){
        return this.stack[0];
    }

    //return stack size
    size(){
        return this.stack.length;
    }
}

let s1 = new Stack();
s1.push(10);
s1.push(20);
console.log(s1.pop());
console.log(s1.peek());