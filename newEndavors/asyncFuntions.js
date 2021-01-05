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

//primeNumber
const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}
console.log(isPrime(27));

const isPrime2 = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}
console.log(isPrime2(27));

/*
let num2 = prompt('Enter number to be checked for Prime');
if (num2 <= 1) {
     console.log('try again');
} else if (num2 <= 3) {
    console.log(`${num2} is Prime`);
} else if (num2 % 2 == 0 || num2 % 3 == 0) {
  console.log('try again');
} else {
   for (let i=5; i*i<=num2; i=i+6)
   {
     if (num2 % i == 0 || num2 % (i + 2) == 0) {
           console.log('try again');
      }else {
    console.log(`${num2} is Prime`);
    }
  }
}
    
*/
  

