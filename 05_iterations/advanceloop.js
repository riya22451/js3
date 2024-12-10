//for of

const arr=[1,2,3,4,5]
for (const element of arr) {
    console.log(element)
}

const greetings="hello world"
for (const element of greetings) {
    console.log(element);
    
}

//Maps

const map=new Map()
map.set("IN","India")
map.set("USA","United States of America")
map.set("Fr","France")
console.log(map)

for (const [key] of map) {
    console.log(key)
}
for (const [key,value] of map) {
    console.log(key+";"+value)
}

//object
const myObject={
    'game1':'NFS',
    'game2':'spider-man'
}
for (const [key,value] of myObject) {
    console.log(key+":"+value)
}
//object is not iterable by for of