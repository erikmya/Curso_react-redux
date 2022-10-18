// Mutabilidad en JS
const updateAge = (userInfo) => {
    userInfo.age = userInfo.age + 1 
    return userInfo
}

const userInfo = {
    name: 'erik',
    age: 25,
    email: 'erik@gmail.com'
}

console.log('Before userInfo: ', userInfo) // {name: 'erik', age: 25, email: 'erik@gmail.com'} 

const updateUserInfo = updateAge(userInfo) 
console.log('After userInfo: ',userInfo) // {name: 'erik', age: 26, email: 'erik@gmail.com'}
console.log('updateUserInfo: ',updateUserInfo) // {name: 'erik', age: 26, email: 'erik@gmail.com'}

//Inmutabilidad en JS
//Object.assign
const updateAge = (userInfo) => {
    return Object.assign({}, userInfo, { age: userInfo.age + 1 })
}

const userInfo = {
    name: 'erik',
    age: 25,
    email: 'erik@gmail.com'
}

console.log('Before userInfo: ', userInfo) // {name: 'erik', age: 25, email: 'erik@gmail.com'}

const updateUserInfo = updateAge(userInfo) 
console.log('After userInfo: ',userInfo) // {name: 'erik', age: 25, email: 'erik@gmail.com'}
console.log('updateUserInfo: ',updateUserInfo) // {name: 'erik', age: 26, email: 'erik@gmail.com'}

//Spread Operator

const updateAge = (userInfo) => {
    return { ...userInfo, age: userInfo.age + 1 }
}

const userInfo = {
    name: 'erik',
    age: 25,
    email: 'erik@gmail.com'
}

console.log('Before userInfo: ', userInfo) // {name: 'erik', age: 25, email: 'erik@gmail.com'}

const updateUserInfo = updateAge(userInfo) 
console.log('After userInfo: ',userInfo) // {name: 'erik', age: 25, email: 'erik@gmail.com'}
console.log('updateUserInfo: ',updateUserInfo) // {name: 'erik', age: 26, email: 'erik@gmail.com'}