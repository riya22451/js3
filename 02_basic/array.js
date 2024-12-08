const myarr=[0,1,2,3,true,"hitesh"]
const arr=[0,1,2,3]
//javascript arrays are resizable and can store multiple items in a array
//when we do array-copy operation,it creates shallow copy(jo change kroge original array mei bhi change hoga)
const myArr2=new Array(0,1,2,3);
console.log(myArr2)

//Array Methods
myArr2.push(6)
console.log(myArr2);
myArr2.pop()
console.log(myArr2);

myArr2.unshift(0)
console.log(myArr2);
myArr2.shift()
console.log(myArr2);

console.log(myArr2.includes(1));
console.log(myArr2.indexOf(9))

const newArr=myArr2.join() //Array ko string mei convert kr dia hai
console.log(newArr)

//slice,splice
console.log(myArr2.slice(0,2));//splice documentations se pdhna hai mdn ki