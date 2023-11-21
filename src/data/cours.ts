import { Cours } from "./../models/entities";

export const CoursMock: Cours[] = [
  {
    id: 101,
    nom: "Introduction à l'IA",
    departement: "Informatique",
    professeurId: 1,
    horaire: "Lundi 10:00-12:00",
    credits: 4,
    salleId: 201,
  },
  {
    id: 102,
    nom: "Théorie des Graphes",
    departement: "Mathématiques",
    professeurId: 2,
    horaire: "Mardi 14:00-16:00",
    credits: 3,
    salleId: 202,
  },
  {
    id: 103,
    nom: "Série de Fourier",
    departement: "Mathématiques",
    professeurId: 2,
    horaire: "Mardi 16:15-18:00",
    credits: 3,
    salleId: 202,
  },
  {
    id: 104,
    nom: "Introduction à la physique nucléaire",
    departement: "Physique",
    professeurId: 3,
    horaire: "Mardi 14:00-16:00",
    credits: 3,
    salleId: 201,
  },
];
