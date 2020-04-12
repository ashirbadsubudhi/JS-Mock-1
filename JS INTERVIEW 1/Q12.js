//Implement Queue class in JS

class Queue {
    constructor(){
        this.queue = [];
    }

    //Enqueue element to queue
    enQueue(element) {
        this.queue.push(element);
    }

    //Dequeue element from queue
    deQueue(){
        return this.queue.shift();
    }

    //return top element from queue
    peek(){
        return this.queue[0];
    }

    //return queue size
    size(){
        return this.queue.length;
    }
}

let q1 = new Queue();
q1.enQueue(10);
q1.enQueue(20);
console.log(q1.deQueue());
console.log(q1.peek());