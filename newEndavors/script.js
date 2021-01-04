const blog = {
    name:'freeCodeCamp'
}
console.log('Before eval: ', blog);

const array = ["😂", "❤️", "😍"];

console.log(array);
const index = array.indexOf("❤️");
if (index > -1) {
    array.splice(index,1)
}
console.log(array);

// ternary operator ?
const myArr = ["😂", "❤️", "😍"];
console.log(myArr);
const myIndex = myArr.indexOf("😂");
myIndex > -1 ? myArr.splice(myIndex, 1) : false;
console.log(myArr);

//one line performance
const emojiArr = "😂❤️😍".split("");
console.log(emojiArr);
emojiArr.indexOf("😍") > -1 ? emojiArr.splice(emojiArr.indexOf("😍"), 1) : false;
console.log(emojiArr);

//using for loop
const someArray = ["😂", "❤️", "😍"];
console.log(someArray);
const outputArray = [];
let foundCount = 0;
const searchValue = "😍";
for (let i = 0; i < someArray.length; i++) {
    if (someArray[i] === searchValue && foundCount === 0)
    {
        foundCount++;
    }
    else {
        outputArray.push(someArray[i]);
    }
}
console.log(outputArray);

//using while
const heartsArray = ["😂", "❤️", "❤️", "❤️", "😍"];
console.log(heartsArray);
let heartsIndex;
while ((heartsIndex = heartsArray.indexOf("❤️")) > -1) {
    heartsArray.splice(heartsArray,1)
}
console.log(heartsArray);

//for loop remove all instances!!!!
const heartbreakerArray = ["😂", "❤️", "❤️", "❤️", "😍"];
console.log(heartbreakerArray);
const myOutputArray = [], mySearchValue = "❤️";
for (let i = 0; i < heartbreakerArray.length; i++) {
    if (heartbreakerArray[i] !== mySearchValue) {
        myOutputArray.push(heartbreakerArray[i]);
    }
}
console.log(myOutputArray);

//ES6 inside method of filter()
const filterThisArray = ["😂","❤️","❤️","❤️","😍"] // Array(5) [ "😂", "❤️", "❤️", "❤️", "😍" ]
console.log(filterThisArray)
const filteredThatArray = filterThisArray.filter((item) => item!=="❤️")
console.log(filteredThatArray) // Array(2) [ "😂", "😍" ]

//avoiding mutation
const starterArray = ["😂", "❤️", "😍"];
const shallowCopyArray = Array.from(starterArray);
const shallow_copy_array = starterArray.slice();
const index2 = shallowCopyArray.indexOf("❤️");
if (index2 > -1) {
    shallowCopyArray.splice(index2,1)
}
console.log(shallowCopyArray, starterArray);
