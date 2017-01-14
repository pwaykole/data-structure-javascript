function Dictionary() {
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}

function add(key, value) {
    this.datastore[key] = value;
}

function find(key) {
    return this.datastore[key];
}

function remove(key) {
    delete this.datastore[key];
}

//The keys() function, when called with an object, returns all the keys stored in that object.
function showAll() {
    var key  = Object.keys(this.datastore).sort();
    var sortedDict = [];
    for (i = 0; i < key.length; i++)
    {
        //get the current key
        k = key[i];
        //applying key value to sortedDict
        sortedDict[k] = this.datastore[k];
    }
    for (var k in sortedDict) {
        console.log(k + " -> " + sortedDict[k]);
    }
}

//we could have got the count by getting the length but with string keys .length gives 0
function count() {
    var n = 0;
    for (var key in this.datastore) {
        ++n;
    }
    return n;
}

function clear() {
    for (var key in this.datastore) {
        delete this.datastore[key];
    }
}

var pbook = new Dictionary();
pbook.add("Mike", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("David's extension: " + pbook.find("David"));
pbook.remove("David");
pbook.showAll();
console.log(pbook.count());
pbook.clear();
console.log(pbook.count());