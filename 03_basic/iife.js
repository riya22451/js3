//immediately invoked function expressions

(function chai(){
    //named iife
    console.log("Db connected")
})();
//global scope ke pollution ko htane ke liye iife use kiya
//iife mei semi colon lgana important hai

((name)=>console.log(`db connected two ${name}`))("riya"); //unnnamed iife