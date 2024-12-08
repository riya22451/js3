//ye wala sab aata hai let,var aur const ke scope ke baare mei baat hui hai 
//aur global scope aur local scope ke baare mei btaya gya hai

function one(){
    const username="hitesh"
    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
// one()

if(true){
    const username="riya"
    if(username==="riya"){
        const website="youtube"
        console.log(username+website)
    }
    // console.log(website)
}
// console.log(username)

//**********************************interesting********************************************
addone(5)        //ye hoisting horhi hai
function addone(num){
     return num+1
}
addtwo(5)   //yha hoisting nhi horhi
const addtwo=function(num){
    return num+2
}
