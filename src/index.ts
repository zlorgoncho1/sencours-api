import express from "express";
import bodyParser from "body-parser";
import SallesController from "./controllers/salles-controller";
import EtudiantsController from "./controllers/etudiants-controller";
import CoursController from "./controllers/cours-controller";
import ProfesseursController from "./controllers/professeurs-controller";

// Configuration de express
const app = express();
app.use(bodyParser.json());

const PORT = 9999;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

app.use("/etudiants", EtudiantsController);
app.use("/cours", CoursController);
app.use("/professeurs", ProfesseursController);
app.use("/salles", SallesController);
