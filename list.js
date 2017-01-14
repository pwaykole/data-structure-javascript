//Lists are one of the most common organizing tools people use in their day-to-day lives.
//We have to-do lists, grocery lists, top-ten lists, bottom-ten lists, and many other types.
//Our computer programs can also use lists, particularly if we only have a few items to
//store in list form. Lists are especially useful if we don’t have to perform searches on the
//items in the list or put them into some type of sorted order. When we need to perform
//long searches or complex sorts, lists become less useful, especially with more complex
//data structures.

function List() {
    this.listSize = 0; //Number of elements in list
    this.pos = 0;  //Current position in list
    this.dataStore = []; // initializes an empty array to store list elements
    this.clear = clear; //Clears all elements from list
    this.find = find;
    this.toString = toString;//Returns string representation of list
    this.insert = insert;//Inserts new element after existing element
    this.append = append;//Adds new element to end of list
    this.remove = remove;//Removes element from list
    this.front = front;//Sets current position to first element of list
    this.end = end;//Sets current position to last element of list
    this.prev = prev;//Moves current position back one element
    this.next = next;//Moves current position forward one element
    this.length = length;//Returns the number of elements in list
    this.currPos = currPos;//Returns the current position in list
    this.moveTo = moveTo;//Moves the current position to specified position
    this.getElement = getElement;//Returns element at current position
    this.contains = contains;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}

function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}

function next() {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}

//to iterate through the list
// for(names.front(); names.currPos() < names.length(); names.next()) {
//     print(names.getElement());
// }
//to iterate reverse through the list
// for(names.end(); names.currPos() >= 0; names.prev()) {
//      print(names.getElement());
// }