const mysql = require('mysql');
const pool = require('./pool.js').pool;

const db = {
    getUsers: () => {
        return new Promise((resolve,reject)=>{
            // Succesfully connected
            pool.query('CALL getUsers()',[],  (error, results, fields) => {
                if(error){
                    return reject(error);
                }
                console.log(results)
                return resolve(results);
            });
        });
    },
    getUserById: (id) => {
        return new Promise((resolve,reject)=>{
            // Succesfully connected
            pool.query('SELECT Usuario.id AS id, Usuario.nombre AS name, Usuario.email AS email, DatosPersonalesUsuario.direccion AS address, DatosPersonalesUsuario.telefono as phone, DatosPersonalesUsuario.fechaNacimiento AS birthday FROM Usuario INNER JOIN DatosPersonalesUsuario ON Usuario.id = DatosPersonalesUsuario.id WHERE Usuario.id = ?',[id],  (error, results, fields) => {
                if(error){
                    return reject(error);
                }
                console.log(id);
                console.log(results[0]);
                return resolve(results[0]);
            });
        });
    },
    registerUser: (user) => {
        return new Promise((resolve,reject)=>{
            // Succesfully connected
            pool.query('CALL registerUser(?, ?, ?, ?, ?, ?)',[user.name, user.email, user.password, user.address, user.phone, user.birthday],  (error, results, fields) => {
                if(error){
                    return reject(error);
                }
                return resolve(1);
            });
        });
    },
    updateUser: (user) => {
        return new Promise((resolve,reject)=>{
            console.log("Updating");
            console.log(user.id);
            // Succesfully connected
            pool.query('Call updateUser(?, ?, ?, ?, ?, ?)',[user.id, user.name, user.email, user.address, user.phone, user.birthday],  (error, results, fields) => {
                if(error){
                    return reject(error);
                }
                return resolve(1);
            });
        });
    },
    deleteUser: (user) => {
        return new Promise((resolve,reject)=>{
            // Succesfully connected
            console.log("id: " + user.id);
            pool.query('CALL deleteUser(?)',[user.id],  (error, results, fields) => {
                if(error){
                    return reject(error);
                }
                return resolve(1);
            });
        });
    },
}
module.exports = db;
