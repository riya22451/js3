//#primitive
//7 types :String,Number,Boolean,null,undefined,Symbol,BigInt

//refernce type
//Array,objects,functions
//javascript is a dynmaically typed language
const id=Symbol("123")
const id2=Symbol("123")
console.log(id===id2)

const heros=['shaktiman','nagraj',"doga"]
const object1={
    name:"hitesh",
    age:22,
}
console.log(heros);
console.log(object1);


const myFunction=function(){
    console.log("hello world")
}
console.log(typeof(heros))