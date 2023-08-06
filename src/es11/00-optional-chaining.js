const users = {
    dxmer: {
        country: 'ES'
    },
    johndoe: {
        country: 'US'
    }
}

console.log(users.dxmer?.country) // ES
console.log(users.dxmer?.age) // undefined