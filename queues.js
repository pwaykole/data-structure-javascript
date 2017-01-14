//queue constructor function or class
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}
//The enqueue() function adds an element to the end of a queue
function enqueue(element) {
    this.dataStore.push(element);
}
//The dequeue() function removes an element from the front of a queue
// function dequeue() {
//     return this.dataStore.shift();
// }
//We can examine the front and back elements of a queue using these functions
function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

//to display all elements in queue
// function toString() {
//     var retStr = "";
//     for (var i = 0; i < this.dataStore.length; ++i) {
//         retStr += this.dataStore[i] + "\n";
//     }
//     return retStr;
// }

//Finally, we need a function that lets us know if a queue is empty
function empty() {
    if (this.dataStore.length == 0) {
        return true;
    } else {
        return false;
    }
}

// test the code with examples
// var q = new Queue();
// q.enqueue("Meredith");
// q.enqueue("Cynthia");
// q.enqueue("Jennifer");
// console.log(q.toString());
// q.dequeue();
// console.log(q.toString());
// console.log("Front of queue: " + q.front());
// console.log("Back of queue: " + q.back());

// radix sort
// The radix sort works by making two passes over a data set, in this case the set of integers
// from 0 to 99. The first pass sorts the numbers based on the 1s digit, and the second pass
// sorts the numbers based on the 10s digit. Each number is placed in a bin based on the
// digit in each of these two places. Given these numbers:
// 91, 46, 85, 15, 92, 35, 31, 22
// the first pass of the radix sort results in the following bin configuration:
// Bin 0:
// Bin 1: 91, 31
// Bin 2: 92, 22
// Bin 3:
// Bin 4:
// Bin 5: 85, 15, 35
// Bin 6: 46
// Bin 7:
// Bin 8:
// Bin 9:
// Now the numbers are sorted based on which bin they are in:
// 91, 31, 92, 22, 85, 15, 35, 46
// Next, the numbers are sorted by the 10s digit into the appropriate bins:
// Bin 0:
// Bin 1: 15
// Bin 2: 22
// Bin 3: 31, 35
// Bin 4: 46
// Bin 5:
// Bin 6:
// Bin 7:
// Bin 8: 85
// Bin 9: 91, 92
// Finally, take the numbers out of the bins and put them back into a list, and you get the
// following sorted list of integers:
// 15, 22, 31, 35, 46, 85, 91, 92
function distribute(nums, queues, n, digit) {
    //console.log(nums,queues,n,digit);
    for (var i = 0; i < n; ++i) {
        if (digit == 1) {
            queues[nums[i] % 10].enqueue(nums[i]);
        } else {
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}

function collect(queues, nums) {
    var i = 0;
    for (var digit = 0; digit < 10; ++digit) {
        while (!queues[digit].empty()) {
            nums[i++] = queues[digit].dequeue();
        }
    }
}

function dispArray(arr) {
    for (var i = 0; i < arr.length; ++i) {
        console.log(arr[i] + " ");
    }
}
// main program
var queues = [];
for (var i = 0; i < 10; ++i) {
    queues[i] = new Queue();
}

var nums = [];
for (var i = 0; i < 10; ++i) {
    nums[i] = Math.floor(Math.floor(Math.random() * 101));
}
// console.log("Before radix sort: ");
// dispArray(nums);
// distribute(nums, queues, 10, 1);
// collect(queues, nums);
// distribute(nums, queues, 10, 10);
// collect(queues, nums);
// console.log("\n\nAfter radix sort: ");
// dispArray(nums);

//Priority Queue with examples
function Patient(name, code) {
    this.name = name;
    this.code = code;
}
//new dqueue function
function dequeue() {
    var priority = this.dataStore[0].code;
    for (var i = 1; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].code < priority) {
            priority = i;
        }
    }
    return this.dataStore.splice(priority, 1);
}
//Finally, we add a toString() function modified to handle Patient objects:
function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i].name + " code: " +
            this.dataStore[i].code + "\n";
    }
    return retStr;
}

var p = new Patient("Smith", 5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
console.log(ed.toString());
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());
// another round
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());