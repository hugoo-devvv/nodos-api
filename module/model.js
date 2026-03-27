import mysql from "mysql2";

// configurar la conexion
var conexion = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "",
    database: "sistemas"
});

// abrir la conexion
conexion.connect((err) => {
    if (err) {
        console.log("Surgio un error " + err);
    } else {
        console.log("Se realizo la conexion");
    }
});

var alumnosDB = {};

// funcion para insertar
alumnosDB.insertar = function insertar(alumno) {
    return new Promise((resolve, reject) => {
        let sqlConsulta = "INSERT INTO alumnos set ?";
        conexion.query(sqlConsulta, alumno, (err, res) => {
            if (err) {
                console.log("surgio un error al insertar" + err);
                reject(err);
            } else {
                resolve(res.insertId);
            }
        });
    });
};

// funcion para mostrar todos
alumnosDB.mostrarTodos = function mostrarTodos() {
    return new Promise((resolve, reject) => {
        let sqlConsulta = "SELECT * FROM alumnos ";
        conexion.query(sqlConsulta, (err, resultado) => {
            if (err) {
                console.log("surgio un error" + err);
                reject(err);
            } else {
                console.log(" Listado de alumnos obtenidos");
                resolve(resultado);
            }
        });
    });
};

// Buscar por id
alumnosDB.buscarPorId = function buscarPorId(id) {
    return new Promise((resolve, reject) => {
        let sqlConsulta = "SELECT * FROM alumnos WHERE id = ?";
        conexion.query(sqlConsulta, [id], (err, resultado) => {
            if (err) {
                console.log("Error al buscar por id : " + err);
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

// Buscar por matricula
alumnosDB.buscarPorMatricula = function buscarPorMatricula(matricula) {
    return new Promise((resolve, reject) => {
        let sqlConsulta = "SELECT * FROM alumnos WHERE matricula = ?";
        conexion.query(sqlConsulta, [matricula], (err, resultado) => {
            if (err) {
                console.log("Error al buscar por matricula: " + err);
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

// Borrar por id
alumnosDB.borrarPorId = function borrarPorId(id) {
    return new Promise((resolve, reject) => {
        let sqlConsulta = "DELETE FROM alumnos WHERE id = ?";
        conexion.query(sqlConsulta, [id], (err, resultado) => {
            if (err) {
                console.log(" Error al borrar alumno: " + err);
                reject(err);
            } else {
                resolve(" Alumno eliminado correctamente");
            }
        });
    });
};

// Actualizar un registro completo por ID
alumnosDB.actualizarPorId = function actualizarPorId(id, nuevoAlumno) {
    return new Promise((resolve, reject) => {
        let sqlConsulta = "UPDATE alumnos SET ? WHERE id = ?";
        conexion.query(sqlConsulta, [nuevoAlumno, id], (err, resultado) => {
            if (err) {
                console.log(" Error al actualizar alumno: " + err);
                reject(err);
            } else {
                resolve(" Alumno actualizado correctamente");
            }
        });
    });
};

// Actualizar estado (cambiar de 0 a 1 o de 1 a 0)
alumnosDB.cambiarStatus = function cambiarStatus(id) {
    return new Promise((resolve, reject) => {
        let sqlConsulta = "UPDATE alumnos SET status = NOT status WHERE id = ?";
        conexion.query(sqlConsulta, [id], (err, resultado) => {
            if (err) {
                console.log(" Error al cambiar estado: " + err);
                reject(err);
            } else {
                resolve("Estado actualizado correctamente");
            }
        });
    });
};

export default alumnosDB;
