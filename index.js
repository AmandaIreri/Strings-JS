let a = 'extravaganza'
console.log({character : a[8]});
console.log({character : a[9]});
console.log({character : a[10]})
console.log({character : a[11]})

//2 Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"

const food = "The quick fox jumped over the lazy dog";
const insert = "eat"

//Question 3 Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"

story= "The quick brown fox jumps over the lazy dog";
let x = "The quick brown fox jumps over the lazy dog";
let y = "brown"
let f = x.split(y).length -1;
console.log({f})


//4 Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"

const string1 = "The pupils are reading in the library"
console.log(string1.includes("are"))

string2 = "The child was sitting on the table before it fell"
console.log(string2.includes("sitting"))






//Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"
let word = "wonderful"
console.log(word.toUppercase)
