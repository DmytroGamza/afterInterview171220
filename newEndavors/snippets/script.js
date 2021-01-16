function handleTrue() {
    console.log(true);
}

function handleFalse() {
    console.log(false);
}

//the ternary operator

let someThingTrue = true;
if (someThingTrue) {
    handleTrue()
} else {
    handleFalse()
}

let someThingFalse = -1;
someThingFalse ? handleFalse() : handleTrue();


//Short-Circut Evaluation

const defaultValue = 'SomeDefaultValue';
let someValue1;
let expectingSomeValue = someValue1 || defaultValue;
console.log(expectingSomeValue);

//dafault arguments instead of a short circuiting or conditionals
//short circuiting or conditionals Approach
function createMicrobrewery(name) {
    const breweryName = name || 'Hipster Brew Co.';
    console.log(breweryName);
}
//instead
createMicrobrewery('');


//IF Presence

let someValue = true;
if (someValue) {
    console.log(`It's exist`);
}


//FOR Loops
let a = [];
for (let i = 0; i < 1e2; i++) {
    a.push(i);  
}
console.log(a);


//Loop on Object with keys
let someValues2 = [1, 2, 4];
for (let val in someValues2) {
    console.log(val);
}
let obj = {
    'key1': 'value1',
    'key2': 'value2',
    'key3':'value3'
}
for (let key in obj) {
    console.log(key);
}


//Value-to-Object Map
let x = 'x', y = 'y';
let obj1 = { x, y };
console.log(obj1);


//Object.entries()

