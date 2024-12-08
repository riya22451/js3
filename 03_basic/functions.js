function saymyName(){
    console.log("r")
    console.log("i")
    console.log("y")
    console.log("a")
}
saymyName()

function add(a,b){
    console.log(a+b)
}
add(2,3)

function add1(a,b){
    let result=a+b
    return result
}
const value=add1(2,3)
console.log(value)

function loginUserMessage(username="sam"){ //for default value
    if(username===undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
const result=loginUserMessage("riya")
console.log(result)
console.log(loginUserMessage())


function CalculateCartPrice(val1,val2,...num1){//ye rest operator array bnadega values ka
     return num1 
}
console.log(CalculateCartPrice(2))
console.log(CalculateCartPrice(200,400,600))

const user={
    username:"hitesh",
    price:199
}
function handleobject(anyobject){
     console.log(`uSERNAME IS ${anyobject.username} and price is ${anyobject.price}`)
}
// handleobject(user)
handleobject({
    username:"riya",
    price:99
})

const arr=[1,2,3,4]
function handlearray(anyarray){
    return anyarray[1]
}
console.log(handlearray(arr))