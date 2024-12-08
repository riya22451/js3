const marvel=["spiderman","thor","ironman"]
const dc=["superman","flash","batman"]
// console.log(marvel.push(dc));

console.log(marvel)
const newarr=marvel.concat(dc)
console.log(newarr)
console.log(marvel)

const newArr1=[...marvel,...dc] //spread operator
console.log(newArr1);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) //ye array bnata hai
console.log(Array.from({name:"hitesh"})) //interesting

const score1=100
const score2=200
const score3=300
console.log(Array.of(score1,score2,score3)) //isse multiple values se array se bnta hai