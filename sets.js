//A set is a collection of unique elements. The elements of a set are called members. The
//two most important properties of sets are that the members of a set are unordered and
//that no member can occur in a set more than once. Sets play a very important role in
//computer science but are not considered a data type in many programming languages.
//Sets can be useful when you want to create a data structure that consists only of unique
//elements, such as a list of each unique word in a text.

function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.contains = contains;
    this.union = union;
    this.intersect = intersect;
    this.subset = subset;
    this.difference = difference;
    this.show = show;
}

// to add data to the set since set has unique data hence indexOf will check if data is present or not if not then return -1
function add(data) {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        this.dataStore.sort();
        return true;
    } else {
        return false;
    }
}
// Remove the data using splice
function remove(data) {
    var pos = this.dataStore.indexOf(data);
    if (pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
    } else {
        return false;
    }
}
// Display the data
function show() {
    return this.dataStore;
}
// to check wether the set contains the data or not
function contains(data) {
    if (this.dataStore.indexOf(data) > -1) {
        return true;
    } else {
        return false;
    }
}

// Union funcrion
function union(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        tempSet.add(this.dataStore[i]);
    }
    for (var i = 0; i < set.dataStore.length; ++i) {
        if (!tempSet.contains(set.dataStore[i])) {
            tempSet.dataStore.push(set.dataStore[i]);
        }
    }
    return tempSet;
}
// Intersect function
function intersect(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

// Subset function
function subset(set) {
    if (this.size() > set.size()) {
        return false;
    } else {
        for (var i = 0; i < this.dataStore.length - 1; i++) {
            if (!set.contains(this.dataStore[i])) {
                return false;
            } else {
                return true;
            }
        }
    }
}

// Size function
function size() {
    return this.dataStore.length;
}

// Function difference
function difference(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (!set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

var cis = new Set();
cis.add("Mike");
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Raymond");
console.log(cis.show());
var dmp = new Set();
dmp.add("Raymond");
dmp.add('Clayton');
//var it = new Set();
var it = cis.difference(dmp);
//console.log(it.show());
console.log(it);