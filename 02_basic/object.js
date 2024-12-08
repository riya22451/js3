//singleton
//Object.create

//object literals
const mySym=Symbol("key1")



const JsUser={
    name:"Riya",
    "full name":"riya aggarwal",
    [mySym]:"mykey1",
    location:"Jaipur",
    email:"riya@google.com",
    isLoggedIn:false,
    lastloginDays:["Monday","Saturday"]
}
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email="shreya@google.com"
// Object.freeze(JsUser)
///koi changes apply nhi honge aur isme
JsUser.email="shreya@microsoft.com"
console.log(JsUser)


JsUser.greeting=function(){
    console.log("hello js user")
}
console.log(JsUser.greeting())
console.log(JsUser.greeting)

JsUser.greeting2=function(){
    console.log(`Hello Js user,${this.name}`)
}
console.log(JsUser.greeting2())