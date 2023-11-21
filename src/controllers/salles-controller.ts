import express from "express";
import { SallesMock } from "../data/salles";

const SallesController = express.Router();

// Obtenir tous les salles
SallesController.get("", (req, res) => {
  res.json(SallesMock);
});

// Obtenir un salles par ID
SallesController.get("/:id", (req, res) => {
  const cour = SallesMock.find((c) => c.id === parseInt(req.params.id));
  if (!cour) return res.status(404).send("Salles non trouvé");
  res.json(cour);
});

export default SallesController;
