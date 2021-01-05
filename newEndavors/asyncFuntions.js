//async function
const networkRequest = () => {
    setTimeout(() => {
        console.log('Async Code');
    }, 2500);
};
console.log('Hello Stranger!');

networkRequest();

console.log('The End!');

//DOM Events
document.querySelector('.btn').addEventListener('click', (event) => {
    console.log('Button Clicked');
});

//Promise
console.log('Script Start');
setTimeout(() => {
    console.log('SetTimeOut');
}, 0);
new Promise((resolve, reject) => {
    resolve('Promise resolved');
}).then(res => console.log(res))
    .catch(err => console.log(err));

console.log('Script End');

//two of each Promise and setTimeOut
console.log('Script start');
setTimeout(() => {
  console.log('setTimeout 1');
}, 1200);
setTimeout(() => {
  console.log('setTimeout 2');
},0);
new Promise((resolve, reject) => {
    resolve('Promise 1 resolved');
  }).then(res => console.log(res))
    .catch(err => console.log(err));
new Promise((resolve, reject) => {
    resolve('Promise 2 resolved');
  }).then(res => console.log(res))
    .catch(err => console.log(err));
console.log('Script End');

//26-11-2020