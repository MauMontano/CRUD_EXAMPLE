const fetch = require('node-fetch');
const db = require('./userControl');

fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(res => {
    res.users.forEach(user => {
        let userToInsert = { 
            name: user.firstName, 
            email: user.email, 
            password: user.password,
            address: user.address.address, 
            phone: user.phone,
            birthday: user.birthDate
        }
        console.log(userToInsert);
        db.registerUser(userToInsert).then(res=>{
            console.log(res);
        });
    });
});