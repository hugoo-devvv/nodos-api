import express from "express";
import cors from "cors";
import alumnosRouter from "./router/index.js";

const app = express();
const PORT = process.env.PORT || 5002;

// Motor de plantillas EJS
app.set("view engine", "ejs");
app.set("views", "./views");

// Middlewares
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type"]
}));
app.use(express.json());

// Rutas de la API
app.use("/alumnos", alumnosRouter);

// Ruta principal - renderiza index.ejs
app.get("/", (req, res) => {
    res.render("index");
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log("Servidor iniciado en http://localhost:" + PORT);
});
