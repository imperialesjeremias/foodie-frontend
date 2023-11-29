# En desarrollo

### DEVS
[Imperiales Jeremias](https://www.linkedin.com/in/jeremiasleonimperiales)

[Ivan Venegas](https://www.linkedin.com/in/ivan-venegas-81225217)

[Gonzalo Delvalle](https://www.linkedin.com/in/gonzalodelvalle)

# Proyecto Final Fundación Pescar - Santander - Documentación
Este proyecto contiene el front end para usar la aplicación de Foodie utilizando
ReactJs y Redux para el manejo de estados

### Requisitos
Node.js (v18 o posterior)
NPM

### Installing

Clone
```
https://github.com/imperialesjeremias/foodie-frontend
```

## Iniciar

Instalar dependencias en el servidor
```
cd foodie-fronted
npm install
npm run dev

Esto levantara el servidor del cliente este se encontrara en el puerto `htpp://localhost:3000`
```

## Requisitos previos

1. Asegúrate de tener instalado MySQL en tu sistema.
2. Asegúrate de ajustar los valores de las variables de entorno en el `.env` 
segun tu configuración de la base de datos.

## Configurar .env

1. Crea un archivo llamado `.env`
2. Agrega los siguientes valores

```
dbHost = 'localhost';
dbPort=5432;
dbUser ='usuario';
dbPassword ='password';
dbName ='tu_base_de_datos';
```

