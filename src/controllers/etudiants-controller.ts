import express from "express";
import { EtudiantsMock } from "../data/etudiants";

const EtudiantsController = express.Router();

// Obtenir tous les étudiants
EtudiantsController.get("", (req, res) => {
  res.json(EtudiantsMock);
});

// Obtenir un étudiants par ID
EtudiantsController.get("/:id", (req, res) => {
  const cour = EtudiantsMock.find((c) => c.id === parseInt(req.params.id));
  if (!cour) return res.status(404).send("Etudiants non trouvé");
  res.json(cour);
});

export default EtudiantsController;
