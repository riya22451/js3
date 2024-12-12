const coding=["js","ruby","python","java"]
// const values=coding.forEach((item)=>{
//     console.log(item)
//     return item
// })
// console.log(values) invalid

const myNum=[1,2,3,4,5,6,7,8,9,10]
const newNum=myNum.filter((num)=> num>4)
console.log(newNum)


const newNums=[]
myNum.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums)