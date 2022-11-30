DROP DATABASE IF EXISTS UsuariosPrueba;
CREATE DATABASE UsuariosPrueba;
USE UsuariosPrueba;

CREATE TABLE Usuario(
    id MEDIUMINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    contraseña VARCHAR(25) NOT NULL
);

CREATE TABLE DatosPersonalesUsuario(
    id MEDIUMINT,
    direccion VARCHAR(255) NOT NULL,
    telefono VARCHAR(50) NOT NULL,
    fechaNacimiento DATE NOT NULL,
    FOREIGN KEY(id) references Usuario(id) ON DELETE CASCADE ON UPDATE CASCADE
);

Call registerUser("Mauricio", "mauricio@gmail.com", "contraseña", "Estado de México", "+525527421936",'2012-01-01');
Call registerUser("Andrea", "andrea@gmail.com", "contraseña", "Calle la perla", "55272828",'2012-01-01');
Call registerUser("Daniel", "dany@gmail.com", "contraseña", "Calle houston", "55272828",'2012-01-01');
Call registerUser("Rebeca", "beca@gmail.com", "contraseña", "Calle la perla", "55272828",'2012-01-01');
Call registerUser("Lorena", "lorena@gmail.com", "contraseña", "Calle houston", "55272828",'2012-01-01');
Call registerUser("Alberto", "alberto@gmail.com", "contraseña", "Calle la perla", "55272828",'2012-01-01');
Call registerUser("Adriana", "adriana@gmail.com", "contraseña", "Calle houston", "55272828",'2012-01-01');
Call registerUser("Ericka", "ercika@gmail.com", "contraseña", "Calle la perla", "55272828",'2012-01-01');
Call registerUser("Luisa", "luisa@gmail.com", "contraseña", "Calle houston", "55272828",'2012-01-01');
Call registerUser("Martin", "martin@gmail.com", "contraseña", "Calle la perla", "55272828",'2012-01-01');
Call registerUser("Ernesto", "ernesto@gmail.com", "contraseña", "Calle houston", "55272828",'2012-01-01');
Call registerUser("Carlos", "carlos@gmail.com", "contraseña", "Calle la perla", "55272828",'2012-01-01');
Call registerUser("Francisco", "franc@gmail.com", "contraseña", "Calle houston", "55272828",'2012-01-01');
Call registerUser("Javier", "javier@gmail.com", "contraseña", "Calle la perla", "55272828",'2012-01-01');
Call registerUser("Rodrigo", "rodrigo@gmail.com", "contraseña", "Calle houston", "55272828",'2012-01-01');
Call registerUser("Karina", "larina@gmail.com", "contraseña", "Calle la perla", "55272828",'2012-01-01');
Call registerUser("Leonel", "leonel@gmail.com", "contraseña", "Calle houston", "55272828",'2012-01-01');
Call registerUser("Julio", "julio@gmail.com", "contraseña", "Calle la perla", "55272828",'2012-01-01');
Call registerUser("Raymundo", "raymund@gmail.com", "contraseña", "Calle houston", "55272828",'2012-01-01');
Call registerUser("Diego", "diego@gmail.com", "contraseña", "Calle la perla", "55272828",'2012-01-01');
Call registerUser("Priscila", "prisc@gmail.com", "contraseña", "Calle houston", "55272828",'2012-01-01');
Call registerUser("Reyna", "reyna@gmail.com", "contraseña", "Calle la perla", "55272828",'2012-01-01');
Call registerUser("Guadalupe", "guadalupe@gmail.com", "contraseña", "Calle houston", "55272828",'2012-01-01');

Call registerUser("Diana", "diana@gmail.com", "contraseña", "Calle la perla", "55272828",'2012-01-01');
Call registerUser("Ramiro", "ramiro@gmail.com", "contraseña", "Calle houston", "55272828",'2012-01-01');
Call registerUser("Saúl", "saul@gmail.com", "contraseña", "Calle la perla", "55272828",'2012-01-01');
Call registerUser("Robero", "roberto@gmail.com", "contraseña", "Calle houston", "55272828",'2012-01-01');
Call registerUser("Viridiana", "viridiana@gmail.com", "contraseña", "Calle la perla", "55272828",'2012-01-01');
Call registerUser("Ana", "ana@gmail.com", "contraseña", "Calle houston", "55272828",'2012-01-01');
Call registerUser("Lucas", "lucas@gmail.com", "contraseña", "Calle la perla", "55272828",'2012-01-01');
Call registerUser("Rigoberto", "rigoberto@gmail.com", "contraseña", "Calle houston", "55272828",'2012-01-01');
Call registerUser("Karla", "karla@gmail.com", "contraseña", "Calle la perla", "55272828",'2012-01-01');
Call registerUser("Hernán", "hernan@gmail.com", "contraseña", "Calle houston", "55272828",'2012-01-01');
Call registerUser("Julian", "julian@gmail.com", "contraseña", "Calle la perla", "55272828",'2012-01-01');
Call registerUser("Teresa", "tere@gmail.com", "contraseña", "Calle houston", "55272828",'2012-01-01');
Call registerUser("Pedro", "pedro@gmail.com", "contraseña", "Calle la perla", "55272828",'2012-01-01');
Call registerUser("Juan Diego", "juandiego@gmail.com", "contraseña", "Calle houston", "55272828",'2012-01-01');
Call registerUser("Arturo", "arturo@gmail.com", "contraseña", "Calle la perla", "55272828",'2012-01-01');
Call registerUser("David", "david@gmail.com", "contraseña", "Calle houston", "55272828",'2012-01-01');
Call registerUser("Mariana", "mariana@gmail.com", "contraseña", "Calle la perla", "55272828",'2012-01-01');
Call registerUser("Jessica", "jessica@gmail.com", "contraseña", "Calle houston", "55272828",'2012-01-01');
Call registerUser("Santiago", "Santiago@gmail.com", "contraseña", "Calle la perla", "55272828",'2012-01-01');
Call registerUser("Marco Antonio", "marcoantonio@gmail.com", "contraseña", "Calle houston", "55272828",'2012-01-01');
Call registerUser("Dilan", "dilan@gmail.com", "contraseña", "Calle la perla", "55272828",'2012-01-01');
Call registerUser("Ian ", "ian@gmail.com", "contraseña", "Calle houston", "55272828",'2012-01-01');

Call registerUser("Adalberto", "adalberto@gmail.com", "contraseña", "Calle la perla", "+525528284556",'2001-01-01');
Call registerUser("Antuan", "antuan@gmail.com", "contraseña", "Calle houston", "+525527282856",'2002-02-01');
Call registerUser("Ariadna", "ariadna@gmail.com", "contraseña", "Calle la perla", "+525527282887",'2003-03-01');
Call registerUser("Antonia", "antonia@gmail.com", "contraseña", "Calle houston", "+525527282887",'1999-04-01');
Call registerUser("Brayan", "brayan@gmail.com", "contraseña", "Calle la perla", "+525527282887",'2002-08-01');
Call registerUser("Brandon", "brandon@gmail.com", "contraseña", "Calle houston", "+525527282887",'2002-08-01');
Call registerUser("Bruno", "bruno@gmail.com", "contraseña", "Calle la perla", "+525527243856",'2002-08-01');
Call registerUser("Carlos", "carlos@gmail.com", "contraseña", "Calle houston", "+525527243856",'2002-08-01');
Call registerUser("Carla", "carla@gmail.com", "contraseña", "Calle la perla", "+525527243856",'2002-08-01');
Call registerUser("Daniela", "daniela@gmail.com", "contraseña", "Calle houston", "+525527243856",'1999-01-03');
Call registerUser("Daniel", "daniel@gmail.com", "contraseña", "Calle la perla", "+525527243856",'1999-01-03');
Call registerUser("Esteban", "esteban@gmail.com", "contraseña", "Calle houston", "+525547282856",'1999-01-03');
Call registerUser("Benjamin", "benjamin@gmail.com", "contraseña", "Calle la perla", "+525547282856",'1999-01-03');
Call registerUser("Barbara", "barbara@gmail.com", "contraseña", "Calle houston", "+525547282856",'1999-01-03');
Call registerUser("Belem", "belem@gmail.com", "contraseña", "Calle la perla", "+525547282856",'2005-11-10');
Call registerUser("Blanca", "blanca@gmail.com", "contraseña", "Calle houston", "+525547282856",'2005-11-10');
Call registerUser("Brenda", "brenda@gmail.com", "contraseña", "Calle la perla", "+525557282856",'2005-11-10');
Call registerUser("Bernabe", "bernabe@gmail.com", "contraseña", "Calle houston", "+525557282856",'2005-11-10');
Call registerUser("Susana", "susana@gmail.com", "contraseña", "Calle la perla", "+525557282856",'1988-07-10');
Call registerUser("Fernando", "fernando@gmail.com", "contraseña", "Calle houston", "+525557282856",'1988-07-10');
Call registerUser("Francisco", "francisco@gmail.com", "contraseña", "Calle la perla", "+525557282856",'1988-07-10');
Call registerUser("Fernanda", "fernanda@gmail.com", "contraseña", "Calle houston", "+525557282856",'1988-07-10');