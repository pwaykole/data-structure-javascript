//function for sequential search with self organization
function seqSearch(arr, data) {
    var len = arr.length;
    var s;
    for (var i = 0; i < len; i++) {
        if (arr[i] === data && i > (arr.length * 0.2)) {
            s = swap(arr, i, 0);
            return s;
        } else if (arr[i] == data) {
            return i + ") " + arr[i];;
        }
    }
    return false;
}

//swapping values to make the array more efficient
function swap(arr, index, index1) {
    var temp = arr[index];
    arr[index] = arr[index1];
    arr[index1] = temp;
    return index1 + ") " + arr[index1];
}

var a = ["David", "Pratyush", "Pratibha", "Nitin", "Onkar", "Rahul", "Neeraj", "Abhishek", "Prathamesh",
    "Goutham", "Sarah", "Oliver", "Gil", "Candace", "Alma", "Jana", "Simone", "Dustin", "Rashad", "Merrill", "Erin",
    "Aline", "Kaden", "Myra", "Marsden", "Brennan", "Pearl", "Jolie", "Mara", "Jamal", "Quintessa", "Cameron", "Francis"
];
//var name = prompt("Enter the name you want to search");
//console.log(seqSearch(a, name));
//console.log(a);

//Binary search
function binSearch(arr, data) {
    var upperBound = arr.length - 1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        if (arr[mid] < data) {
            lowerBound = mid + 1;
        } else if (arr[mid] > data) {
            upperBound = mid - 1;
        } else {
            return mid + ") " + arr[mid];
        }
    }
    return -1;
}

// Used insertion sort for sorting as binary search operates on sorted data only
function insertionsort(arr) {
    var temp, inner;
    for (var outer = 1; outer <= arr.length - 1; ++outer) {
        temp = arr[outer];
        inner = outer;
        while (inner > 0 && (arr[inner - 1] >= temp)) {
            arr[inner] = arr[inner - 1];
            --inner;
        }
        arr[inner] = temp;
    }
}
// insertionsort(a);
// var name = prompt("Enter the name you want to search");
// console.log(binSearch(a, name));
// console.log(a);