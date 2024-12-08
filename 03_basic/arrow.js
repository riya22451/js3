const user={
    username:"riya",
    price:999,

    welcomemessage:function(){
        console.log(`${this.username} ,welcome to website`)
        console.log(this)
    }
}
user.welcomemessage()
user.username="sam"
user.welcomemessage()
console.log(this)
//jbbhi browser mei this daalte hai to window object aata hai

function chai(){
    let username="riya"
    console.log(this.username) //ye context object ke andr kaam krta hai function ke andr nhi
}
chai()


const coffee=()=>{
    console.log("hey i am riya")
}
coffee()


const addTwo=(num1,num2)=>(num1+num2)
console.log(addTwo(2,3))
//curly braces ke saath return keyword add krna pdhega aur () is bracket me return kewyword ki jrurat nhi hai

const addOne=(num1,num2)=>({username:"riya"})
console.log(addOne(2,3))