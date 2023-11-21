import express from "express";
import { CoursMock } from "../data/cours";

const CoursController = express.Router();

// Obtenir tous les cours
CoursController.get("", (req, res) => {
  res.json(CoursMock);
});

// Obtenir un cours par ID
CoursController.get("/:id", (req, res) => {
  const cour = CoursMock.find((c) => c.id === parseInt(req.params.id));
  if (!cour) return res.status(404).send("Cours non trouvé");
  res.json(cour);
});

export default CoursController;
