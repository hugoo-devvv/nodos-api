CREATE DATABASE IF NOT EXISTS sistemas;
USE sistemas;

CREATE TABLE IF NOT EXISTS alumnos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    matricula VARCHAR(10) NULL,
    nombre VARCHAR(45) NULL,
    domicilio VARCHAR(45) NULL,
    fechanac DATE NULL,
    sexo VARCHAR(45) NULL,
    status INT DEFAULT 0
);

-- Inserts de prueba
INSERT INTO alumnos (matricula, nombre, domicilio, fechanac, sexo, status) VALUES
('2023030001', 'Jose Lopez', 'Av de las rosas 15', '2000-02-09', 'M', 0),
('2023030002', 'Maria Carbajo', 'Av del sol 33', '2001-05-14', 'F', 1),
('2023030003', 'Carlos Mendoza', 'Calle Juarez 120', '1999-11-22', 'M', 1),
('2023030004', 'Ana Torres', 'Blvd Marina 450', '2002-03-08', 'F', 0),
('2023030005', 'Pedro Ramirez', 'Col Centro 89', '2000-07-30', 'M', 1),
('2023030006', 'Laura Sanchez', 'Av Insurgentes 200', '2001-01-17', 'F', 1),
('2023030007', 'Diego Herrera', 'Calle Obregon 55', '1998-09-05', 'M', 0),
('2023030008', 'Sofia Ruiz', 'Av Camaron Sabalo 12', '2003-12-25', 'F', 1),
('2023030009', 'Miguel Flores', 'Calle Zaragoza 78', '2000-06-11', 'M', 0),
('2023030010', 'Valentina Castro', 'Blvd Clouthier 310', '2002-08-19', 'F', 1);
