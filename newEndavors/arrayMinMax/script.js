//https://medium.com/coding-at-dawn/the-fastest-way-to-find-minimum-and-maximum-values-in-an-array-in-javascript-2511115f8621

console.log(Math.min(1, 2, 3, -1));
console.log(Math.min([1, 2, 3]));
//using spread operator
console.log(Math.min(...[1, 3, 5]));
console.log(Math.max(...[1, 3, 5]));
//using function.prototype.apply() instead of the spread operator
//console.log([1, 2, 3].min());
console.log(Math.min([1, 3, 5]));
console.log(Math.min.apply(null, [1, 3, 5]));
console.log(Math.max.apply(null, [1, 4, 6]));
//sorting the list numerically
const array = [-37, -5, -15, 36, 6, 15];
array.sort(); //sort lexicographical
console.log(array.join(','));
array.sort((a, b) => a - b); //sort numerically
console.log(array.join(','));
const min = array[0], max = array[array.length - 1];
console.log(`Minimum: ${min}, Maximun: ${max}`);
//using a FOR loop or .reduce()
const array2 = [7, -5, -15, -37, 5, 15];
const forLoopMinMax = () => {
    let min = array2[0], max = array2[0];
    for (let i = 1; i < array2.length; i++) {
        let value = array2[i];
        min = (value < min) ? value : min;
        max = (value > max) ? value : max;
    }
    return [min, max];
}
const [forLoopMin, forLoopMax] = forLoopMinMax();
console.log(`Minimun: ${forLoopMin}, Maximum: ${forLoopMax}`);

const minUsingReduce = () => array2.reduce((min, currentValue) => Math.min(min, currentValue), array2[0]);
const maxUsingReduce = () => array2.reduce((max, currentValue) => Math.max(max, currentValue), array2[0]);
console.log(`Minimun: ${minUsingReduce()}, Maximum: ${maxUsingReduce()}`);
