// The commented functions are different ways to avoid collision uncomment them as per comments provided below in constructor definition

function HashTable() {
    this.table = new Array(137); //size of array is 137
    this.hashing = hashing;
    this.showTable = showTable;
    this.put = put;
    this.get = get;
    //this.scPut = scPut; // put funciton for Seprate Chaining
    //this.scGet = scGet;// get function for Seprate Chaining
    //this.scShowTable = scShowTable; // display funciton for Seprate Chaining
    //this.buildChains = buildChains; // Adding new blank array to each array element: Seprate Chaining
    //this.values = []; // Adding this extra array for storing values associated with the key in values arrays this is for Linear probing
    //this.lpPut = lpPut; // this is a put function for Linear probing
    //this.lpGet = lpGet; // this is a get function for Linear probing
    //this.lpShowTable = lpShowTable; // this is a display function for Linear probing
}

function hashing(string) {
    const H = 31; //this is taken to avoid collision
    var total = 0;
    for (var i = 0; i < string.length; ++i) {
        total += H * total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
        total += this.table.length - 1;
    }
    return parseInt(total);
}

function put(key, data) {
    var pos = this.hashing(key);
    this.table[pos] = data;
}

function showTable() {
    var n = 0;
    for (var i = 0; i < this.table.length; ++i) {
        if (this.table[i] != undefined) {
            console.log(i + ": " + this.table[i]);
        }
    }
}

function get(key) {
    return this.table[this.hashing(key)];
}

//To handle collision of hash keys two seprate methods are used 1) Seprate Chaining 2) Linear Probing

// 1) Seprate Chaining: To implement separate chaining, after we create the array to store the hashed keys, we
//call a function that assigns an empty array to each array element of the hash table.

// function buildChains() {
//     for (var i = 0; i < this.table.length; ++i) {
//         this.table[i] = new Array();
//     }
// }

// function scPut(key, data) {
//     var pos = this.hashing(key);
//     var index = 0;
//     if (this.table[pos][index] == undefined) {
//         this.table[pos][index + 1] = data;
//          ++index;
//     }
//     else {
//         while (this.table[pos][index] != undefined) {
//             ++index;
//         }
//         this.table[pos][index] = data;
//     }
// }

// function scGet(key) {
//     var index = 0;
//     var pos = this.hashing(key);
//     if (this.table[pos][index] = key) {
//         return this.table[pos][index + 1];
//          index += 2;
//     }
//     else {
//         while (this.table[pos][index] != key) {
//             index += 2;
//         }
//         return this.table[pos][index + 1];
//     }
//     return undefined;
// }

// function scShowTable() {
//     var n = 0;
//     for (var i = 0; i < this.table.length; ++i) {
//         if (this.table[i][0] === undefined) {
//             console.log(i + ": " + this.table[i]);
//         }
//     }
// }

// 2) Linear Probing for avoiding collision
// Linear probing put function
// function lpPut(key, data) {
//     var pos = this.hashing(key);
//     if (this.table[pos] == undefined) {
//         this.table[pos] = key;
//         this.values[pos] = data;
//     } else {
//         while (this.table[pos] != undefined) {
//             pos++;
//         }
//         this.table[pos] = key;
//         this.values[pos] = data;
//     }
// }

// //Linear Probing get function
// function lpGet(key) {
//     var hash = -1;
//     hash = this.hashing(key);
//     if (hash > -1) {
//         for (var i = hash; this.table[hash] != undefined; i++) {
//             if (this.table[hash] == key) {
//                 return this.values[hash];
//             }
//         }
//     }
//     return undefined;
// }

// //linear probing display function
// function lpShowTable() {
//     for (var i = 0; i < this.table.length; ++i) {
//         if (this.table[i] != undefined) {
//             console.log(i + ": " + this.table[i]);
//         }
//     }

//     for (var i = 0; i < this.values.length; ++i) {
//         if (this.values[i] != undefined) {
//             console.log(i + ": " + this.values[i]);
//         }
//     }

// }

//Hashing phone numbers with name's
var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var numbers = [2018900001, 2019000002, 2019100003, 2019200004, 2019200005, 2019400006, 2019500007, 2019600008, 2019700009];
var htable = new HashTable();
//htable.buildChains();//for Seperate chaining only uncomment this while using seperate chaining
for (var i = 0; i < someNames.length; ++i) {
    htable.put(someNames[i], numbers[i]);// change the put function here according to avoiding collision.
}

htable.showTable();
//htable.scShowTable();// calling display function for Seperate chining
//htable.lpShowTable();// calling display function for Linear probing
var name = prompt("Type the name for getting the phone number");
console.log("The Phone Number for " + name + " is: " + htable.get(name));// change the get function here according to avoiding collision.