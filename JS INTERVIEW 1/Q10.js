//Implement LinkedList class in JS

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insert(data){
        if(this.size === 0){
            this.head = new Node(data);
        }
        else{
            let temp = this.head;
            while(temp.next != null)
                temp = temp.next;
            temp.next = new Node(data);
        }
        this.size += 1;
    }

    delete(){
        if(this.size === 0)
            return "No elements";
        if(this.size === 1){
            let removedData = this.head.data;
            this.head = null;
            this.size = 0;
            return removedData;
        }
        else{
            var temp = this.head;
            while(temp.next.next != null){
                temp = temp.next;
            }
            let removedData = temp.next.data;
            temp.next = null;
            this.size -= 1;
            return removedData;
        }
    }

    traverse(){
        let temp = this.head;
        while(temp!=null){
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

let ll = new LinkedList();
ll.insert(10);
console.log(ll.delete());
console.log(ll.delete());
// ll.insert(20);
// ll.insert(30);
// console.log(ll.delete());
ll.traverse();