// const tinder=new Object() singleton object
// console.log(tinder);
const tinderUser={} // non singleton object
tinderUser.id="123"
tinderUser.name="riya"
tinderUser.isLoggedIn=false
console.log(tinderUser)


const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"riya",
            lastname:"aggarwal"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)


const obj1={
    1:'a',
    2:"a"

}
const obj2={
    3:'a',
    4:"b"
}
const obj3={...obj1,...obj2}
console.log(obj3)

const obj4=Object.assign({},obj1,obj2)
console.log(obj4)


const users=[
    {
        id:1,
        email:"r@google.com"
    },
    {
        id:1,
        email:"r@google.com"
    },
    {
        id:1,
        email:"r@google.com"
    },
    {
        id:1,
        email:"r@google.com"
    },
    {
        id:1,
        email:"r@google.com"
    },
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser))  //ye keys ka array return krta hai
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course={
    coursename:"Js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

const {courseInstructor:instructor}= course
console.log(instructor)

// const navbar=({company})=>{

// }
// navbar(company="hitesh") it is in a react

// {
//     "name":"riya",
//     "coursename":"js in hindi",
//     "price":"free"
// }

// [
//     {},
//     {},
//     {}
// ]