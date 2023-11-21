import express from "express";
import bodyParser from "body-parser";
import { EtudiantsMock } from "./data/etudiants";
import { ProfesseursMock } from "./data/professeurs";
import { SallesMock } from "./data/salles";
import { CoursMock } from "./data/cours";

// Configuration de express
const app = express();
app.use(bodyParser.json());

const PORT = 9999;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

// Obtenir tous les étudiants
app.get("/etudiants", (req, res) => {
  res.json(EtudiantsMock);
});

// Obtenir un étudiant par ID
app.get("/etudiants/:id", (req, res) => {
  const etudiant = EtudiantsMock.find((e) => e.id === parseInt(req.params.id));
  if (!etudiant) return res.status(404).send("Etudiant non trouvé");
  res.json(etudiant);
});

// Obtenir tous les professeurs
app.get("/professeurs", (req, res) => {
  res.json(ProfesseursMock);
});

// Obtenir un professeur par ID
app.get("/professeurs/:id", (req, res) => {
  const professeur = ProfesseursMock.find(
    (p) => p.id === parseInt(req.params.id)
  );
  if (!professeur) return res.status(404).send("Professeur non trouvé");
  res.json(professeur);
});

// Obtenir tous les cours
app.get("/cours", (req, res) => {
  res.json(CoursMock);
});

// Obtenir un cours par ID
app.get("/cours/:id", (req, res) => {
  const cour = CoursMock.find((c) => c.id === parseInt(req.params.id));
  if (!cour) return res.status(404).send("Cours non trouvé");
  res.json(cour);
});

// Obtenir toutes les salles
app.get("/salles", (req, res) => {
  res.json(SallesMock);
});

// Obtenir une salle par ID
app.get("/salles/:id", (req, res) => {
  const salle = SallesMock.find((s) => s.id === parseInt(req.params.id));
  if (!salle) return res.status(404).send("Salle non trouvée");
  res.json(salle);
});
