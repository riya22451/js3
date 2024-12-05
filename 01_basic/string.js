const name="riya"
const repoCount=50
// console.log(name+repoCount)
console.log(`hello my name is ${name} and my repo count is ${repoCount}`)// string interpolation
const gameName=new String("hitesh-hc")
console.log(gameName);
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(0,2)
console.log(anotherString)
const another=gameName.slice(-9,4)
console.log(another)


const newStringOne="   hitesh  "
console.log(newStringOne.trim())
console.log(newStringOne)

const url="https://riya%20aggarwal.com"
console.log(url.replace("%20","-"))

console.log(url.includes("it"));

console.log(gameName.split("-"))