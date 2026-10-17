CREATE DATABASE IF NOT EXISTS empresa;
USE empresa;

-- EJERCICIO 1 EMPLEADOS, SE CREA LA TABLA Y SE INSERTAN LOS REGISTROS
CREATE TABLE IF NOT EXISTS empleados(
    id int PRIMARY KEY AUTO_INCREMENT,
    nombre varchar(100),
    cargo varchar(100),
    salario decimal(10,2)
);

INSERT INTO empleados(nombre, cargo, salario)
VALUES
('Carlos','Operador',1000),
('Jorge','Tecnico',850.20),
('Felipe','Guardia',700.12);

-- EJERCICIO 2 PRODUCTOS, SE CREA LA TABLA Y SE INSERTAN LOS REGISTROS

CREATE TABLE IF NOT EXISTS productos(
    id_producto int PRIMARY KEY AUTO_INCREMENT,
    nombre_producto varchar(100),
    precio decimal(10,2),
    stock int
);

INSERT INTO productos(nombre_producto, precio, stock)
VALUES
('horchata',52.50,76),
('aji',1.25,4),
('anis',0.75,2),
('achiote',50,4),
('cebolla',53.45,4);