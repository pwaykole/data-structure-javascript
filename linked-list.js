//The Node class consists of two properties: element, which store’s the node’s data, and
//next, which stores a link to the next node in the linked list.
function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

function LList() {
    this.head = new Node("head");
    //this.head.next = this.head; // for circular link list - everytime a new node is inserted it pints towards the head
    this.find = find;
    this.insert = insert;
    this.findPrevious = findPrevious;
    this.remove = remove;
    this.display = display;
    this.findLast = findLast;
    this.dispReverse = dispReverse;
    //this.dispCircular = dispCircular; //for displaying circular link list
}

function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
}

function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

function findPrevious(item) {
    var currNode = this.head;
    while (!(currNode.next == null) && (currNode.next.element != item)) {
        currNode = currNode.next;
    }
    return currNode;
}

//this is remove function for singly link list
// function remove(item) {
//     var prevNode = this.findPrevious(item);
//     if (!(prevNode.next == null)) {
//         prevNode.next = prevNode.next.next;
//     }
// }

//this is remove function for Doubly link list & findPrevious() wont be of any use for Doubly link list
function remove(item) {
    var currNode = this.find(item);
    if (!(currNode.next == null)) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}

function findLast() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        currNode = currNode.next;
    }
    return currNode;
}

function dispReverse() {
    var currNode = this.findLast();
    while (!(currNode.previous == null)) {
        console.log(currNode.element);
        currNode = currNode.previous;
    }
}

function dispCircular() {
    var currNode = this.head;
    while (!(currNode.next == null) && !(currNode.next.element == "head")) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log("----------");
cities.remove("Alma");
cities.display();
console.log("----------");
cities.dispReverse();
//cities.dispCircular();