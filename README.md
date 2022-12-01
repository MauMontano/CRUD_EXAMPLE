# CRUD_EXAMPLE

Este proyecto consiste en un CRUD sencillo de usuarios basado en la arquitectura API REST, en el que es posible consultar una tabla de usuarios(previamente registrados en una base de datos), modificar sus datos y eliminarlos. 

Por otro lado, la programación del proyecto se realizo con Angular para la parte del cliente o frontend, y con NodeJS para la parte del servidor o backend.

Finalmente, la base de datos implementada es de tipo relacional, y se encuentra alojada en Google Cloud Plattform. A continuación se menciona como ejecutar la aplicación

## Servidor

Es la primera instancia que debe de ejecutarse para poder usar la aplicación. Los pasos para ejecutarlo son los siguientes:

  1. Debido a que la base de datos se encuentra en un servidor remoto, deberá solicitar al autor del repositorio el archivo `.env`, el cual contiene las credenciales de conexión. Este archivo deberá colocarse en la raíz de la carpeta `backapp`.
 
  2. **Instalar los `node_modules`**: Deberá posicionarse en la carpeta backapp, una vez ahí deberá ejecutar el comando `npm install`.

  3. **Ejecutar el servidor**: Ejecutar el comando `nodemon start`.

  4. Para verificar que el servidor se está ejecutando correctamente, deberá revisar su consola, la cual deberá desplegar un mensaje que ilustre que el servidor se está ejecutando en el puerto 3000.

## Cliente

El cliente deberá de ejecutarse una vez que ya se esté ejecutando el servidor para evitar errores. Los pasos para ejecutar esta instancia son:

  1. **Instalar los `node_modules`**: Deberá posicionarse en la carpeta raíz del repositorio, una vez ahí deberá ejecutar el comando `npm install`.

  2. **Ejecutar la aplicación**: Deberá posicionarse en la carpeta raíz del repositorio, una vez ahí deberá ejecutar el comando `ng serve`.

  3. Acceder desde su navegador a `http://localhost:4200/`.

  4. Listo ! la aplicación ya está ejecutándose.
