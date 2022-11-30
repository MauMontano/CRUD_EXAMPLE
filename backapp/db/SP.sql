USE UsuariosPrueba;
DROP PROCEDURE IF EXISTS getUsers;
DROP PROCEDURE IF EXISTS registerUser;
DROP PROCEDURE IF EXISTS updateUser;
DROP PROCEDURE IF EXISTS deleteUser;

DELIMITER $$
CREATE PROCEDURE getUsers()
BEGIN
    SELECT Usuario.id AS id, Usuario.nombre AS name, Usuario.email AS email, DatosPersonalesUsuario.direccion AS address, DatosPersonalesUsuario.telefono as phone, DatosPersonalesUsuario.fechaNacimiento AS birthday FROM Usuario INNER JOIN DatosPersonalesUsuario ON Usuario.id = DatosPersonalesUsuario.id ORDER BY Usuario.nombre ASC;
END$$


DELIMITER $$
CREATE PROCEDURE registerUser(
    nombreP VARCHAR(25), 
    emailP VARCHAR(25), 
    contraseñaP VARCHAR(25), 
    direccionP VARCHAR(100),
    telefonoP VARCHAR(20),
    fechaNacimientoP DATE
    )
BEGIN
START TRANSACTION;
    INSERT INTO Usuario (nombre, email, contraseña) VALUES (nombreP, emailP, contraseñaP);
    INSERT INTO DatosPersonalesUsuario(id, direccion, telefono, fechaNacimiento) VALUES (LAST_INSERT_ID(), direccionP, telefonoP, fechaNacimientoP);
COMMIT;
END$$


DELIMITER $$
CREATE PROCEDURE updateUser(
    idP INT,
    nombreP VARCHAR(25), 
    emailP VARCHAR(25),  
    direccionP VARCHAR(100),
    telefonoP VARCHAR(20),
    fechaNacimientoP DATE
    )
BEGIN
START TRANSACTION;
    UPDATE Usuario SET nombre = nombreP, email = emailP WHERE id = idP;
    UPDATE  DatosPersonalesUsuario SET direccion = direccionP, telefono = telefonoP, fechaNacimiento = fechaNacimientoP WHERE id = idP;
COMMIT;
END$$

DELIMITER $$
CREATE PROCEDURE deleteUser(idP INT)
BEGIN
    DELETE FROM Usuario WHERE Usuario.id = idP;
END$$

DELIMITER ;

GRANT EXECUTE ON PROCEDURE getUsers TO 'testUserRemote'@'%'  identified by 't3st1ngDatabase';
GRANT EXECUTE ON PROCEDURE registerUser TO 'testUserRemote'@'%'  identified by 't3st1ngDatabase';
GRANT EXECUTE ON PROCEDURE updateUser TO 'testUserRemote'@'%'  identified by 't3st1ngDatabase';
GRANT EXECUTE ON PROCEDURE deleteUser TO 'testUserRemote'@'%'  identified by 't3st1ngDatabase';
