import express from "express";
import { ProfesseursMock } from "../data/professeurs";

const ProfesseursController = express.Router();

// Obtenir tous les professeurs
ProfesseursController.get("", (req, res) => {
  res.json(ProfesseursMock);
});

// Obtenir un professeurs par ID
ProfesseursController.get("/:id", (req, res) => {
  const cour = ProfesseursMock.find((c) => c.id === parseInt(req.params.id));
  if (!cour) return res.status(404).send("Professeurs non trouvé");
  res.json(cour);
});

export default ProfesseursController;
