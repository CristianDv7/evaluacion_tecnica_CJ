Evaluación técnica
Cristian Jiménez

Inicialización del proyecto: 

Configuración de contenedores docker en el archivo compose.yaml

Nota1: los archivos mysql.env y ejercicio1/app.env ya vienen incluidos para facilitar la prueba. En producción no se deben subir al repositorio.


Nota2: Se crearon dos archivos de variables de entorno porque cada contenedor maneja su propia configuración. El archivo mysql.env configura la base de datos y ejercicio1/app.env permite que Node.js se conecte a MySQL.

PASO 1.-  Desde la raiz del proyecto ejecutar el siguiente comando para construir e iniciar los contenedores: docker compose up --build

PASO 2.- Revisar los resultados en el terminal una vez construido los contenedores

PASO 3.- Para detener los contenedores: docker compose down

Nota3: El archivo 01CreacionTablasRegistros.sql contiene las instrucciones para crear las tablas empleados y productos, además de insertar los registros de prueba para ambos ejercicios.