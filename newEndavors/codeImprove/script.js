async function updateUserInfo(userId, newName, newAge, newAddress) {
    try {
        const user = await user.findById(userId)

        if (!user) {
            return 'No user found';
        }

        user.name = newName;
        user.age = newAge;
        user.address = newAddress;

        await user.findByIdAndUpdate(userId, {
            $set: user
        })
        return user
    } catch (error) {
        console.log(error)
    }
}

updateUserInfo(1233, 'Sammuel', 23, 'NY');

//ES6 - staff
let arr = [];
arr.forEach((item, index) => {
//todo
})
//loop using for...of
for (const item of arr) {
    await something()
}
//clone new array (not changing the old one)
const arr4 = [1, 2, 3];
const newArray = arr4.filter(item => {
    if (item === 1) { return item }
})
console.log(newArray);
//Join array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
//get a property of object
const { email, address } = user 
console.log(email, address);
//copy object/array
const obj = { name: 'my name' }
const clone = { ...obj }
console.log(obj === clone);
