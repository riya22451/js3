let myDate=new Date();
console.log(myDate.toString())
console.log(myDate.toDateString())

let createDate=new Date(2023,0,23)
console.log(createDate.toDateString());
let myCreateDate=new Date("23-02-2004")
console.log(myCreateDate.toLocaleDateString())


console.log(Math.floor(Date.now()/1000))

let newDate=new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay())

newDate.toLocaleString("default",{
    weekday: "long",
  
})