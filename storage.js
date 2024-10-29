
// Parse  json = converts a json string to a javascript object
const user = '{"name": "mike": "23" }'
const person = JSON.parse(user)
console.log(person)

//stringify object = converts a javascript object to a json string
const users = {name: "mike",age: "23"}
const jsonString = JSON.stringify(users)
console.log(jsonString)
localStorage.setItem('user', JSON.stringify(users))



const userr = JSON.parse(localStorage.getItem('userr'))
console.log()
