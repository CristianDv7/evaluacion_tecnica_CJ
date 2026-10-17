require('dotenv').config();
const mysql = require('mysql2/promise');


async function consultarEmpleados() {
    let conexion;
    try {
        conexion = await mysql.createConnection({
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT || 3306),
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
        console.log('Conexión exitosa a la base de datos');
        console.log('EJERCICIO 1');
        const [empleados] = await conexion.execute(
            
            'SELECT id, nombre ,cargo, salario FROM empleados'
        
        );
        console.log('Empleados consultados:');
        console.table(empleados);
        console.log('EJERCICIO 2');

        const [productos] = await conexion.execute(
            'SELECT id_producto, nombre_producto, precio, stock FROM productos WHERE precio > 50 ORDER BY precio ASC'
        );
        console.log('Productos con precio mayor a 50:');
        console.table(productos);
    }

    catch (error) {
        console.log('Error al conectar a la base de datos: ', error);
        process.exitCode = 1;
    }
    finally {
        if (conexion) {
            await conexion.end();
            console.log('Conexión cerrada');
        }
    }
}

consultarEmpleados();
