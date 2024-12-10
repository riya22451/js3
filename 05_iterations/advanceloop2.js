const myObject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myObject) {
    console.log(`${key} shortcut for ${myObject[key]}`)
}

const arr=[1,2,3,4]
for (const key in arr) {
    console.log(arr[key])
}

const map=new Map()
map.set("IN","India")
map.set("USA","United States of America")
map.set("Fr","France")
for (const key in map) {
   console.log(key)
}

//map for-in se iterations se nhi hote