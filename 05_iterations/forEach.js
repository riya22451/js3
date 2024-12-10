//for each

const coding=["js","ruby","java","python","cpp"]

coding.forEach((e)=>{
    console.log(e)
})
//callback function mei name nhi hota

function printMe(item){
    console.log(item)
}
coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})

const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"javascript",
        languageFileName:"js"
    },
]
myCoding.forEach((key)=>{
    console.log(key.languageName)
})