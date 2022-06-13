Una servicio de Rest en NodeJs. Donde recibe como
parámetro el usaurio , el password y nuestro nombre completo

# FAVS

- **auth :** Usted podrá registrarse y loguearse un nuevo usuario donde nos devolvera nuestro usuario .

```{
    "success": true,
    "user": {
        "userName": "admin",
        "fullName": "admin name",
        "password": "$2b$10$TSiAWOARbxq2EQ9Ql/D.L.U3mdgJg2eiRXcn1g.Lezgz.VjYAEK2e",
        "_id": "62a76305d8d78d48f56fd917",
        "createdAt": "2022-06-13T16:17:09.213Z",
        "updatedAt": "2022-06-13T16:17:09.213Z",
        "__v": 0
    }
}
```

## Instalación

Requiere [Node.js](https://nodejs.org/) v16+ correr.

- Bifurca el proyecto de nuestro repositorio o descarga de [back_interview](https://github.com/brayanmf/back_interview)
- Importa la collección "users.json" en mongodb
- Crea un archivo .env para las variables de entorno de la aplicación.
- Instala las dependencias y las devdependecias del package.json dándole **npm install**

## Ejecutar proyecto

Desarrollo:

```sh
npm run dev
```

Producción:

```sh
npm run start
```

Test:

```sh
npm run test
```
