import { Salle } from "../models/entities";

export const SallesMock: Salle[] = [
  {
    id: 201,
    nomBatiment: "Bâtiment A",
    numeroSalle: "A101",
    capacite: 30,
    equipements: ["Projecteur", "Tableau blanc"],
    disponibilites: ["Lundi 08:00-10:00", "Mercredi 14:00-16:00"],
  },
  {
    id: 202,
    nomBatiment: "Bâtiment B",
    numeroSalle: "B202",
    capacite: 40,
    equipements: ["Projecteur", "Tableau interactif"],
    disponibilites: ["Mardi 08:00-10:00", "Jeudi 14:00-16:00"],
  },
];
