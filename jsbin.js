a = ["Mike","Matt","Nancyi","Adam","Jenny","Nancy","Carl999"];

// unique
var unique = a.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
});

//longest
var longest = a.reduce(function (a, b) {
  return a.length > b.length ? a : b;
});

//sort string
var string='ACBacb';
console.log(string.split('').sort(caseInsensitiveSort).join(''));

function caseInsensitiveSort(a, b)
{
   var ret = 0;
   a = a.toLowerCase();
   b = b.toLowerCase();
   if(a > b)
      ret = 1;
   if(a < b)
      ret = -1;
   console.log(ret)
   return ret;
}


//Anagram
// Words to match
var words = ["dell","bca", "ledl", "abc", "cba"];

// The output object
var anagrams = {};

function sortWord(s)
{
  return s.split('').sort().join('');
}

for (var i in words) {
    var word = words[i];

    // sort the word like you've already described
    var sorted = sortWord(word);
    // If the key already exists, we just push
    // the new word on the the array
    if (anagrams[sorted] != null) {
        anagrams[sorted].push(word);
    }
    // Otherwise we create an array with the word
    // and insert it into the object
    else {
        anagrams[sorted] =  [word] ;
    }
}

for (var a in anagrams) {
  console.log(a + " : " + anagrams[a]);
}

///// important array flatten
var arr = ["1", 2, [[[[3]]]], [4,[5,[6]],[[[[[7]]]]]], {name: "Pratyush"}];

function unArray(a){
  var arr2 = [];
  a.forEach(function(val){
    if(typeof val === "string" || typeof val === "number")
      {
        arr2.push(val);
      }
    else if(Array.isArray(val) === true)
    {
      arr2 = arr2.concat(unArray(val));
    }
  });
  return arr2;
}

console.log(unArray(arr));

//Reverse a string in a string
var x = "Hi there I am Pratyush fuckk off goutham"
function reverse(str, data){
  data.forEach(function(val){
    var a = val.split('').reverse().join('');
    str = str.replace(val, a);
  });

  return str;
}

console.log(reverse(x, ["there", "Pratyush", "fuck", "goutham"]));

// generating random mobile numbers
var myArray = [1,2,3,4,5,6,7,8,9,0]

function createPhoneNumber(arr){
  var rand, str = "", x = [];
  for(i = 0; i < arr.length; i++)
    {
     rand = arr[Math.floor(Math.random() * arr.length)];
     str +=  rand;
    }
  x = str.split('');
  x.splice(0, 0, "(");
  x.splice(4,0,")");
  x.splice(8,0,"-");
  x.splice(5,0," ");
  return x.join('');
}

console.log(createPhoneNumber(myArray));

//Long palindrome in a string
var str = "I like racecar nitin that go fast";
function longestPalindrome(s){
 var a = s.split(' ');
 var b = "", x = [], longestWord = 0, word;
 a.forEach(function(val){
   b = val.split('').reverse().join('');
   if(val === b)
     {
       x.push(val);
     }
 });
 for(var i = 0; i < x.length; i++){
    if(x[i].length > longestWord)
     {
        longestWord = x[i].length;
        word =  x[i];
     }
  }
  return word;
}

console.log(longestPalindrome(str));

// finding the odd in the string
function check(arr){
  var z = [];
  for(i = 0; i < arr.length; i++)
    {
      if(arr[i] % 2 !== 0)
        {
          z.push(false);
        }
      else{
        z.push(true);
      }
    }
  return z;
}
function iqTest(numbers){

 var a = [], b, c, tru = 0, fls =0;
 var x = numbers.split(' ');
 x.forEach(function(val){
   a.push(parseInt(val));
 });
 b = check(a);
 b.filter(function(val){
   var q = [];
    if(val === true)
      {
        tru++;
      }
   else{
     fls++
   }
 });
  if(tru > fls)
    {
      for(i = 0; i < b.length; i++)
        {
          if(b[i] === false)
            {
              c = i + 1;
            }
        }
      return c;
    }else if(fls > tru)
      {
       for(i = 0; i < b.length; i++)
        {
          if(b[i] === true)
            {
              c = i + 1;
            }
        }
        return c;
      }
}

console.log("The odd in the series is at position: " + iqTest("1 1 2"));

//human readable for time "seconds are passed to the function"
function humanReadable(seconds) {
var hours = parseInt( seconds / 3600 ) ;
var minutes = parseInt( seconds / 60 ) % 60;
var seconds = seconds % 60;

var pad = function(val){
  return val < 10 ? "0" + val : val;
}

return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
}

console.log(humanReadable(899976));

// Find largest 5 digit number in a string
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

function solution(digits){
  var len = digits.length, x, z = [], len2;

  for(var i = 0; i < len; i++)
    {
      x = digits.slice(i, i+5);
      len2 = x.length;
      if(len2 < 5)
        {
          break;
        }
      z.push(parseInt(x));
    }
  var val = z.max();
  return val;
}

console.log(solution("283910938462764529"));

// remove first letter of string
function pigIt(str){
  //Code here
  var arr = str.split(' ');
  var arr3 = [];
  var z = arr.forEach(function(val){
    var arr2 = val.split('');
    var x = arr2.shift();
    arr2.push(x+"ay");
    arr3.push(arr2.join(''));

  });
   return arr3.join(' ');
}

console.log(pigIt("Pig latin is cool")); // igPay atinLay siay oolcay

// To camel case
function toCamelCase(str){
 // Lower cases the string
  return str.toLowerCase()
    .replace( /[-_]+/g, ' ')
    // Uppercase the character just next to space
    .replace( / (.)/g, function($1) {
        return $1.toUpperCase();
    })
    // Removes spaces
    .replace( / /g, '' );

}

console.log(toCamelCase("the-stealth-warrior"));

// Functional Programming Examples
function mapForEach(arr, fn){
  var arr2 = [];
  for(i = 0; i < arr.length; i++)
    {
      arr2.push(fn(arr[i]));
    }
  return arr2;
}

 console.log(mapForEach([1,2,3], function(item){
   return item * 5;
 }));

var checkLimit = function(limiter, item){
  return item > limiter;
}

console.log(mapForEach([1,2,3],checkLimit.bind(this,1)));

var checkLimiterSimplified = function(limiter){
  return function(limiter, item){
    return item > limiter
  }.bind(this,limiter);
}

console.log(mapForEach([1,2,3],checkLimiterSimplified(1)));